import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Stethoscope, Smartphone, Users, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/arha-hero.jpg';

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary-glow/5 to-secondary/10">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Trusted Healthcare AI
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Healthcare for
                <span className="text-primary"> Rural Kenya</span>
              </h1>
              
              <p className="text-xl text-health-body max-w-lg">
                ARHA provides AI-powered diagnosis, triage, and health tracking designed for communities with limited healthcare access.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary_gradient" size="lg" className="flex-1 sm:flex-none" onClick={() => navigate('/sign-in')}>
                Start Health Check
              </Button>
              <Button variant="outline" size="lg" className="flex-1 sm:flex-none" onClick={() => navigate('/sign-in')}>
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-health-small">Patients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">98%</div>
                <div className="text-health-small">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-health-small">Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-health-float">
              <img 
                src={heroImage} 
                alt="ARHA Healthcare Platform" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <Card className="absolute -bottom-4 -left-4 p-4 bg-card shadow-health-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="font-medium text-sm">AI Diagnosis</div>
                  <div className="text-health-small">95% Accurate</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -top-4 -right-4 p-4 bg-card shadow-health-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Mobile First</div>
                  <div className="text-health-small">Works Offline</div>
                </div>
              </div>
            </Card>

            <Card className="absolute top-1/2 -left-6 p-3 bg-card shadow-health-card">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                <div className="text-sm font-medium">Community Care</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}