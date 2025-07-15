import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
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
  Pill,
  Upload,
  Send,
  Clock,
  AlertTriangle
} from 'lucide-react';

const PatientDashboard = () => {
  const { toast } = useToast();
  const [symptoms, setSymptoms] = useState('');
  const [voiceRecording, setVoiceRecording] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const quickActions = [
    { title: 'Check Symptoms', icon: Activity, description: 'AI-powered symptom analysis', color: 'bg-blue-50 hover:bg-blue-100' },
    { title: 'Voice Consultation', icon: Mic, description: 'Speak your symptoms in Swahili or English', color: 'bg-green-50 hover:bg-green-100' },
    { title: 'Photo Diagnosis', icon: Camera, description: 'Take a photo for visual analysis', color: 'bg-purple-50 hover:bg-purple-100' },
    { title: 'Contact CHW', icon: Phone, description: 'Call your Community Health Worker', color: 'bg-orange-50 hover:bg-orange-100' },
  ];

  const handleSymptomSubmit = () => {
    if (symptoms.trim()) {
      toast({
        title: "Analyzing Symptoms",
        description: "AI is processing your symptoms. Results will appear shortly.",
      });
      setSymptoms('');
    }
  };

  const handleVoiceStart = () => {
    setVoiceRecording(true);
    toast({
      title: "Voice Recording Started",
      description: "Speak clearly in Swahili or English",
    });
    // Simulate voice recording
    setTimeout(() => {
      setVoiceRecording(false);
      toast({
        title: "Voice Analysis Complete",
        description: "Processing your voice consultation...",
      });
    }, 3000);
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      toast({
        title: "Photo Uploaded",
        description: "AI visual analysis in progress...",
      });
    }
  };

  const handleCHWContact = () => {
    toast({
      title: "Contacting CHW",
      description: "Connecting you with Mary Ochieng...",
    });
  };

  const handleReminderAction = (reminder: any) => {
    if (reminder.urgent) {
      toast({
        title: "Reminder Acknowledged",
        description: `Taking action for ${reminder.title}`,
      });
    } else {
      toast({
        title: "Viewing Details",
        description: `Opening details for ${reminder.title}`,
      });
    }
  };

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
              {/* Symptom Checker */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-auto p-6 flex flex-col items-center gap-3 bg-blue-50 hover:bg-blue-100 border"
                  >
                    <Activity className="w-10 h-10" />
                    <div className="text-center">
                      <div className="font-medium text-base">Check Symptoms</div>
                      <div className="text-sm text-health-body mt-1">AI-powered symptom analysis</div>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Symptom Checker
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="symptoms">Describe your symptoms</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Tell us how you're feeling... (in English or Swahili)"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        className="min-h-24"
                      />
                    </div>
                    <Button onClick={handleSymptomSubmit} className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Analyze Symptoms
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Voice Consultation */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-auto p-6 flex flex-col items-center gap-3 bg-green-50 hover:bg-green-100 border"
                  >
                    <Mic className="w-10 h-10" />
                    <div className="text-center">
                      <div className="font-medium text-base">Voice Consultation</div>
                      <div className="text-sm text-health-body mt-1">Speak your symptoms in Swahili or English</div>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Mic className="w-5 h-5" />
                      Voice Consultation
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-center">
                    <div className="p-8">
                      <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
                        voiceRecording ? 'bg-red-100 animate-pulse' : 'bg-green-100'
                      }`}>
                        <Mic className={`w-12 h-12 ${voiceRecording ? 'text-red-600' : 'text-green-600'}`} />
                      </div>
                      <p className="mt-4 text-health-body">
                        {voiceRecording ? 'Listening... Speak clearly' : 'Click to start voice recording'}
                      </p>
                    </div>
                    <Button 
                      onClick={handleVoiceStart} 
                      disabled={voiceRecording}
                      className="w-full"
                    >
                      {voiceRecording ? 'Recording...' : 'Start Voice Analysis'}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Photo Diagnosis */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-auto p-6 flex flex-col items-center gap-3 bg-purple-50 hover:bg-purple-100 border"
                  >
                    <Camera className="w-10 h-10" />
                    <div className="text-center">
                      <div className="font-medium text-base">Photo Diagnosis</div>
                      <div className="text-sm text-health-body mt-1">Take a photo for visual analysis</div>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Camera className="w-5 h-5" />
                      Photo Diagnosis
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-health-body mb-4">Upload a photo of skin condition, wound, or symptom</p>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                        id="photo-upload"
                      />
                      <Label htmlFor="photo-upload" className="cursor-pointer">
                        <Button variant="outline" asChild>
                          <span>Choose Photo</span>
                        </Button>
                      </Label>
                      {selectedFile && (
                        <p className="mt-2 text-sm text-green-600">
                          Selected: {selectedFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Contact CHW */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-auto p-6 flex flex-col items-center gap-3 bg-orange-50 hover:bg-orange-100 border"
                  >
                    <Phone className="w-10 h-10" />
                    <div className="text-center">
                      <div className="font-medium text-base">Contact CHW</div>
                      <div className="text-sm text-health-body mt-1">Call your Community Health Worker</div>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Contact CHW
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-health-heading">Mary Ochieng</h3>
                      <p className="text-sm text-health-body">Community Health Worker</p>
                      <p className="text-sm text-health-body">Available: 8:00 AM - 6:00 PM</p>
                    </div>
                    <div className="space-y-2">
                      <Button onClick={handleCHWContact} className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call: +254 701 234 567
                      </Button>
                      <Button variant="outline" className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant={reminder.urgent ? "default" : "outline"}>
                          {reminder.urgent ? 'Take Action' : 'View Details'}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            {reminder.urgent ? <AlertTriangle className="w-5 h-5 text-red-600" /> : <Clock className="w-5 h-5" />}
                            {reminder.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className={`p-4 rounded-lg ${reminder.urgent ? 'bg-red-50' : 'bg-blue-50'}`}>
                            <p className="text-health-body">{reminder.description}</p>
                            <p className="text-sm text-health-small mt-2">Due in {reminder.time}</p>
                          </div>
                          {reminder.urgent && (
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                              <h4 className="font-semibold text-yellow-800 mb-2">Important Instructions:</h4>
                              <ul className="text-sm text-yellow-700 space-y-1">
                                <li>• Take medication exactly as prescribed</li>
                                <li>• Set an alarm for daily reminder</li>
                                <li>• Contact CHW if you miss a dose</li>
                              </ul>
                            </div>
                          )}
                          <div className="flex gap-2">
                            <Button onClick={() => handleReminderAction(reminder)} className="flex-1">
                              {reminder.urgent ? 'Mark as Taken' : 'Schedule'}
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Phone className="w-4 h-4 mr-2" />
                              Call CHW
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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