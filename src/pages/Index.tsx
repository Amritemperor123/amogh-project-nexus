
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Building, GraduationCap, Award, Sparkles, Zap, Globe } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amogh-navy via-amogh-ocean to-amogh-blue opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amogh-light/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-amogh-light text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              The Future of Academic Collaboration
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-amogh-light">
              Welcome to <span className="text-amogh-light">AMOGH</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Connect, Create, & Commercialize in One Seamless Marketplace. Where innovation meets opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-white text-amogh-navy hover:bg-blue-50 text-lg px-10 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Zap className="mr-2 h-5 w-5" />
                  Join AMOGH
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-full backdrop-blur-sm">
                <Globe className="mr-2 h-5 w-5" />
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-amogh-blue to-amogh-ocean text-white mb-4">Featured</Badge>
            <h2 className="text-5xl font-bold text-amogh-navy mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amogh-navy to-amogh-blue">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover groundbreaking innovations from the world's most talented creators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/projects">
              <Button className="bg-gradient-to-r from-amogh-blue to-amogh-ocean hover:from-amogh-ocean hover:to-amogh-navy text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                Explore More Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-24 bg-gradient-to-r from-white via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amogh-navy mb-6">Our Global Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Connecting talent with opportunity across the globe</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Building, value: "150+", label: "Partner Companies", color: "from-blue-500 to-cyan-500" },
              { icon: Users, value: "5,000+", label: "Students", color: "from-purple-500 to-pink-500" },
              { icon: GraduationCap, value: "800+", label: "Professors", color: "from-green-500 to-emerald-500" },
              { icon: Award, value: "1,200+", label: "Active Users", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-amogh-navy mb-3 bg-clip-text text-transparent bg-gradient-to-r from-amogh-navy to-amogh-blue">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Freelancers */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">Talent</Badge>
            <h2 className="text-5xl font-bold text-amogh-navy mb-6">Meet Our Stars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Connect with the most talented creators and innovators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {topFreelancers.map((freelancer, index) => (
              <Link key={index} to="/freelancers" className="group">
                <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-0 shadow-xl group-hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-amogh-blue via-amogh-ocean to-amogh-navy rounded-full mx-auto shadow-2xl"></div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <h3 className="text-xl font-bold text-amogh-navy mb-2 group-hover:text-amogh-blue transition-colors">{freelancer.name}</h3>
                    <p className="text-amogh-blue mb-4 font-medium">{freelancer.expertise}</p>
                    <div className="flex justify-center space-x-6 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-amogh-navy">{freelancer.projects}</div>
                        <div className="text-gray-500">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-amogh-navy flex items-center justify-center">
                          ⭐ {freelancer.rating}
                        </div>
                        <div className="text-gray-500">Rating</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/freelancers">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                View All Freelancers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Projects */}
      <section className="py-24 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-4">Sustainability</Badge>
            <h2 className="text-5xl font-bold text-amogh-navy mb-6">Building a Better Tomorrow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Projects making a positive impact on our planet and communities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sustainabilityProjects.map((project, index) => (
              <div key={project.id} className="transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/sustainability">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                Explore Sustainability
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-amogh-light/30 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-amogh-blue to-amogh-ocean text-white mb-4">Testimonials</Badge>
            <h2 className="text-5xl font-bold text-amogh-navy mb-6">Trusted By Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">What our partners say about the AMOGH experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "AMOGH has revolutionized how we discover and collaborate with emerging talent. The quality of projects is exceptional.",
                author: "Jennifer Wang",
                role: "CTO, TechCorp",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                quote: "The platform connects us directly with innovative students and their groundbreaking projects. Highly recommended!",
                author: "Robert Chen",
                role: "Innovation Director, StartupHub",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                quote: "AMOGH provides a seamless experience for both students and enterprises. It's changing how we think about collaboration.",
                author: "Sarah Miller",
                role: "VP Engineering, FutureTech",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div className="text-4xl text-amogh-blue mb-4">"</div>
                    <p className="text-gray-700 italic leading-relaxed">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full mr-4 shadow-lg`}></div>
                    <div>
                      <h4 className="font-bold text-amogh-navy">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amogh-navy via-amogh-ocean to-amogh-blue"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-amogh-light/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-amogh-light text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            Ready to Get Started?
          </div>
          <h2 className="text-5xl font-bold text-white mb-8">Join the Innovation Revolution</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're a student with innovative ideas, a professor with research expertise, or an enterprise looking for fresh talent, AMOGH is your gateway to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-white text-amogh-navy hover:bg-blue-50 text-lg px-10 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Zap className="mr-2 h-5 w-5" />
                Join AMOGH Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-full backdrop-blur-sm">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
