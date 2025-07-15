import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import PatientOnboarding from "./pages/PatientOnboarding";
import PatientDashboard from "./pages/PatientDashboard";
import CHWDashboard from "./pages/CHWDashboard";
import ProviderPortal from "./pages/ProviderPortal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/patient-onboarding" element={<PatientOnboarding />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/chw-dashboard" element={<CHWDashboard />} />
          <Route path="/provider-portal" element={<ProviderPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
