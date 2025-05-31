
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { User, Mail, Phone, MapPin, Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  // Mock user data
  const [user] = useState({
    username: 'sarah_johnson',
    type: 'student' as const,
    email: 'sarah.johnson@mit.edu',
    phone: '+1 (555) 123-4567',
    location: 'Boston, MA',
    university: 'MIT',
    course: 'Computer Science',
    rollNo: 'CS2021001',
    bio: 'Passionate computer science student focused on AI and machine learning. Love creating innovative solutions that make a real impact.',
    avatar: 'SJ',
    memberSince: 'January 2024',
    rating: 4.9,
    projects: 12,
    totalEarnings: 4850
  });

  const [projects] = useState([
    {
      id: 1,
      title: 'AI-Powered Learning Platform',
      status: 'Published',
      price: 299,
      sales: 156,
      revenue: 4680,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Smart Study Planner',
      status: 'Published',
      price: 49,
      sales: 89,
      revenue: 436,
      date: '2024-01-10'
    },
    {
      id: 3,
      title: 'Virtual Lab Simulator',
      status: 'Draft',
      price: 199,
      sales: 0,
      revenue: 0,
      date: '2024-01-20'
    }
  ]);

  const [interactions] = useState([
    {
      id: 1,
      type: 'Sale',
      project: 'AI-Powered Learning Platform',
      buyer: 'EduTech Inc.',
      amount: 299,
      date: '2024-01-20'
    },
    {
      id: 2,
      type: 'Review',
      project: 'Smart Study Planner',
      reviewer: 'John Smith',
      rating: 5,
      date: '2024-01-18'
    },
    {
      id: 3,
      type: 'Sale',
      project: 'Smart Study Planner',
      buyer: 'Learning Solutions Ltd.',
      amount: 49,
      date: '2024-01-15'
    }
  ]);

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully!",
    });
  };

  const handleAddProject = () => {
    toast({
      title: "Add New Project",
      description: "Project creation feature coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback className="bg-amogh-blue text-white text-2xl">
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold text-amogh-navy mb-1">{user.username}</h2>
                <Badge className="mb-4">{user.type.charAt(0).toUpperCase() + user.type.slice(1)}</Badge>
                <p className="text-sm text-gray-600 mb-4">{user.bio}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span>Member since {user.memberSince}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{user.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amogh-blue">{user.projects}</p>
                    <p className="text-xs text-gray-600">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amogh-blue">${user.totalEarnings}</p>
                    <p className="text-xs text-gray-600">Earned</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="interactions">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-amogh-blue">{user.projects}</h3>
                      <p className="text-gray-600">Total Projects</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-amogh-ocean">245</h3>
                      <p className="text-gray-600">Total Sales</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-amogh-navy">${user.totalEarnings}</h3>
                      <p className="text-gray-600">Total Earnings</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Projects */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects.slice(0, 3).map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{project.title}</h4>
                            <p className="text-sm text-gray-600">
                              {project.sales} sales • ${project.revenue} revenue
                            </p>
                          </div>
                          <Badge variant={project.status === 'Published' ? 'default' : 'secondary'}>
                            {project.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-amogh-navy">My Projects</h2>
                  <Button onClick={handleAddProject} className="bg-amogh-blue hover:bg-amogh-ocean">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Project
                  </Button>
                </div>

                <div className="grid gap-6">
                  {projects.map((project) => (
                    <Card key={project.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>Price: ${project.price}</span>
                              <span>Sales: {project.sales}</span>
                              <span>Revenue: ${project.revenue}</span>
                              <span>Date: {project.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={project.status === 'Published' ? 'default' : 'secondary'}>
                              {project.status}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue={user.username} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={user.email} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue={user.phone} />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue={user.location} />
                      </div>
                    </div>

                    {user.type === 'student' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="university">University</Label>
                          <Input id="university" defaultValue={user.university} />
                        </div>
                        <div>
                          <Label htmlFor="course">Course</Label>
                          <Input id="course" defaultValue={user.course} />
                        </div>
                        <div>
                          <Label htmlFor="rollNo">Roll Number</Label>
                          <Input id="rollNo" defaultValue={user.rollNo} />
                        </div>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" defaultValue={user.bio} />
                    </div>

                    <Button onClick={handleSaveProfile} className="bg-amogh-blue hover:bg-amogh-ocean">
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interactions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {interactions.map((interaction) => (
                        <div key={interaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{interaction.type}</h4>
                            <p className="text-sm text-gray-600">
                              {interaction.project} 
                              {interaction.type === 'Sale' && ` - ${interaction.buyer}`}
                              {interaction.type === 'Review' && ` - by ${interaction.reviewer}`}
                            </p>
                          </div>
                          <div className="text-right">
                            {interaction.amount && (
                              <p className="font-semibold text-amogh-blue">${interaction.amount}</p>
                            )}
                            {interaction.rating && (
                              <p className="text-sm">⭐ {interaction.rating}/5</p>
                            )}
                            <p className="text-xs text-gray-500">{interaction.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
