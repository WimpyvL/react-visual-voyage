
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const supabaseUrl = 'https://fwmhrmrfmsgbjlmnarib.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bWhybXJmbXNnYmpsbW5hcmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMDcxNzQsImV4cCI6MjA1Nzg4MzE3NH0.M5xrHNcp8y4JATZtNmioFKJhbCRku6tw4ytEcm3EhwE';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
