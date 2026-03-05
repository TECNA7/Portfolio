import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@assets/kripa logo_1758342439104.png";

const Navigation = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "/", label: "Home", section: "home" },
    { href: "/about", label: "About", section: "about" },
    { href: "/projects", label: "Projects", section: "projects" },
    { href: "/blog", label: "Blog", section: "blog" },
    { href: "/contact", label: "Contact", section: "contact" },
  ];

  useEffect(() => {
    const currentPath = location;
    const currentItem = navItems.find(item => item.href === currentPath);
    if (currentItem) {
      setActiveSection(currentItem.section);
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
          <Link href="/" data-testid="logo-link">
            <img 
              src={logoImage} 
              alt="Kripa Lamichhane" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`nav-${item.section}`}>
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          
          <button
            className="md:hidden text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} data-testid={`mobile-nav-${item.section}`}>
                  <div 
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Floating Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link key={item.section} href={item.href} data-testid={`nav-dot-${item.section}`}>
            <div
              className={cn(
                "nav-dot w-3 h-3 rounded-full bg-muted cursor-pointer",
                activeSection === item.section && "active"
              )}
              onClick={() => setActiveSection(item.section)}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
