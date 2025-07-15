import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  AlertCircle, 
  CheckCircle, 
  Activity, 
  Phone, 
  Calendar,
  MapPin,
  TrendingUp,
  Heart,
  Baby,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CHWDashboard = () => {
  const navigate = useNavigate();
  
  const stats = [
    { title: 'Patients This Week', value: '32', icon: Users, color: 'text-blue-600' },
    { title: 'Emergency Cases', value: '3', icon: AlertCircle, color: 'text-red-600' },
    { title: 'Follow-ups Due', value: '8', icon: Calendar, color: 'text-orange-600' },
    { title: 'Referrals Made', value: '5', icon: TrendingUp, color: 'text-green-600' },
  ];

  const recentCases = [
    { id: 1, patient: 'Sarah M.', condition: 'Malaria symptoms', priority: 'High', status: 'Pending', time: '2 hours ago' },
    { id: 2, patient: 'John K.', condition: 'Routine checkup', priority: 'Low', status: 'Completed', time: '4 hours ago' },
    { id: 3, patient: 'Mary W.', condition: 'Pregnancy monitoring', priority: 'Medium', status: 'Scheduled', time: '6 hours ago' },
  ];

  const quickActions = [
    { title: 'New Patient Assessment', icon: Users, description: 'Register and assess new patient', color: 'bg-blue-50 hover:bg-blue-100' },
    { title: 'Symptom Checker', icon: Activity, description: 'AI-powered symptom analysis', color: 'bg-green-50 hover:bg-green-100' },
    { title: 'Maternal Health', icon: Baby, description: 'Pregnancy and child health tracking', color: 'bg-pink-50 hover:bg-pink-100' },
    { title: 'Emergency Protocol', icon: Shield, description: 'Quick access to emergency procedures', color: 'bg-red-50 hover:bg-red-100' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-health-heading">CHW Dashboard</h1>
            <p className="text-health-body">Community Health Worker Portal</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-health-body" />
            <span className="text-sm text-health-body">Kisumu County, Kenya</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-health-soft transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-health-body">{stat.title}</p>
                    <p className="text-2xl font-bold text-health-heading">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`h-auto p-4 flex flex-col items-center gap-3 ${action.color} border`}
                  onClick={() => {
                    // Navigate to specific action - placeholder for now
                    console.log(`Navigate to ${action.title}`);
                  }}
                >
                  <action.icon className="w-8 h-8" />
                  <div className="text-center">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-xs text-health-body">{action.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Cases */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCases.map((case_) => (
                <div key={case_.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{case_.patient}</span>
                      <Badge className={getPriorityColor(case_.priority)}>{case_.priority}</Badge>
                      <Badge className={getStatusColor(case_.status)}>{case_.status}</Badge>
                    </div>
                    <p className="text-sm text-health-body">{case_.condition}</p>
                    <p className="text-xs text-health-small">{case_.time}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="primary_gradient">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Protocols */}
        <Card className="border-red-200 bg-red-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertCircle className="w-5 h-5" />
              Emergency Protocols
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 border-red-200 hover:bg-red-100">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <span className="font-medium">Severe Malaria</span>
                <span className="text-xs text-center">Immediate referral protocol</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 border-red-200 hover:bg-red-100">
                <Heart className="w-6 h-6 text-red-600" />
                <span className="font-medium">Cardiac Emergency</span>
                <span className="text-xs text-center">First aid and transport</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 border-red-200 hover:bg-red-100">
                <Baby className="w-6 h-6 text-red-600" />
                <span className="font-medium">Obstetric Emergency</span>
                <span className="text-xs text-center">Maternal danger signs</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CHWDashboard;