
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const supabaseUrl = 'https://jiqvdtsyiyunwmbsidcl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppcXZkdHN5aXl1bndtYnNpZGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxOTU4NDUsImV4cCI6MjA2MTc3MTg0NX0.kHu81vmxl9gfcmPXE6plN-VHboM9jBhSj0NPGjdOLHk';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
