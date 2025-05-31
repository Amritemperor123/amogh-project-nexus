
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, MapPin, Mail, Phone, Download, ExternalLink, ArrowLeft } from 'lucide-react';

const FreelancerProfile = () => {
  const { id } = useParams();

  // Mock freelancer data (in real app, this would be fetched based on id)
  const freelancerData = {
    'sarah-johnson': {
      id: 'sarah-johnson',
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
      projects: [
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
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Freelancer not found</h1>
          <Link to="/freelancers">
            <Button className="bg-amogh-blue hover:bg-amogh-ocean">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Freelancers
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/freelancers" className="inline-flex items-center text-amogh-blue hover:text-amogh-ocean mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Freelancers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6 text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-br from-amogh-blue to-amogh-light text-white text-4xl">
                    {freelancer.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <h1 className="text-2xl font-bold text-amogh-navy mb-2">{freelancer.name}</h1>
                <p className="text-lg text-amogh-blue mb-2">{freelancer.expertise}</p>
                <p className="text-sm text-gray-600 mb-4">{freelancer.university} • {freelancer.course}</p>
                
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold mr-2">{freelancer.rating}</span>
                  <span className="text-gray-600">({freelancer.projects} projects)</span>
                </div>

                <div className="text-center mb-6">
                  <p className="text-2xl font-bold text-amogh-navy">${freelancer.hourlyRate}/hr</p>
                  <p className="text-sm text-gray-600">Hourly Rate</p>
                </div>

                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{freelancer.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{freelancer.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{freelancer.phone}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-amogh-blue hover:bg-amogh-ocean">
                    Contact Freelancer
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button variant="outline" className="w-full">
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
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{freelancer.bio}</p>
                <div>
                  <h4 className="font-semibold mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {freelancer.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-amogh-light pl-4">
                    <h4 className="font-semibold text-amogh-navy">{exp.title}</h4>
                    <p className="text-amogh-blue">{exp.company}</p>
                    <p className="text-sm text-gray-600 mb-2">{exp.duration}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {freelancer.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-amogh-light pl-4">
                    <h4 className="font-semibold text-amogh-navy">{edu.degree}</h4>
                    <p className="text-amogh-blue">{edu.institution}</p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{edu.year}</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {freelancer.projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
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
