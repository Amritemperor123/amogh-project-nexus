
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Building, GraduationCap, Award } from 'lucide-react';

const Index = () => {
  // Mock data for featured projects
  const featuredProjects = [
    {
      id: '1',
      title: 'AI-Powered Learning Platform',
      description: 'An intelligent tutoring system that adapts to individual learning styles and provides personalized feedback.',
      tags: ['AI', 'Education', 'Machine Learning'],
      author: 'Sarah Johnson',
      price: '299',
      isFeatured: true
    },
    {
      id: '2',
      title: 'Sustainable Energy Monitor',
      description: 'IoT-based system for monitoring and optimizing energy consumption in smart buildings.',
      tags: ['IoT', 'Sustainability', 'Energy'],
      author: 'Michael Chen',
      price: '199',
      isFeatured: true
    },
    {
      id: '3',
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology for democratic processes.',
      tags: ['Blockchain', 'Security', 'Democracy'],
      author: 'Alex Rodriguez',
      price: '399',
      isFeatured: true
    }
  ];

  const sustainabilityProjects = [
    {
      id: '4',
      title: 'Ocean Plastic Recycler',
      description: 'Innovative machine that converts ocean plastic waste into useful building materials.',
      tags: ['Environment', 'Recycling', 'Innovation'],
      author: 'Dr. Emily Watson',
      price: '599'
    },
    {
      id: '5',
      title: 'Smart Water Management',
      description: 'AI-driven system for optimizing water usage in agricultural applications.',
      tags: ['Agriculture', 'AI', 'Water'],
      author: 'James Liu',
      price: '249'
    }
  ];

  const topFreelancers = [
    { name: 'Sarah Johnson', expertise: 'AI & Machine Learning', projects: 24, rating: 4.9 },
    { name: 'Michael Chen', expertise: 'IoT Development', projects: 18, rating: 4.8 },
    { name: 'Alex Rodriguez', expertise: 'Blockchain', projects: 15, rating: 4.9 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amogh-navy via-amogh-ocean to-amogh-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-amogh-light">AMOGH</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amogh-light max-w-3xl mx-auto">
              Connect, Create, & Commercialize in One Seamless Marketplace
            </p>
            <Link to="/login">
              <Button size="lg" className="bg-amogh-light text-amogh-navy hover:bg-white text-lg px-8 py-3">
                Join AMOGH
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amogh-navy mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Discover innovative projects from talented creators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/projects">
              <Button className="bg-amogh-blue hover:bg-amogh-ocean text-white">
                Explore More Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amogh-navy mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Connecting talent with opportunity worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-amogh-blue">
              <CardContent>
                <Building className="h-12 w-12 text-amogh-blue mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-amogh-navy mb-2">150+</h3>
                <p className="text-gray-600">Partner Companies</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-amogh-blue">
              <CardContent>
                <Users className="h-12 w-12 text-amogh-blue mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-amogh-navy mb-2">5,000+</h3>
                <p className="text-gray-600">Students</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-amogh-blue">
              <CardContent>
                <GraduationCap className="h-12 w-12 text-amogh-blue mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-amogh-navy mb-2">800+</h3>
                <p className="text-gray-600">Professors</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-amogh-blue">
              <CardContent>
                <Award className="h-12 w-12 text-amogh-blue mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-amogh-navy mb-2">1,200+</h3>
                <p className="text-gray-600">Active Users</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Freelancers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amogh-navy mb-4">Top Freelancers</h2>
            <p className="text-xl text-gray-600">Meet our most talented creators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topFreelancers.map((freelancer, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <div className="w-20 h-20 bg-gradient-to-br from-amogh-blue to-amogh-light rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-amogh-navy mb-2">{freelancer.name}</h3>
                  <p className="text-gray-600 mb-2">{freelancer.expertise}</p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500">
                    <span>{freelancer.projects} Projects</span>
                    <span>⭐ {freelancer.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amogh-navy mb-4">Sustainability Development</h2>
            <p className="text-xl text-gray-600">Projects making a positive impact on our planet</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {sustainabilityProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/sustainability">
              <Button className="bg-amogh-blue hover:bg-amogh-ocean text-white">
                Explore More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amogh-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amogh-navy mb-4">Trusted By Leaders</h2>
            <p className="text-xl text-gray-600">What our partners say about us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <p className="text-gray-600 mb-4 italic">
                  "AMOGH has revolutionized how we discover and collaborate with emerging talent. The quality of projects is exceptional."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amogh-blue rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-amogh-navy">Jennifer Wang</h4>
                    <p className="text-sm text-gray-500">CTO, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent>
                <p className="text-gray-600 mb-4 italic">
                  "The platform connects us directly with innovative students and their groundbreaking projects. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amogh-ocean rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-amogh-navy">Robert Chen</h4>
                    <p className="text-sm text-gray-500">Innovation Director, StartupHub</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent>
                <p className="text-gray-600 mb-4 italic">
                  "AMOGH provides a seamless experience for both students and enterprises. It's changing how we think about collaboration."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amogh-navy rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-amogh-navy">Sarah Miller</h4>
                    <p className="text-sm text-gray-500">VP Engineering, FutureTech</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amogh-navy to-amogh-ocean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Us to Trade Your Expertise</h2>
          <p className="text-xl text-amogh-light mb-8 max-w-2xl mx-auto">
            Whether you're a student with innovative ideas, a professor with research expertise, or an enterprise looking for fresh talent, AMOGH is your gateway to success.
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-amogh-light text-amogh-navy hover:bg-white text-lg px-8 py-3">
              Join AMOGH Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
