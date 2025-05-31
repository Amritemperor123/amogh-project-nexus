
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Leaf } from 'lucide-react';

const ExploreSustainability = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock sustainability projects data
  const projects = [
    {
      id: '4',
      title: 'Ocean Plastic Recycler',
      description: 'Innovative machine that converts ocean plastic waste into useful building materials, helping clean our oceans.',
      tags: ['Environment', 'Recycling', 'Innovation', 'Ocean'],
      author: 'Dr. Emily Watson',
      price: '599',
      category: 'waste-management'
    },
    {
      id: '5',
      title: 'Smart Water Management',
      description: 'AI-driven system for optimizing water usage in agricultural applications with real-time monitoring.',
      tags: ['Agriculture', 'AI', 'Water', 'Conservation'],
      author: 'James Liu',
      price: '249',
      category: 'water-conservation'
    },
    {
      id: '6',
      title: 'Solar Panel Optimizer',
      description: 'IoT system that maximizes solar panel efficiency through intelligent positioning and maintenance alerts.',
      tags: ['Solar', 'IoT', 'Energy', 'Optimization'],
      author: 'Maria Santos',
      price: '399',
      category: 'renewable-energy'
    },
    {
      id: '7',
      title: 'Carbon Footprint Tracker',
      description: 'Mobile app that helps individuals and businesses track and reduce their carbon footprint effectively.',
      tags: ['Carbon', 'Mobile', 'Tracking', 'Climate'],
      author: 'Alex Green',
      price: '89',
      category: 'carbon-reduction'
    },
    {
      id: '8',
      title: 'Vertical Farming System',
      description: 'Automated vertical farming solution that uses 90% less water and 95% less land than traditional farming.',
      tags: ['Agriculture', 'Automation', 'Urban', 'Food Security'],
      author: 'Dr. Sarah Kim',
      price: '799',
      category: 'sustainable-agriculture'
    },
    {
      id: '9',
      title: 'Biodegradable Packaging',
      description: 'Plant-based packaging material that decomposes naturally within 60 days, replacing plastic packaging.',
      tags: ['Packaging', 'Biodegradable', 'Plant-based', 'Eco-friendly'],
      author: 'Tom Rodriguez',
      price: '199',
      category: 'eco-materials'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'renewable-energy', label: 'Renewable Energy' },
    { value: 'waste-management', label: 'Waste Management' },
    { value: 'water-conservation', label: 'Water Conservation' },
    { value: 'carbon-reduction', label: 'Carbon Reduction' },
    { value: 'sustainable-agriculture', label: 'Sustainable Agriculture' },
    { value: 'eco-materials', label: 'Eco Materials' }
  ];

  const sdgGoals = [
    { number: 6, title: 'Clean Water and Sanitation', icon: '💧' },
    { number: 7, title: 'Affordable and Clean Energy', icon: '⚡' },
    { number: 11, title: 'Sustainable Cities and Communities', icon: '🏙️' },
    { number: 12, title: 'Responsible Consumption and Production', icon: '♻️' },
    { number: 13, title: 'Climate Action', icon: '🌡️' },
    { number: 14, title: 'Life Below Water', icon: '🌊' },
    { number: 15, title: 'Life on Land', icon: '🌱' }
  ];

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
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Leaf className="h-16 w-16 text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sustainability Projects</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover innovative projects that are making a positive impact on our planet and contributing to the UN Sustainable Development Goals
            </p>
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-amogh-navy mb-8">
            Supporting UN Sustainable Development Goals
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {sdgGoals.map((goal) => (
              <div key={goal.number} className="text-center p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl mb-2">{goal.icon}</div>
                <div className="text-sm font-semibold text-amogh-navy">Goal {goal.number}</div>
                <div className="text-xs text-gray-600 mt-1">{goal.title}</div>
              </div>
            ))}
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
                placeholder="Search sustainability projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-64">
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
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-8 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-green-700">150+</h3>
              <p className="text-green-600">Sustainability Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">2.5M+</h3>
              <p className="text-green-600">CO₂ Tons Reduced</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">50+</h3>
              <p className="text-green-600">Countries Impacted</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">1000+</h3>
              <p className="text-green-600">Communities Helped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-amogh-navy">
              {filteredProjects.length} Sustainability Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Leaf className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500 mb-4">No sustainability projects found</p>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Sustainability Project?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our community of changemakers and share your innovative solutions for a sustainable future.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Climate Action', 'Clean Energy', 'Water Conservation', 'Waste Reduction', 'Sustainable Agriculture'].map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExploreSustainability;
