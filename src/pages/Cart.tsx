
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Cart = () => {
  // Mock cart data (in real app, this would come from state management)
  const cartItems = [
    {
      id: '1',
      title: 'AI-Powered Learning Platform',
      author: 'Sarah Johnson',
      price: 299,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200',
      tags: ['AI', 'Education', 'Machine Learning']
    },
    {
      id: '2',
      title: 'Sustainable Energy Monitor',
      author: 'Michael Chen',
      price: 199,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1581092795442-6db5c5c6e3f8?w=200',
      tags: ['IoT', 'Sustainability', 'Hardware']
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleRemoveItem = (id: string) => {
    toast({
      title: "Item Removed",
      description: "Project has been removed from your cart.",
    });
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    toast({
      title: "Quantity Updated",
      description: `Cart item quantity updated to ${newQuantity}.`,
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout Initiated",
      description: "Redirecting to payment gateway...",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-amogh-navy mb-8">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <h2 className="text-xl text-gray-600 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">Add some projects to get started!</p>
              <Button className="bg-amogh-blue hover:bg-amogh-ocean">
                Browse Projects
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-amogh-blue to-amogh-light rounded-lg flex-shrink-0"></div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">By {item.author}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="mx-2 font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <span className="text-lg font-bold text-amogh-ocean">
                              ${item.price * item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Button onClick={handleCheckout} className="w-full bg-amogh-blue hover:bg-amogh-ocean">
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Payment Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Secure payment with 256-bit SSL encryption. We accept all major credit cards and PayPal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
