
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Globe, Heart, Lightbulb, Shield, Zap } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      bio: 'Former Microsoft executive with 15+ years in tech innovation. PhD in Computer Science from Stanford.',
      avatar: 'RK'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      bio: 'Ex-Google engineer specializing in AI and machine learning. MIT alumna with expertise in scalable systems.',
      avatar: 'PS'
    },
    {
      name: 'Arjun Patel',
      role: 'Head of Product',
      bio: 'Product strategist from Amazon with focus on educational technology and user experience design.',
      avatar: 'AP'
    },
    {
      name: 'Dr. Meera Singh',
      role: 'Head of Partnerships',
      bio: 'Former McKinsey consultant with deep expertise in university-industry collaborations.',
      avatar: 'MS'
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-amogh-blue" />,
      title: 'Innovation',
      description: 'We foster creativity and breakthrough thinking in every project we support.'
    },
    {
      icon: <Users className="h-8 w-8 text-amogh-blue" />,
      title: 'Collaboration',
      description: 'Connecting diverse minds to create solutions that benefit everyone.'
    },
    {
      icon: <Shield className="h-8 w-8 text-amogh-blue" />,
      title: 'Integrity',
      description: 'Maintaining the highest standards of ethics and transparency in all interactions.'
    },
    {
      icon: <Zap className="h-8 w-8 text-amogh-blue" />,
      title: 'Impact',
      description: 'Focused on creating meaningful change that addresses real-world challenges.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'AMOGH Founded',
      description: 'Started with a vision to bridge the gap between academic innovation and industry needs.'
    },
    {
      year: '2023',
      title: 'First 100 Projects',
      description: 'Reached our first milestone of 100 projects from students across 25 universities.'
    },
    {
      year: '2024',
      title: 'Enterprise Partnerships',
      description: 'Formed strategic partnerships with 50+ leading companies across various industries.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded to serve universities and students in 15 countries worldwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amogh-navy to-amogh-ocean text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About AMOGH</h1>
            <p className="text-xl md:text-2xl text-amogh-light max-w-4xl mx-auto">
              Empowering the next generation of innovators by connecting academic excellence with industry opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amogh-navy mb-8">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                AMOGH exists to democratize innovation by creating a seamless marketplace where students, professors, 
                and enterprises can collaborate, share knowledge, and commercialize breakthrough ideas that solve 
                real-world problems.
              </p>
              <p className="text-lg text-gray-700">
                We believe that the future of innovation lies in the intersection of academic research and industry 
                application, and we're here to make that connection stronger than ever before.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent>
                  <Target className="h-12 w-12 text-amogh-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-amogh-navy mb-2">Vision</h3>
                  <p className="text-sm text-gray-600">To be the world's leading platform for academic-industry collaboration</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent>
                  <Globe className="h-12 w-12 text-amogh-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-amogh-navy mb-2">Global Impact</h3>
                  <p className="text-sm text-gray-600">Fostering innovation that creates positive change worldwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-amogh-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amogh-navy mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-amogh-navy mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amogh-navy mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our mission to revolutionize academic-industry collaboration</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-amogh-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amogh-navy mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amogh-navy mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate individuals driving innovation forward</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <div className="w-20 h-20 bg-amogh-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-amogh-navy mb-1">{member.name}</h3>
                  <p className="text-amogh-blue font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-amogh-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-amogh-light">Making a difference in the innovation ecosystem</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-amogh-light mb-2">5,000+</h3>
              <p className="text-amogh-light">Students Empowered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-amogh-light mb-2">150+</h3>
              <p className="text-amogh-light">Partner Companies</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-amogh-light mb-2">800+</h3>
              <p className="text-amogh-light">Professors Connected</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-amogh-light mb-2">$2M+</h3>
              <p className="text-amogh-light">Projects Commercialized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-amogh-navy mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a student with groundbreaking ideas, a professor with research expertise, 
            or an enterprise looking for innovation, we'd love to connect with you.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Innovation', 'Collaboration', 'Impact', 'Future', 'Technology'].map((tag, index) => (
              <Badge key={index} variant="outline" className="border-amogh-blue text-amogh-blue">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-gray-600">
            <Heart className="inline h-5 w-5 text-red-500 mr-2" />
            Built with passion for innovation • Contact us at hello@amogh.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
