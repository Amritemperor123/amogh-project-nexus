
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const ExploreProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('newest');

  // Mock projects data
  const projects = [
    {
      id: '1',
      title: 'AI-Powered Learning Platform',
      description: 'An intelligent tutoring system that adapts to individual learning styles and provides personalized feedback to enhance the learning experience.',
      tags: ['AI', 'Education', 'Machine Learning'],
      author: 'Sarah Johnson',
      price: '299',
      category: 'ai'
    },
    {
      id: '2',
      title: 'Sustainable Energy Monitor',
      description: 'IoT-based system for monitoring and optimizing energy consumption in smart buildings with real-time analytics.',
      tags: ['IoT', 'Sustainability', 'Energy'],
      author: 'Michael Chen',
      price: '199',
      category: 'iot'
    },
    {
      id: '3',
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology for democratic processes and elections.',
      tags: ['Blockchain', 'Security', 'Democracy'],
      author: 'Alex Rodriguez',
      price: '399',
      category: 'blockchain'
    },
    {
      id: '4',
      title: 'Mobile Health Tracker',
      description: 'Comprehensive health monitoring app with symptom tracking, medication reminders, and doctor consultations.',
      tags: ['Healthcare', 'Mobile', 'Wellness'],
      author: 'Dr. Emily Watson',
      price: '149',
      category: 'healthcare'
    },
    {
      id: '5',
      title: 'E-commerce Analytics Dashboard',
      description: 'Advanced analytics platform for e-commerce businesses with predictive insights and customer behavior analysis.',
      tags: ['Analytics', 'E-commerce', 'Data Science'],
      author: 'James Liu',
      price: '249',
      category: 'analytics'
    },
    {
      id: '6',
      title: 'Virtual Reality Training Module',
      description: 'Immersive VR training platform for industrial safety and skill development with realistic simulations.',
      tags: ['VR', 'Training', 'Safety'],
      author: 'Maria Garcia',
      price: '599',
      category: 'vr'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'ai', label: 'Artificial Intelligence' },
    { value: 'blockchain', label: 'Blockchain' },
    { value: 'iot', label: 'Internet of Things' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'vr', label: 'Virtual Reality' }
  ];

  const popularTags = ['AI', 'Blockchain', 'IoT', 'Healthcare', 'Education', 'Sustainability', 'Security', 'Mobile'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-amogh-navy to-amogh-ocean text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Projects</h1>
            <p className="text-xl text-amogh-light max-w-2xl mx-auto">
              Discover innovative projects from talented creators around the world
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedSort} onValueChange={setSelectedSort}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-amogh-navy mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-amogh-blue hover:text-white transition-colors"
                onClick={() => setSearchTerm(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-amogh-navy">
              {filteredProjects.length} Projects Found
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">No projects found matching your criteria</p>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExploreProjects;
