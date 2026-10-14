// ============================================
// GROWTHIVE BOOK — SUPABASE CLIENT
// ============================================
// Loaded after the Supabase CDN script on every page that needs auth or data.
// The anon key below is the PUBLIC key — safe to expose in frontend code.
// It only ever acts within the Row Level Security rules set on the database.
// NEVER put the service_role key in this file or anywhere in frontend code.

const SUPABASE_URL = "https://wjmyyvccpsacqpvrbgch.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_yBtPRB9MZpeg_s1Wsq_Fcg_1QCOk4po";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
