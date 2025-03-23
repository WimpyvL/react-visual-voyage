
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';

type Role = 'admin' | 'agent';

interface AuthState {
  user: User | null;
  session: Session | null;
  role: Role | null;
  isLoading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, role: Role) => Promise<void>;
  signOut: () => Promise<void>;
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  setRole: (role: Role | null) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      session: null,
      role: null,
      isLoading: false,
      error: null,
      signIn: async (email, password) => {
        try {
          set({ isLoading: true, error: null });
          const { error } = await supabase.auth.signInWithPassword({ email, password });
          
          if (error) throw error;
          
          // Role will be set after fetching user profile in the auth listener
        } catch (error: any) {
          set({ error: error.message });
          console.error('Sign in error:', error);
        } finally {
          set({ isLoading: false });
        }
      },
      signUp: async (email, password, role) => {
        try {
          set({ isLoading: true, error: null });
          
          // Create the user in auth
          const { error: signUpError } = await supabase.auth.signUp({ 
            email, 
            password,
            options: {
              data: {
                role,
              }
            }
          });
          
          if (signUpError) throw signUpError;
          
          set({ role });
        } catch (error: any) {
          set({ error: error.message });
          console.error('Sign up error:', error);
        } finally {
          set({ isLoading: false });
        }
      },
      signOut: async () => {
        try {
          set({ isLoading: true, error: null });
          await supabase.auth.signOut();
          set({ user: null, session: null, role: null });
        } catch (error: any) {
          set({ error: error.message });
          console.error('Sign out error:', error);
        } finally {
          set({ isLoading: false });
        }
      },
      setSession: (session) => set({ session }),
      setUser: (user) => set({ user }),
      setRole: (role) => set({ role }),
      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
