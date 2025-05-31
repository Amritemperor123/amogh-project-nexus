
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Trash2, Share2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: '1',
      title: 'AI-Powered Learning Platform',
      description: 'An intelligent tutoring system that adapts to individual learning styles and provides personalized feedback.',
      tags: ['AI', 'Education', 'Machine Learning'],
      author: 'Sarah Johnson',
      price: '299',
      addedDate: '2024-01-20',
      image: null
    },
    {
      id: '2',
      title: 'Sustainable Energy Monitor',
      description: 'IoT-based system for monitoring and optimizing energy consumption in smart buildings.',
      tags: ['IoT', 'Sustainability', 'Energy'],
      author: 'Michael Chen',
      price: '199',
      addedDate: '2024-01-18',
      image: null
    },
    {
      id: '3',
      title: 'Ocean Plastic Recycler',
      description: 'Innovative machine that converts ocean plastic waste into useful building materials.',
      tags: ['Environment', 'Recycling', 'Innovation'],
      author: 'Dr. Emily Watson',
      price: '599',
      addedDate: '2024-01-15',
      image: null
    },
    {
      id: '4',
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology for democratic processes.',
      tags: ['Blockchain', 'Security', 'Democracy'],
      author: 'Alex Rodriguez',
      price: '399',
      addedDate: '2024-01-12',
      image: null
    }
  ]);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    toast({
      title: "Removed from Wishlist",
      description: "Project has been removed from your wishlist.",
    });
  };

  const addToCart = (id: string, title: string) => {
    toast({
      title: "Added to Cart",
      description: `${title} has been added to your cart!`,
    });
  };

  const shareProject = (title: string) => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: `Link for ${title} copied to clipboard!`,
    });
  };

  const sortedItems = [...wishlistItems].sort((a, b) => 
    new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-amogh-navy to-amogh-ocean text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 text-amogh-light mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Wishlist</h1>
            <p className="text-xl text-amogh-light max-w-2xl mx-auto">
              Keep track of projects you're interested in and purchase them when you're ready
            </p>
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedItems.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-amogh-navy">
                  {sortedItems.length} Items in Wishlist
                </h2>
                <p className="text-gray-600">Sorted by date added (newest first)</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedItems.map((item) => (
                  <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="p-0">
                      <div className="relative">
                        <div className="w-full h-48 bg-gradient-to-br from-amogh-blue to-amogh-light rounded-t-lg">
                          <div className="absolute top-2 left-2">
                            <Badge variant="secondary" className="bg-white/90 text-amogh-navy">
                              Added {new Date(item.addedDate).toLocaleDateString()}
                            </Badge>
                          </div>
                          <div className="absolute top-2 right-2 flex gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="bg-white/20 hover:bg-white/30 text-white"
                              onClick={() => shareProject(item.title)}
                            >
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="bg-red-500/20 hover:bg-red-500/30 text-white"
                              onClick={() => removeFromWishlist(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-amogh-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">By {item.author}</p>
                    </CardContent>
                    
                    <CardFooter className="p-4 pt-0">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-lg font-bold text-amogh-ocean">${item.price}</span>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => addToCart(item.id, item.title)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add to Cart
                          </Button>
                          <Link to={`/project/${item.id}`}>
                            <Button size="sm" className="bg-amogh-blue hover:bg-amogh-ocean text-white">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Wishlist Actions */}
              <div className="mt-12 text-center">
                <div className="bg-white rounded-lg p-8 shadow-sm border">
                  <h3 className="text-xl font-semibold text-amogh-navy mb-4">Ready to Purchase?</h3>
                  <p className="text-gray-600 mb-6">
                    Add multiple items to your cart and checkout together for a seamless experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-amogh-blue hover:bg-amogh-ocean">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add All to Cart
                    </Button>
                    <Link to="/projects">
                      <Button variant="outline">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Empty Wishlist */
            <div className="text-center py-16">
              <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-600 mb-4">Your Wishlist is Empty</h2>
              <p className="text-xl text-gray-500 mb-8 max-w-md mx-auto">
                Start exploring projects and add your favorites to your wishlist for easy access later.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/projects">
                  <Button className="bg-amogh-blue hover:bg-amogh-ocean">
                    Explore Projects
                  </Button>
                </Link>
                <Link to="/sustainability">
                  <Button variant="outline">
                    View Sustainability Projects
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wishlist;
