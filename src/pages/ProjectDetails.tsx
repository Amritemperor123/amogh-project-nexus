
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Heart, Share2, Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ProjectDetails = () => {
  const { id } = useParams();

  // Mock project data (in real app, this would be fetched based on id)
  const project = {
    id: '1',
    title: 'AI-Powered Learning Platform',
    subtitle: 'Revolutionizing Education Through Intelligent Tutoring',
    description: `This comprehensive AI-powered learning platform represents a breakthrough in educational technology. 
    
    Our system leverages advanced machine learning algorithms to create personalized learning experiences that adapt to each student's unique learning style, pace, and preferences. The platform includes:

    • Intelligent content recommendation engine
    • Real-time performance analytics and feedback
    • Adaptive assessment tools
    • Interactive multimedia content
    • Collaborative learning features
    • Progress tracking and reporting

    The platform has been tested with over 1,000 students across 15 institutions, showing an average improvement of 35% in learning outcomes. Built using cutting-edge technologies including TensorFlow, React, and Node.js, this solution is scalable, secure, and ready for enterprise deployment.

    Key Features:
    - Personalized learning paths based on individual learning patterns
    - AI-driven content curation and difficulty adjustment
    - Multi-modal learning support (visual, auditory, kinesthetic)
    - Real-time collaboration tools for peer learning
    - Comprehensive analytics dashboard for educators
    - Mobile-responsive design for learning on-the-go`,
    tags: ['AI', 'Education', 'Machine Learning', 'React', 'TensorFlow'],
    author: {
      name: 'Sarah Johnson',
      type: 'Student',
      university: 'MIT',
      avatar: 'SJ',
      rating: 4.9,
      projects: 12
    },
    price: '299',
    rating: 4.8,
    reviews: 24,
    purchaseCount: 156,
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
    ]
  };

  const reviews = [
    {
      id: 1,
      author: 'John Smith',
      company: 'EduTech Inc.',
      rating: 5,
      comment: 'Exceptional work! The AI algorithms are sophisticated and the user experience is fantastic. We\'ve implemented this in our organization with great results.',
      date: '2024-01-15'
    },
    {
      id: 2,
      author: 'Dr. Maria Garcia',
      company: 'University of California',
      rating: 4,
      comment: 'Impressive project with solid technical foundation. The adaptive learning features are particularly noteworthy. Minor UI improvements could enhance the experience.',
      date: '2024-01-10'
    },
    {
      id: 3,
      author: 'Robert Chen',
      company: 'Learning Solutions Ltd.',
      rating: 5,
      comment: 'Outstanding innovation in educational technology. The personalization engine works brilliantly and the analytics provide valuable insights.',
      date: '2024-01-05'
    }
  ];

  const handlePurchase = () => {
    toast({
      title: "Added to Cart",
      description: "Project has been added to your cart successfully!",
    });
  };

  const handleWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: "Project saved to your wishlist!",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Project link copied to clipboard!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/projects" className="inline-flex items-center text-amogh-blue hover:text-amogh-ocean">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Header */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-amogh-navy mb-2">{project.title}</h1>
                    <p className="text-xl text-gray-600 mb-4">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm" onClick={handleWishlist}>
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleShare}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Image */}
                <div className="w-full h-64 bg-gradient-to-br from-amogh-blue to-amogh-light rounded-lg mb-6"></div>

                {/* Stats */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{project.rating} ({project.reviews} reviews)</span>
                  </div>
                  <span>{project.purchaseCount} purchases</span>
                  <span>Updated: January 2024</span>
                </div>
              </CardHeader>
            </Card>

            {/* Description */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Project Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {project.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews & Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id}>
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>{review.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{review.author}</h4>
                            <span className="text-sm text-gray-500">• {review.company}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700 mb-2">{review.comment}</p>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <Separator className="mt-4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Purchase Project</span>
                  <span className="text-2xl font-bold text-amogh-ocean">${project.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={handlePurchase} className="w-full bg-amogh-blue hover:bg-amogh-ocean">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" onClick={handleWishlist} className="w-full">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Wishlist
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  30-day money-back guarantee
                </p>
              </CardContent>
            </Card>

            {/* Author Card */}
            <Card>
              <CardHeader>
                <CardTitle>Project Author</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-amogh-blue text-white text-lg">
                      {project.author.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{project.author.name}</h3>
                    <p className="text-gray-600">{project.author.type}</p>
                    <p className="text-sm text-gray-500">{project.author.university}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{project.author.rating}</span>
                  </div>
                  <span>{project.author.projects} projects</span>
                </div>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Related Projects */}
            <Card>
              <CardHeader>
                <CardTitle>You might also like</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-amogh-blue to-amogh-light rounded"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1">Related Project {i}</h4>
                        <p className="text-xs text-gray-600 mb-1">By Author Name</p>
                        <p className="text-sm font-semibold text-amogh-ocean">$99</p>
                      </div>
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

export default ProjectDetails;
