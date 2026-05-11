const SUPABASE_URL = 'https://ejuhpwiyzevuhzcdsjmi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdWhwd2l5emV2dWh6Y2Rzam1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MDA3NzcsImV4cCI6MjA5NDA3Njc3N30.YVIC1qcywVycAEOIQeg0WfDyFzFnqfRPP-WMbcM2QC4';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
