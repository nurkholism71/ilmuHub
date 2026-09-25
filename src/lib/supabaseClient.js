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

/**
 * Authentication Helpers for IlmHub
 */
export async function signInWithRole(email, password, role = 'student') {
  if (!isSupabaseConfigured) {
    // Mock successful authentication if Supabase is not yet connected
    console.warn('Supabase not fully configured yet. Running in demo mode.');
    return {
      user: {
        id: 'demo-user-' + Date.now(),
        email,
        user_metadata: { role, full_name: role === 'teacher' ? 'Ustadz Ahmed Mohamed' : 'Omar Farouk' }
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
  if (!isSupabaseConfigured) {
    return {
      user: {
        id: 'demo-user-' + Date.now(),
        email,
        user_metadata: { role, full_name: fullName }
      },
      error: null
    };
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: role,
      }
    }
  });

  return { user: data?.user, error };
}

export async function signOutUser() {
  if (!isSupabaseConfigured) return { error: null };
  return await supabase.auth.signOut();
}
