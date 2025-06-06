
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Index from "./pages/Index";
import PhotoGallery from "./pages/PhotoGallery";
import EidGreeting from "./pages/EidGreeting";
import NotFound from "./pages/NotFound";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ErrorBoundary from "./components/error/ErrorBoundary";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <ThemeProvider defaultTheme="system" storageKey="pt-abdul-rahman-theme">
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <LazyMotion features={domAnimation}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollProgressBar />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/gallery" element={<PhotoGallery />} />
                  <Route path="/eid" element={<EidGreeting />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </LazyMotion>
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
