
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Star, Eye } from 'lucide-react';

const Freelancers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock freelancers data - sorted alphabetically
  const allFreelancers = [
    {
      id: 'alex-rodriguez',
      name: 'Alex Rodriguez',
      expertise: 'Blockchain Development',
      university: 'Stanford University',
      course: 'Computer Science',
      projects: 15,
      rating: 4.9,
      hourlyRate: 85,
      bio: 'Passionate blockchain developer with expertise in smart contracts and DeFi protocols.',
      skills: ['Solidity', 'Web3', 'React', 'Node.js'],
      avatar: 'AR'
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      expertise: 'Mobile App Development',
      university: 'UC Berkeley',
      course: 'Software Engineering',
      projects: 22,
      rating: 4.8,
      hourlyRate: 75,
      bio: 'Mobile app developer specializing in React Native and Flutter applications.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      avatar: 'DK'
    },
    {
      id: 'emily-watson',
      name: 'Emily Watson',
      expertise: 'Environmental Engineering',
      university: 'MIT',
      course: 'Environmental Science',
      projects: 18,
      rating: 4.9,
      hourlyRate: 90,
      bio: 'Environmental engineer focused on sustainable technology and green innovations.',
      skills: ['Sustainability', 'IoT', 'Data Analysis', 'CAD'],
      avatar: 'EW'
    },
    {
      id: 'james-liu',
      name: 'James Liu',
      expertise: 'AI & Machine Learning',
      university: 'Carnegie Mellon',
      course: 'Computer Science',
      projects: 28,
      rating: 4.9,
      hourlyRate: 95,
      bio: 'AI researcher with focus on natural language processing and computer vision.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
      avatar: 'JL'
    },
    {
      id: 'michael-chen',
      name: 'Michael Chen',
      expertise: 'IoT Development',
      university: 'Georgia Tech',
      course: 'Electrical Engineering',
      projects: 18,
      rating: 4.8,
      hourlyRate: 80,
      bio: 'IoT specialist creating smart solutions for modern challenges.',
      skills: ['Arduino', 'Raspberry Pi', 'C++', 'Python'],
      avatar: 'MC'
    },
    {
      id: 'priya-sharma',
      name: 'Priya Sharma',
      expertise: 'Data Science',
      university: 'Harvard University',
      course: 'Statistics',
      projects: 31,
      rating: 4.9,
      hourlyRate: 88,
      bio: 'Data scientist with expertise in predictive analytics and business intelligence.',
      skills: ['Python', 'R', 'SQL', 'Tableau'],
      avatar: 'PS'
    },
    {
      id: 'robert-taylor',
      name: 'Robert Taylor',
      expertise: 'Cybersecurity',
      university: 'MIT',
      course: 'Computer Science',
      projects: 19,
      rating: 4.8,
      hourlyRate: 92,
      bio: 'Cybersecurity expert specializing in penetration testing and secure system design.',
      skills: ['Ethical Hacking', 'Network Security', 'Python', 'Linux'],
      avatar: 'RT'
    },
    {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      expertise: 'AI & Machine Learning',
      university: 'MIT',
      course: 'Computer Science',
      projects: 24,
      rating: 4.9,
      hourlyRate: 85,
      bio: 'Passionate AI developer focused on creating intelligent solutions for real-world problems.',
      skills: ['Python', 'Machine Learning', 'React', 'TensorFlow'],
      avatar: 'SJ'
    }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const filteredFreelancers = allFreelancers.filter(freelancer =>
    freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    freelancer.expertise.toLowerCase().includes(searchTerm.toLowerCase()) ||
    freelancer.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amogh-navy mb-4">Our Freelancers</h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with talented professionals ready to bring your projects to life
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search freelancers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Freelancers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFreelancers.map((freelancer) => (
            <Link key={freelancer.id} to={`/freelancer/${freelancer.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-amogh-light">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amogh-blue to-amogh-light rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg">
                      {freelancer.avatar}
                    </div>
                    <h3 className="text-lg font-semibold text-amogh-navy mb-1">{freelancer.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{freelancer.expertise}</p>
                    <p className="text-xs text-gray-500">{freelancer.university}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Projects:</span>
                      <span className="font-semibold">{freelancer.projects}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold">{freelancer.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Rate:</span>
                      <span className="font-semibold">${freelancer.hourlyRate}/hr</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1">
                      {freelancer.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {freelancer.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{freelancer.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-center text-amogh-blue text-sm">
                      <Eye className="h-3 w-3 mr-1" />
                      View Profile
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredFreelancers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No freelancers found matching your search.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Freelancers;
