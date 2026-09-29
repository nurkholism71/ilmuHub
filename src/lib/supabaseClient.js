import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 
  'https://your-project.supabase.co';

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  'your-anon-key';

export const isSupabaseConfigured = 
  Boolean(import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL) && 
  Boolean(import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) &&
  supabaseUrl !== 'https://your-project.supabase.co';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const ADMIN_EMAIL = 'nurcholism51@gmail.com';

export function isAdminEmail(email) {
  return email?.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

/**
 * Authentication Helpers for IlmHub
 */
export async function signInWithRole(email, password, role = 'student') {
  // Validate that only nurcholism51@gmail.com can sign in as admin
  if (role === 'admin' && !isAdminEmail(email)) {
    return {
      user: null,
      error: { message: `Akses Admin hanya diizinkan untuk email ${ADMIN_EMAIL}` }
    };
  }

  const effectiveRole = isAdminEmail(email) ? 'admin' : role;
  const isDemoCredential = 
    email === 'student@ilmhub.com' || 
    email === 'ahmed.mohamed@ilmhub.com' || 
    email === 'admin@ilmhub.com' ||
    password === '••••••••••••';

  // If using demo credentials or Supabase is not configured, supply robust demo session
  if (!isSupabaseConfigured || isDemoCredential) {
    if (isSupabaseConfigured) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        // ignore sign out error during demo switch
      }
    }
    return {
      user: {
        id: 'demo-user-' + effectiveRole + '-' + Date.now(),
        email: email || `${effectiveRole}@ilmhub.com`,
        user_metadata: { 
          role: effectiveRole, 
          full_name: effectiveRole === 'admin' ? 'Super Admin (Nur Kholis)' : effectiveRole === 'teacher' ? 'Ustadz Ahmed Mohamed' : 'Aisha Rahman',
          avatar_url: effectiveRole === 'admin' 
            ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
            : effectiveRole === 'teacher' 
            ? '/images/tutor_ahmed.jpg' 
            : '/images/student_aisha.jpg',
          isDemo: true
        }
      },
      error: null
    };
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { user: null, error };
    }

    // Ensure user metadata has role synced
    if (data?.user) {
      if (data.user.user_metadata?.role !== effectiveRole) {
        try {
          await supabase.auth.updateUser({
            data: { role: effectiveRole }
          });
          data.user.user_metadata = {
            ...data.user.user_metadata,
            role: effectiveRole
          };
        } catch (e) {}
      }
    }

    return { user: data?.user, session: data?.session, error: null };
  } catch (err) {
    return { user: null, error: err };
  }
}

export async function signUpWithRole(email, password, fullName, role = 'student') {
  // Enforce admin role strictly to ADMIN_EMAIL
  const effectiveRole = isAdminEmail(email) ? 'admin' : (role === 'admin' ? 'student' : role);

  if (!isSupabaseConfigured) {
    return {
      user: {
        id: 'demo-user-' + effectiveRole + '-' + Date.now(),
        email,
        user_metadata: { 
          role: effectiveRole, 
          full_name: effectiveRole === 'admin' ? 'Super Admin (Nur Kholis)' : (fullName || (effectiveRole === 'teacher' ? 'Ustadz Ahmed Mohamed' : 'Aisha Rahman')),
          avatar_url: effectiveRole === 'teacher' ? '/images/tutor_ahmed.jpg' : '/images/student_aisha.jpg',
          isDemo: true
        }
      },
      error: null
    };
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: effectiveRole === 'admin' ? (fullName || 'Super Admin (Nur Kholis)') : (fullName || (effectiveRole === 'teacher' ? 'Ustadz Ahmed Mohamed' : 'Aisha Rahman')),
        role: effectiveRole,
        avatar_url: effectiveRole === 'teacher' ? '/images/tutor_ahmed.jpg' : '/images/student_aisha.jpg'
      }
    }
  });

  return { user: data?.user, error };
}

export async function signOutUser() {
  if (!isSupabaseConfigured) return { error: null };
  try {
    return await supabase.auth.signOut();
  } catch (e) {
    return { error: null };
  }
}
