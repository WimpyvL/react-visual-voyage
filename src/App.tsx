
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "./stores/authStore";
import { supabase } from "@/lib/supabase";

// Auth
import AuthPage from "./components/auth/AuthPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Layouts
import AdminLayout from "./components/layouts/AdminLayout";
import AgentLayout from "./components/layouts/AgentLayout";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AgentList from "./pages/admin/AgentList";
import ClientList from "./pages/admin/ClientList";
import ProductList from "./pages/admin/ProductList";
import TransactionList from "./pages/admin/TransactionList";
import CommissionList from "./pages/admin/CommissionList";
import AdminSettings from "./pages/admin/Settings";

// Agent Pages
import AgentDashboard from "./pages/agent/Dashboard";
import ClientRegistration from "./pages/agent/ClientRegistration";
import ProductCatalog from "./pages/agent/ProductCatalog";
import CommissionTracking from "./pages/agent/CommissionTracking";
import AgentProfile from "./pages/agent/Profile";

const queryClient = new QueryClient();

const App = () => {
  const { setUser, setSession, setRole } = useAuthStore();

  useEffect(() => {
    // Check for an existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user || null);
      
      // Set role based on user metadata
      if (session?.user) {
        const userRole = session.user.user_metadata.role as 'admin' | 'agent';
        setRole(userRole || 'agent'); // Default to agent if role is not set
      }
    });

    // Set up auth state listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user || null);
      
      // Set role based on user metadata
      if (session?.user) {
        const userRole = session.user.user_metadata.role as 'admin' | 'agent';
        setRole(userRole || 'agent'); // Default to agent if role is not set
      } else {
        setRole(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [setUser, setSession, setRole]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public route */}
            <Route path="/auth" element={<AuthPage />} />
            
            {/* Default redirect to auth */}
            <Route path="/" element={<Navigate to="/auth" replace />} />
            
            {/* Protected admin routes */}
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="agents" element={<AgentList />} />
                <Route path="clients" element={<ClientList />} />
                <Route path="products" element={<ProductList />} />
                <Route path="transactions" element={<TransactionList />} />
                <Route path="commissions" element={<CommissionList />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>
            </Route>
            
            {/* Protected agent routes */}
            <Route element={<ProtectedRoute allowedRoles={['agent']} />}>
              <Route path="/agent" element={<AgentLayout />}>
                <Route index element={<AgentDashboard />} />
                <Route path="clients/new" element={<ClientRegistration />} />
                <Route path="products" element={<ProductCatalog />} />
                <Route path="commissions" element={<CommissionTracking />} />
                <Route path="profile" element={<AgentProfile />} />
              </Route>
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
