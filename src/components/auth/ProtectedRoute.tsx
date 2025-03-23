
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

interface ProtectedRouteProps {
  allowedRoles?: Array<'admin' | 'agent'>;
}

export default function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { user, role } = useAuthStore();
  const location = useLocation();

  // If user is not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // If specific roles are required and user doesn't have any of them
  if (allowedRoles && allowedRoles.length > 0 && role && !allowedRoles.includes(role)) {
    // Redirect admin to admin dashboard if trying to access agent routes
    if (role === 'admin') {
      return <Navigate to="/admin" replace />;
    }
    // Redirect agent to agent dashboard if trying to access admin routes
    if (role === 'agent') {
      return <Navigate to="/agent" replace />;
    }
  }

  // If user is authenticated and has required role (or no specific role is required)
  return <Outlet />;
}
