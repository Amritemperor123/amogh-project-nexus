
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, MapPin, Mail, Phone, Download, ExternalLink, ArrowLeft, Calendar, Award, Users, Briefcase } from 'lucide-react';

const FreelancerProfile = () => {
  const { id } = useParams();

  // Mock freelancer data (in real app, this would be fetched based on id)
  const freelancerData = {
    'sarah-johnson': {
      name: 'Sarah Johnson',
      expertise: 'AI & Machine Learning',
      university: 'MIT',
      course: 'Computer Science',
      projects: 24,
      rating: 4.9,
      hourlyRate: 85,
      bio: 'Passionate AI developer focused on creating intelligent solutions for real-world problems. With over 3 years of experience in machine learning and deep learning, I specialize in developing AI-powered applications that make a real impact.',
      skills: ['Python', 'Machine Learning', 'React', 'TensorFlow', 'PyTorch', 'Data Science', 'Computer Vision', 'NLP'],
      avatar: 'SJ',
      location: 'Boston, MA',
      email: 'sarah.johnson@mit.edu',
      phone: '+1 (555) 123-4567',
      resumeUrl: '#',
      portfolioUrl: '#',
      projectList: [
        {
          id: '1',
          title: 'AI-Powered Learning Platform',
          description: 'An intelligent tutoring system that adapts to individual learning styles.',
          tags: ['AI', 'Education', 'Machine Learning'],
          author: 'Sarah Johnson',
          price: '299'
        },
        {
          id: '2',
          title: 'Smart Recommendation Engine',
          description: 'Advanced recommendation system using collaborative filtering and deep learning.',
          tags: ['AI', 'Recommendation', 'Deep Learning'],
          author: 'Sarah Johnson',
          price: '199'
        }
      ],
      experience: [
        {
          title: 'AI Research Intern',
          company: 'Google AI',
          duration: 'Summer 2023',
          description: 'Worked on natural language processing models for search optimization.'
        },
        {
          title: 'Machine Learning Developer',
          company: 'TechStartup Inc.',
          duration: '2022 - Present',
          description: 'Developing ML models for predictive analytics and automation.'
        }
      ],
      education: [
        {
          degree: 'Master of Science in Computer Science',
          institution: 'MIT',
          year: '2024',
          gpa: '3.9/4.0'
        },
        {
          degree: 'Bachelor of Technology in Computer Science',
          institution: 'IIT Delhi',
          year: '2022',
          gpa: '3.8/4.0'
        }
      ]
    }
  };

  const freelancer = freelancerData[id as keyof typeof freelancerData];

  if (!freelancer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Freelancer not found</h1>
            <Link to="/freelancers">
              <Button className="bg-gradient-to-r from-amogh-blue to-amogh-ocean hover:from-amogh-ocean hover:to-amogh-navy text-white rounded-full px-8 py-3">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Freelancers
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/freelancers" className="inline-flex items-center text-amogh-blue hover:text-amogh-ocean mb-8 group">
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Freelancers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Avatar className="h-32 w-32 mx-auto border-4 border-white shadow-2xl">
                    <AvatarFallback className="bg-gradient-to-br from-amogh-blue to-amogh-navy text-white text-4xl font-bold">
                      {freelancer.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <h1 className="text-2xl font-bold text-amogh-navy mb-2">{freelancer.name}</h1>
                <p className="text-lg text-amogh-blue mb-2 font-medium">{freelancer.expertise}</p>
                <p className="text-sm text-gray-600 mb-6">{freelancer.university} • {freelancer.course}</p>
                
                <div className="flex items-center justify-center mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-current mr-2" />
                  <span className="font-bold text-xl mr-2">{freelancer.rating}</span>
                  <span className="text-gray-600">({freelancer.projects} projects)</span>
                </div>

                <div className="text-center mb-8 bg-gradient-to-r from-amogh-blue/10 to-amogh-ocean/10 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-amogh-navy">${freelancer.hourlyRate}/hr</p>
                  <p className="text-sm text-gray-600 font-medium">Hourly Rate</p>
                </div>

                <div className="space-y-4 text-sm mb-8">
                  <div className="flex items-center bg-gray-50 rounded-xl p-3">
                    <MapPin className="h-4 w-4 text-amogh-blue mr-3" />
                    <span className="font-medium">{freelancer.location}</span>
                  </div>
                  <div className="flex items-center bg-gray-50 rounded-xl p-3">
                    <Mail className="h-4 w-4 text-amogh-blue mr-3" />
                    <span className="font-medium">{freelancer.email}</span>
                  </div>
                  <div className="flex items-center bg-gray-50 rounded-xl p-3">
                    <Phone className="h-4 w-4 text-amogh-blue mr-3" />
                    <span className="font-medium">{freelancer.phone}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-amogh-blue to-amogh-ocean hover:from-amogh-ocean hover:to-amogh-navy text-white rounded-xl py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <Users className="h-4 w-4 mr-2" />
                    Contact Freelancer
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl py-3 border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl py-3 border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-amogh-navy flex items-center">
                  <Award className="h-6 w-6 mr-2 text-amogh-blue" />
                  About
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">{freelancer.bio}</p>
                <div>
                  <h4 className="font-semibold mb-4 text-amogh-navy">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {freelancer.skills.map((skill, index) => (
                      <Badge key={index} className="bg-gradient-to-r from-amogh-blue to-amogh-ocean text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-amogh-navy flex items-center">
                  <Briefcase className="h-6 w-6 mr-2 text-amogh-blue" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {freelancer.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-4 border-gradient-to-b from-amogh-blue to-amogh-light last:border-l-0">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-amogh-blue to-amogh-ocean rounded-full border-4 border-white shadow-lg"></div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                      <h4 className="font-bold text-amogh-navy text-lg mb-1">{exp.title}</h4>
                      <p className="text-amogh-blue font-medium mb-2">{exp.company}</p>
                      <p className="text-sm text-gray-600 mb-3 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </p>
                      <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-amogh-navy flex items-center">
                  <Award className="h-6 w-6 mr-2 text-amogh-blue" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {freelancer.education.map((edu, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-4 border-gradient-to-b from-amogh-blue to-amogh-light last:border-l-0">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                      <h4 className="font-bold text-amogh-navy text-lg mb-1">{edu.degree}</h4>
                      <p className="text-amogh-blue font-medium mb-2">{edu.institution}</p>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.year}
                        </span>
                        <span className="font-medium">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-amogh-navy flex items-center">
                  <Star className="h-6 w-6 mr-2 text-amogh-blue" />
                  Featured Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {freelancer.projectList.map((project, index) => (
                    <div key={project.id} className="transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FreelancerProfile;
