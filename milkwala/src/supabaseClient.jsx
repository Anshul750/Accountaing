import { createClient } from '@supabase/supabase-js';

const SupabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const SupabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("Supabase URL:", SupabaseUrl);
console.log("Supabase Key:", SupabaseAnonKey);

export const supabase = createClient(SupabaseUrl, SupabaseAnonKey);
