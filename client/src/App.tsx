import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SeasonProvider } from "@/contexts/season-context";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Candles from "@/pages/candles";
import Recommendations from "@/pages/recommendations";
import KnowMeBetter from "@/pages/know-me-better";
import Contact from "@/pages/contact";
import Navigation from "@/components/navigation";
import FloatingElements from "@/components/floating-elements";
import SeasonalDecorations from "@/components/seasonal-decorations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/blog" component={Blog} />
      <Route path="/candles" component={Candles} />
      <Route path="/recommendations" component={Recommendations} />
      <Route path="/know-me-better" component={KnowMeBetter} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SeasonProvider>
        <TooltipProvider>
          <div className="relative min-h-screen">
            <FloatingElements />
            <SeasonalDecorations />
            <Navigation />
            <Router />
            <Toaster />
          </div>
        </TooltipProvider>
      </SeasonProvider>
    </QueryClientProvider>
  );
}

export default App;
