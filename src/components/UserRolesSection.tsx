import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  UserCheck, 
  Stethoscope,
  MessageSquare,
  Camera,
  ClipboardList,
  HeartHandshake,
  Shield,
  Brain
} from 'lucide-react';

interface UserRole {
  title: string;
  description: string;
  icon: typeof User;
  features: string[];
  ctaText: string;
  variant: 'default' | 'success' | 'health';
}

const userRoles: UserRole[] = [
  {
    title: "Patients & Families",
    description: "Get instant health guidance and track your family's wellbeing",
    icon: User,
    features: [
      "24/7 AI symptom checker",
      "Voice input in Swahili & English", 
      "Photo-based diagnosis",
      "Family health tracking",
      "Immunization reminders",
      "Emergency triage guidance"
    ],
    ctaText: "Start Health Check",
    variant: "default"
  },
  {
    title: "Community Health Workers",
    description: "Enhanced decision support tools and patient management",
    icon: UserCheck,
    features: [
      "Clinical protocol guidance",
      "IMCI decision support",
      "Patient case management", 
      "Offline data collection",
      "Health education materials",
      "Performance analytics"
    ],
    ctaText: "CHW Dashboard",
    variant: "success"
  },
  {
    title: "Healthcare Providers",
    description: "Advanced diagnostics and population health insights",
    icon: Stethoscope,
    features: [
      "Advanced AI diagnostics",
      "Patient consultation tools",
      "Population health data",
      "Outbreak monitoring",
      "Clinical research data",
      "Remote consultation"
    ],
    ctaText: "Provider Portal",
    variant: "health"
  }
];

const commonFeatures = [
  { icon: MessageSquare, text: "Multi-language Support" },
  { icon: Camera, text: "Visual Diagnosis" },
  { icon: ClipboardList, text: "Health Records" },
  { icon: HeartHandshake, text: "Community Care" },
  { icon: Shield, text: "Privacy Protected" },
  { icon: Brain, text: "AI-Powered" }
];

export function UserRolesSection() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-health-title mb-4">
            Designed for Every Role in Healthcare
          </h2>
          <p className="text-health-body">
            ARHA adapts to your role in the healthcare ecosystem, providing tailored tools and insights 
            for patients, community health workers, and healthcare providers.
          </p>
        </div>

        {/* User Roles */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {userRoles.map((role, index) => (
            <Card key={index} className="shadow-health-card hover:shadow-health-float transition-health group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-health ${
                  role.variant === 'default' ? 'bg-gradient-primary' :
                  role.variant === 'success' ? 'bg-gradient-health' :
                  'bg-secondary'
                }`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-health-body text-center">{role.description}</p>
                
                <div className="space-y-3">
                  {role.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        role.variant === 'default' ? 'bg-primary' :
                        role.variant === 'success' ? 'bg-success' :
                        'bg-secondary'
                      }`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={role.variant === 'default' ? 'primary_gradient' : 
                          role.variant === 'success' ? 'success' : 'health'} 
                  className="w-full"
                  size="lg"
                >
                  {role.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Common Features */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Available to All Users</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {commonFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-card shadow-health-soft rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <div className="text-center mt-12 space-y-4">
          <h3 className="text-xl font-semibold">Ready to Experience ARHA?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary_gradient" size="lg">
              Try Demo
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}