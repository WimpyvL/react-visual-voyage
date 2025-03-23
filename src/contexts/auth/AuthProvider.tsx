
import React, { useState, useEffect } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { Profile, UserRole } from '@/types';
import { supabase } from '@/lib/supabase';
import AuthContext from './AuthContext';
import { fetchProfile, signIn, signUp, signOut } from './authFunctions';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.id);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          const profileData = await fetchProfile(session.user.id);
          setProfile(profileData);
        } else {
          setProfile(null);
        }
      }
    );

    // Then check for existing session
    const initializeAuth = async () => {
      try {
        setIsLoading(true);
        
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Initializing auth with session:', session?.user?.id);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          const profileData = await fetchProfile(session.user.id);
          setProfile(profileData);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignIn = async (email: string, password: string) => {
    await signIn(email, password, navigate, setIsLoading);
  };

  const handleSignUp = async (
    email: string, 
    password: string, 
    firstName: string, 
    lastName: string, 
    role: UserRole = 'agent'
  ) => {
    await signUp(email, password, firstName, lastName, navigate, setIsLoading, role);
  };

  const handleSignOut = async () => {
    await signOut(navigate, setIsLoading);
  };

  const isAdmin = profile?.role === 'admin';
  const isAgent = profile?.role === 'agent';

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        profile,
        signIn: handleSignIn,
        signUp: handleSignUp,
        signOut: handleSignOut,
        isLoading,
        isAdmin,
        isAgent
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
