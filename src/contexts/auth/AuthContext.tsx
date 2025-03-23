
import React, { createContext } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { Profile, UserRole } from '@/types';

export interface AuthContextProps {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, firstName: string, lastName: string, role?: UserRole) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
  isAdmin: boolean;
  isAgent: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;
