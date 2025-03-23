
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';

import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import WebDesign from "./pages/WebDesign";
import Hosting from "./pages/Hosting";
import CloudServices from "./pages/CloudServices";
import Connectivity from "./pages/Connectivity";
import EmailAutomation from "./pages/EmailAutomation";
import FibrePrepaid from "./pages/FibrePrepaid";
import Security from "./pages/Security";
import VpnServices from "./pages/VpnServices";
import SolarSolutions from "./pages/SolarSolutions";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import OurPartners from "./pages/OurPartners";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <HelmetProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <Routes>
                  {/* Public routes */}
                  <Route path="/" element={<Index />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/web-design" element={<WebDesign />} />
                  <Route path="/hosting" element={<Hosting />} />
                  <Route path="/cloud-services" element={<CloudServices />} />
                  <Route path="/connectivity" element={<Connectivity />} />
                  <Route path="/email-automation" element={<EmailAutomation />} />
                  <Route path="/fibre-prepaid" element={<FibrePrepaid />} />
                  <Route path="/security" element={<Security />} />
                  <Route path="/vpn-services" element={<VpnServices />} />
                  <Route path="/solar-solutions" element={<SolarSolutions />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/our-partners" element={<OurPartners />} />
                  
                  {/* Auth routes */}
                  <Route path="/auth/login" element={<Login />} />
                  <Route path="/auth/register" element={<Register />} />
                  
                  {/* Admin routes */}
                  <Route 
                    path="/admin/dashboard" 
                    element={
                      <ProtectedRoute requiredRole="admin">
                        <div className="p-8">
                          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                          <p className="text-gray-500">Coming soon</p>
                        </div>
                      </ProtectedRoute>
                    } 
                  />
                  
                  {/* Agent routes */}
                  <Route 
                    path="/agent/dashboard" 
                    element={
                      <ProtectedRoute requiredRole="agent">
                        <div className="p-8">
                          <h1 className="text-2xl font-bold">Agent Dashboard</h1>
                          <p className="text-gray-500">Coming soon</p>
                        </div>
                      </ProtectedRoute>
                    } 
                  />
                  
                  {/* Catch-all route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </TooltipProvider>
            </HelmetProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
