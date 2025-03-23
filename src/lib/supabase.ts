
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lcwzzdnkciqautrkbchu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxjd3p6ZG5rY2lxYXV0cmtiY2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwODIyNTcsImV4cCI6MjAyMzY1ODI1N30.d6yRRQT4Uh0HqqJ2FkNYhnJ5WDWH2bAuT33ePgdXGNw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
