import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Stethoscope, 
  Users, 
  Calendar, 
  TrendingUp, 
  AlertTriangle,
  Clock,
  FileText,
  Video,
  MessageSquare,
  BarChart3,
  MapPin,
  Phone
} from 'lucide-react';

const ProviderPortal = () => {
  const stats = [
    { title: 'Active Patients', value: '156', icon: Users, color: 'text-blue-600', change: '+12%' },
    { title: 'Consultations Today', value: '18', icon: Stethoscope, color: 'text-green-600', change: '+5%' },
    { title: 'Pending Reviews', value: '7', icon: FileText, color: 'text-orange-600', change: '-3%' },
    { title: 'Emergency Alerts', value: '2', icon: AlertTriangle, color: 'text-red-600', change: '+100%' },
  ];

  const emergencyAlerts = [
    { id: 1, patient: 'Jane Doe, 28F', condition: 'Severe malaria symptoms', chw: 'CHW Mary K.', location: 'Kisumu Rural', priority: 'Critical', time: '15 min ago' },
    { id: 2, patient: 'John Smith, 45M', condition: 'Chest pain, difficulty breathing', chw: 'CHW Peter M.', location: 'Kakamega', priority: 'Urgent', time: '32 min ago' },
  ];

  const pendingConsultations = [
    { id: 1, patient: 'Sarah Williams, 32F', chw: 'CHW Grace N.', condition: 'Pregnancy monitoring - 32 weeks', scheduled: '2:00 PM', type: 'Video Call' },
    { id: 2, patient: 'David Ochieng, 55M', chw: 'CHW James K.', condition: 'Diabetes follow-up', scheduled: '3:30 PM', type: 'Phone Call' },
    { id: 3, patient: 'Mary Akinyi, 28F', chw: 'CHW Susan L.', condition: 'Post-natal check - 2 weeks', scheduled: '4:00 PM', type: 'Video Call' },
  ];

  const recentAnalytics = [
    { metric: 'Malaria Cases', value: '23', period: 'This week', trend: 'up' },
    { metric: 'Maternal Health', value: '15', period: 'This week', trend: 'stable' },
    { metric: 'Child Health', value: '31', period: 'This week', trend: 'down' },
    { metric: 'Referrals Made', value: '8', period: 'This week', trend: 'up' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'Urgent': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Normal': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-health-heading">Provider Portal</h1>
            <p className="text-health-body">Healthcare Provider Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-health-body" />
              <span className="text-sm text-health-body">Kisumu General Hospital</span>
            </div>
            <Badge className="bg-green-100 text-green-800">Online</Badge>
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
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-health-heading">{stat.value}</p>
                      <span className={`text-xs px-2 py-1 rounded ${
                        stat.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="emergencies" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="emergencies">Emergency Alerts</TabsTrigger>
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="emergencies" className="space-y-4">
            <Card className="border-red-200 bg-red-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <AlertTriangle className="w-5 h-5" />
                  Emergency Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emergencyAlerts.map((alert) => (
                    <div key={alert.id} className="p-4 bg-white border border-red-200 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-health-heading">{alert.patient}</h3>
                          <p className="text-sm text-health-body">{alert.condition}</p>
                          <p className="text-xs text-health-small">CHW: {alert.chw} • {alert.location}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge className={getPriorityColor(alert.priority)}>{alert.priority}</Badge>
                          <span className="text-xs text-health-small">{alert.time}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-red-300 hover:bg-red-100">
                          <Phone className="w-4 h-4 mr-1" />
                          Call CHW
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-300 hover:bg-red-100">
                          <Video className="w-4 h-4 mr-1" />
                          Video Call
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          Respond
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consultations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Scheduled Consultations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingConsultations.map((consultation) => (
                    <div key={consultation.id} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-health-heading">{consultation.patient}</h3>
                          <p className="text-sm text-health-body">{consultation.condition}</p>
                          <p className="text-xs text-health-small">CHW: {consultation.chw}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-health-body" />
                            <span className="text-sm">{consultation.scheduled}</span>
                          </div>
                          <Badge variant="outline">{consultation.type}</Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="w-4 h-4 mr-1" />
                          View Records
                        </Button>
                        <Button size="sm" variant="primary_gradient">
                          Start Consultation
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Health Analytics & Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recentAnalytics.map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-health-heading">{item.metric}</h3>
                          <p className="text-sm text-health-body">{item.period}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-health-heading">{item.value}</p>
                          <TrendingUp className={`w-4 h-4 ${
                            item.trend === 'up' ? 'text-green-600' : 
                            item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                          }`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Clinical Resources & Protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <FileText className="w-6 h-6" />
                    <span className="font-medium">IMCI Guidelines</span>
                    <span className="text-xs text-center">Integrated Management of Childhood Illness</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <Stethoscope className="w-6 h-6" />
                    <span className="font-medium">Malaria Protocol</span>
                    <span className="text-xs text-center">Diagnosis and treatment guidelines</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <Users className="w-6 h-6" />
                    <span className="font-medium">Maternal Health</span>
                    <span className="text-xs text-center">Pregnancy and delivery protocols</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProviderPortal;