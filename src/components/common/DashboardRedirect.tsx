
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';

const DashboardRedirect: React.FC = () => {
  const { isAdmin, isAgent, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;
    
    if (isAdmin) {
      navigate('/admin/dashboard');
    } else if (isAgent) {
      navigate('/agent/dashboard');
    } else {
      navigate('/');
    }
  }, [isAdmin, isAgent, isLoading, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

export default DashboardRedirect;
