
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, User, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  user?: {
    username: string;
    type: 'student' | 'professor' | 'enterprise';
  } | null;
}

const Navbar = ({ user }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/profile');
    }
  };

  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <nav className="bg-amogh-navy shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-amogh-light hover:text-white transition-colors">
            AMOGH
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-amogh-light hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-amogh-light hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/sustainability" className="text-amogh-light hover:text-white transition-colors">
              Sustainability
            </Link>
            <Link to="/about" className="text-amogh-light hover:text-white transition-colors">
              About Us
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCartClick}
              className="text-amogh-light hover:text-white hover:bg-amogh-ocean"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleWishlistClick}
              className="text-amogh-light hover:text-white hover:bg-amogh-ocean"
            >
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleProfileClick}
              className="text-amogh-light hover:text-white hover:bg-amogh-ocean"
            >
              <User className="h-4 w-4 mr-2" />
              {user ? user.username : 'Guest'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amogh-light hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-amogh-ocean">
              <Link
                to="/"
                className="block px-3 py-2 text-amogh-light hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2 text-amogh-light hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/sustainability"
                className="block px-3 py-2 text-amogh-light hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sustainability
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-amogh-light hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <button
                onClick={() => {
                  handleCartClick();
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-amogh-light hover:text-white transition-colors w-full text-left"
              >
                Cart
              </button>
              <button
                onClick={() => {
                  handleWishlistClick();
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-amogh-light hover:text-white transition-colors w-full text-left"
              >
                Wishlist
              </button>
              <button
                onClick={() => {
                  handleProfileClick();
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-amogh-light hover:text-white transition-colors w-full text-left"
              >
                {user ? user.username : 'Guest'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
