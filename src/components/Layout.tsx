import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
}

export function Layout({ children, showNavigation = true }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {showNavigation && (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-health-soft">
          <div className="container mx-auto px-4 flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-semibold text-foreground">ARHA</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-health-body hover:text-primary transition-health">
                Features
              </a>
              <a href="#about" className="text-health-body hover:text-primary transition-health">
                About
              </a>
              <a href="#contact" className="text-health-body hover:text-primary transition-health">
                Contact
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button variant="primary_gradient" size="sm">
                Get Started
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon_sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-card p-4 space-y-4">
              <a href="#features" className="block text-health-body hover:text-primary transition-health">
                Features
              </a>
              <a href="#about" className="block text-health-body hover:text-primary transition-health">
                About
              </a>
              <a href="#contact" className="block text-health-body hover:text-primary transition-health">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button variant="primary_gradient" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </header>
      )}

      <main className="flex-1">
        {children}
      </main>

      {showNavigation && (
        <footer className="border-t bg-muted/30 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-medium">ARHA</span>
            </div>
            <p className="text-health-small max-w-2xl mx-auto">
              AI-Powered Rural Health Assistant - Empowering communities with accessible healthcare technology
            </p>
            <p className="text-health-small mt-4">
              © 2024 ARHA. Built with care for rural Kenya.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}