
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { HelmetProvider } from 'react-helmet-async';
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
import NotFound from "./pages/NotFound";

// Create a Supabase context
type SupabaseContextType = {
  session: Session | null;
};

const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
};

const queryClient = new QueryClient();

const App = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Check for an existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Set up auth state listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseContext.Provider value={{ session }}>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
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
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </SupabaseContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
