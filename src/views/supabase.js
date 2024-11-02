import { createClient } from '@supabase/supabase-js'

// Use environment variables for Supabase URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Sign up function
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) console.error('Supabase Sign-Up Error:', error) // Enhanced error logging
  return { data, error }
}

// Login function
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) console.error('Supabase Login Error:', error) // Enhanced error logging
  return { data, error }
}

// Logout function
export async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) console.error('Logout Error:', error)
  return { error }
}
