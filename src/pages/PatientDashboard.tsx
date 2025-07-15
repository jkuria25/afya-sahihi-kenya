import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Activity, 
  Calendar, 
  MessageSquare,
  Phone,
  Camera,
  Mic,
  MapPin,
  Bell,
  FileText,
  Baby,
  Pill
} from 'lucide-react';

const PatientDashboard = () => {
  const quickActions = [
    { title: 'Check Symptoms', icon: Activity, description: 'AI-powered symptom analysis', color: 'bg-blue-50 hover:bg-blue-100' },
    { title: 'Voice Consultation', icon: Mic, description: 'Speak your symptoms in Swahili or English', color: 'bg-green-50 hover:bg-green-100' },
    { title: 'Photo Diagnosis', icon: Camera, description: 'Take a photo for visual analysis', color: 'bg-purple-50 hover:bg-purple-100' },
    { title: 'Contact CHW', icon: Phone, description: 'Call your Community Health Worker', color: 'bg-orange-50 hover:bg-orange-100' },
  ];

  const healthReminders = [
    { id: 1, title: 'Malaria Medication', description: 'Take your antimalarial at 8:00 PM', time: '2 hours', urgent: true },
    { id: 2, title: 'Blood Pressure Check', description: 'Visit CHW for BP monitoring', time: '2 days', urgent: false },
    { id: 3, title: 'Vaccination Due', description: 'Child immunization scheduled', time: '1 week', urgent: false },
  ];

  const recentActivity = [
    { id: 1, type: 'Consultation', description: 'Video call with Dr. Ochieng', date: '2 days ago', status: 'Completed' },
    { id: 2, type: 'Symptom Check', description: 'AI analysis for headache and fever', date: '5 days ago', status: 'Reviewed' },
    { id: 3, type: 'Medication', description: 'Prescription refill reminder', date: '1 week ago', status: 'Pending' },
  ];

  const healthMetrics = [
    { title: 'Last Check-up', value: '2 weeks ago', icon: Heart, color: 'text-green-600' },
    { title: 'Medications', value: '2 active', icon: Pill, color: 'text-blue-600' },
    { title: 'Next Appointment', value: 'Tomorrow', icon: Calendar, color: 'text-orange-600' },
    { title: 'Health Score', value: 'Good', icon: Activity, color: 'text-green-600' },
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-health-heading">Welcome back, Sarah!</h1>
            <p className="text-health-body">How are you feeling today?</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-health-body" />
            <span className="text-sm text-health-body">Kisumu Rural Health Center</span>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {healthMetrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-health-soft transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-health-body">{metric.title}</p>
                    <p className="text-xl font-bold text-health-heading">{metric.value}</p>
                  </div>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
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
              Quick Health Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`h-auto p-6 flex flex-col items-center gap-3 ${action.color} border`}
                  onClick={() => {
                    console.log(`Navigate to ${action.title}`);
                  }}
                >
                  <action.icon className="w-10 h-10" />
                  <div className="text-center">
                    <div className="font-medium text-base">{action.title}</div>
                    <div className="text-sm text-health-body mt-1">{action.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Reminders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Health Reminders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {healthReminders.map((reminder) => (
                <div key={reminder.id} className={`p-4 border rounded-lg ${
                  reminder.urgent ? 'border-red-200 bg-red-50/50' : 'border-gray-200 hover:bg-muted/30'
                } transition-colors`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-health-heading">{reminder.title}</h3>
                        {reminder.urgent && <Badge className="bg-red-100 text-red-800">Urgent</Badge>}
                      </div>
                      <p className="text-sm text-health-body">{reminder.description}</p>
                      <p className="text-xs text-health-small mt-1">Due in {reminder.time}</p>
                    </div>
                    <Button size="sm" variant={reminder.urgent ? "default" : "outline"}>
                      {reminder.urgent ? 'Take Action' : 'View Details'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Health Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <h3 className="font-medium text-health-heading">{activity.type}</h3>
                      <p className="text-sm text-health-body">{activity.description}</p>
                      <p className="text-xs text-health-small">{activity.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={
                      activity.status === 'Completed' ? 'border-green-200 text-green-800' :
                      activity.status === 'Reviewed' ? 'border-blue-200 text-blue-800' :
                      'border-orange-200 text-orange-800'
                    }>
                      {activity.status}
                    </Badge>
                    <Button size="sm" variant="ghost">
                      <FileText className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="border-red-200 bg-red-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <Phone className="w-5 h-5" />
              Emergency Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-health-heading font-medium">Need immediate help?</p>
                <p className="text-sm text-health-body">Contact your CHW or emergency services</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="border-red-300 hover:bg-red-100">
                  <Phone className="w-4 h-4 mr-2" />
                  Call CHW: +254 701 234 567
                </Button>
                <Button className="bg-red-600 hover:bg-red-700">
                  Emergency: 911
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PatientDashboard;