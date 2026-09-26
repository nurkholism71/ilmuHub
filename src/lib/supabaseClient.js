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

  if (!isSupabaseConfigured) {
    // Mock successful authentication if Supabase is not yet connected
    return {
      user: {
        id: 'demo-user-' + Date.now(),
        email,
        user_metadata: { 
          role: effectiveRole, 
          full_name: effectiveRole === 'admin' ? 'Super Admin (Nur Kholis)' : effectiveRole === 'teacher' ? 'Ustadz Ahmed Mohamed' : 'Omar Farouk' 
        }
      },
      error: null
    };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { user: data?.user, session: data?.session, error };
}

export async function signUpWithRole(email, password, fullName, role = 'student') {
  // Enforce admin role strictly to ADMIN_EMAIL
  const effectiveRole = isAdminEmail(email) ? 'admin' : (role === 'admin' ? 'student' : role);

  if (!isSupabaseConfigured) {
    return {
      user: {
        id: 'demo-user-' + Date.now(),
        email,
        user_metadata: { 
          role: effectiveRole, 
          full_name: effectiveRole === 'admin' ? 'Super Admin (Nur Kholis)' : fullName 
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
        full_name: effectiveRole === 'admin' ? (fullName || 'Super Admin (Nur Kholis)') : fullName,
        role: effectiveRole,
      }
    }
  });

  return { user: data?.user, error };
}

export async function signOutUser() {
  if (!isSupabaseConfigured) return { error: null };
  return await supabase.auth.signOut();
}
