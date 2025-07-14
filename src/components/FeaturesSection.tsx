import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Mic, 
  Camera, 
  Baby, 
  Users, 
  MapPin, 
  Wifi, 
  Shield,
  MessageCircle,
  Stethoscope,
  Heart,
  Globe
} from 'lucide-react';

interface Feature {
  icon: typeof Brain;
  title: string;
  description: string;
  benefits: string[];
  variant: 'default' | 'emergency' | 'success' | 'warning' | 'health';
}

const features: Feature[] = [
  {
    icon: Brain,
    title: "AI Symptom Checker",
    description: "Advanced AI analyzes symptoms in Swahili and English to provide accurate health assessments.",
    benefits: ["95% diagnostic accuracy", "Multi-language support", "Instant triage recommendations"],
    variant: "default"
  },
  {
    icon: Mic,
    title: "Voice Recognition",
    description: "Speak your symptoms naturally in Swahili or English for hands-free health assessments.",
    benefits: ["Voice-to-text in local languages", "Low-literacy friendly", "Hands-free operation"],
    variant: "success"
  },
  {
    icon: Camera,
    title: "Visual Diagnosis",
    description: "Upload photos of skin conditions, wounds, or eye infections for AI-powered visual analysis.",
    benefits: ["Image-based diagnosis", "Confidence scoring", "Photo documentation"],
    variant: "health"
  },
  {
    icon: Baby,
    title: "Maternal & Child Health",
    description: "Comprehensive tracking for pregnancy, immunizations, nutrition, and child development.",
    benefits: ["Immunization reminders", "Growth monitoring", "Pregnancy alerts"],
    variant: "warning"
  },
  {
    icon: Users,
    title: "Community Health Workers",
    description: "Decision support tools based on Ministry of Health protocols for CHWs.",
    benefits: ["IMCI protocols", "Clinical guidelines", "Case management"],
    variant: "success"
  },
  {
    icon: MapPin,
    title: "Health Surveillance",
    description: "Anonymous, geo-tagged data for outbreak detection and public health monitoring.",
    benefits: ["Real-time monitoring", "Outbreak detection", "Health analytics"],
    variant: "emergency"
  }
];

const capabilities = [
  { icon: Wifi, text: "Works Offline" },
  { icon: Shield, text: "Secure & Private" },
  { icon: MessageCircle, text: "Multi-language" },
  { icon: Stethoscope, text: "Clinical Protocols" },
  { icon: Heart, text: "Community Focused" },
  { icon: Globe, text: "Culturally Appropriate" }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-health-title mb-4">
            Comprehensive Health Solutions
          </h2>
          <p className="text-health-body">
            ARHA combines cutting-edge AI technology with deep understanding of rural healthcare needs, 
            providing accessible, accurate, and culturally appropriate health assistance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-health-card hover:shadow-health-float transition-health group cursor-pointer">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-health ${
                  feature.variant === 'default' ? 'bg-primary/20' :
                  feature.variant === 'emergency' ? 'bg-emergency/20' :
                  feature.variant === 'success' ? 'bg-success/20' :
                  feature.variant === 'warning' ? 'bg-warning/20' :
                  'bg-secondary/20'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.variant === 'default' ? 'text-primary' :
                    feature.variant === 'emergency' ? 'text-emergency' :
                    feature.variant === 'success' ? 'text-success' :
                    feature.variant === 'warning' ? 'text-warning' :
                    'text-secondary'
                  }`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-health-body mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities */}
        <div className="bg-card rounded-2xl p-8 shadow-health-card">
          <h3 className="text-2xl font-semibold text-center mb-8">Built for Rural Communities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{capability.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="primary_gradient" size="lg">
            Try ARHA Today
          </Button>
        </div>
      </div>
    </section>
  );
}