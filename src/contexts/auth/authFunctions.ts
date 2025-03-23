
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { Profile, UserRole } from '@/types';
import { NavigateFunction } from 'react-router-dom';

export const fetchProfile = async (userId: string): Promise<Profile | null> => {
  try {
    console.log('Fetching profile for user:', userId);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }

    console.log('Profile fetched:', data);
    return data as Profile;
  } catch (error) {
    console.error('Error in fetchProfile:', error);
    return null;
  }
};

export const signIn = async (
  email: string, 
  password: string, 
  navigate: NavigateFunction,
  setIsLoading: (isLoading: boolean) => void
) => {
  try {
    setIsLoading(true);
    
    const { data, error } = await supabase.auth.signInWithPassword({ 
      email, 
      password 
    });
    
    if (error) {
      throw error;
    }
    
    toast.success('Signed in successfully');
    navigate('/');
  } catch (error: any) {
    let errorMessage = 'Failed to sign in';
    
    if (error.message) {
      if (error.message.includes('Invalid login credentials')) {
        errorMessage = 'Invalid email or password';
      } else {
        errorMessage = error.message;
      }
    }
    
    toast.error(errorMessage);
    console.error('Sign in error:', error);
  } finally {
    setIsLoading(false);
  }
};

export const signUp = async (
  email: string, 
  password: string, 
  firstName: string, 
  lastName: string, 
  navigate: NavigateFunction,
  setIsLoading: (isLoading: boolean) => void,
  role: UserRole = 'agent'
) => {
  try {
    setIsLoading(true);
    
    // First, create the user in Supabase auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password
    });
    
    if (authError) {
      throw authError;
    }
    
    console.log("Auth signup successful:", authData);
    
    // If auth signup was successful and we have a user
    if (authData.user) {
      // Then manually insert the profile record
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          email: email,
          first_name: firstName,
          last_name: lastName,
          role: role
        });
      
      if (profileError) {
        console.error('Profile creation error:', profileError);
        // Don't throw here, as the auth user was created successfully
        toast.error('Account created but profile setup failed. Please contact support.');
      }
    }
    
    toast.success('Account created! Please check your email to confirm your registration.');
    navigate('/auth/login');
  } catch (error: any) {
    console.error('Sign up error:', error);
    
    let errorMessage = 'Failed to create account';
    if (error.message) {
      if (error.message.includes('User already registered')) {
        errorMessage = 'An account with this email already exists';
      } else {
        errorMessage = error.message;
      }
    }
    
    toast.error(errorMessage);
  } finally {
    setIsLoading(false);
  }
};

export const signOut = async (
  navigate: NavigateFunction,
  setIsLoading: (isLoading: boolean) => void
) => {
  try {
    setIsLoading(true);
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      throw error;
    }
    
    navigate('/');
    toast.success('Signed out successfully');
  } catch (error: any) {
    toast.error(error.message || 'Failed to sign out');
    console.error('Sign out error:', error);
  } finally {
    setIsLoading(false);
  }
};
