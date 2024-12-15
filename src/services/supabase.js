import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const loginKey = import.meta.env.VITE_LOGIN_KEY
const passwordKey = import.meta.env.VITE_PASSWORD_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey,loginKey, passwordKey);