import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, User, Stethoscope, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - in real app, this would call an API
    if (email && password) {
      toast({
        title: "Welcome to ARHA",
        description: `Signed in successfully as ${userType}`,
      });
      
      // Navigate based on user type
      switch (userType) {
        case 'patient':
          navigate('/patient-onboarding');
          break;
        case 'chw':
          navigate('/chw-dashboard');
          break;
        case 'provider':
          navigate('/provider-portal');
          break;
        default:
          navigate('/');
      }
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
    }
  };

  const userTypes = [
    { value: 'patient', label: 'Patient', icon: User, description: 'Access health services' },
    { value: 'chw', label: 'Community Health Worker', icon: Users, description: 'Support community health' },
    { value: 'provider', label: 'Healthcare Provider', icon: Stethoscope, description: 'Manage patient care' },
  ];

  return (
    <Layout showNavigation={false}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 p-4">
        <Card className="w-full max-w-md shadow-health-elevated">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">ARHA</h1>
            </div>
            <CardTitle className="text-xl text-health-heading">Welcome Back</CardTitle>
            <p className="text-health-body">Sign in to access your health services</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <Tabs value={userType} onValueChange={setUserType} className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-auto p-1">
                {userTypes.map((type) => (
                  <TabsTrigger 
                    key={type.value} 
                    value={type.value}
                    className="flex flex-col items-center gap-1 p-3 text-xs"
                  >
                    <type.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{type.label}</span>
                    <span className="sm:hidden">{type.label.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {userTypes.map((type) => (
                <TabsContent key={type.value} value={type.value} className="mt-4">
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <type.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-health-body">{type.description}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" variant="primary_gradient">
                Sign In
              </Button>
            </form>
            
            <div className="text-center">
              <p className="text-sm text-health-body">
                Don't have an account?{' '}
                <Button variant="link" className="p-0 h-auto text-primary">
                  Contact your local health facility
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SignIn;