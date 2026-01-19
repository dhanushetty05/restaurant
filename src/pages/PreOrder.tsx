import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Utensils, Plus, Minus, Check, CreditCard, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { menuData } from '@/data/menuData';
import { restaurantInfo } from '@/data/restaurantData';
import heroImage from '@/assets/hero-restaurant.jpg';
import { toast } from 'sonner';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const PreOrder = () => {
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    bookingRef: '',
    date: '',
    time: ''
  });
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<'restaurant' | 'online'>('restaurant');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const addItem = (item: { id: string; name: string; price: number }) => {
    setOrderItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setOrderItems(prev => {
      return prev.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const removeItem = (itemId: string) => {
    setOrderItems(prev => prev.filter(i => i.id !== itemId));
  };

  const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    if (orderItems.length === 0) {
      toast.error('Please select at least one item');
      return;
    }
    setIsSubmitted(true);
    toast.success('Pre-order submitted successfully!');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h2 className="heading-md mb-4">Pre-Order Confirmed!</h2>
          <p className="text-muted-foreground mb-6">
            Your pre-order has been received. Your food will be ready when you arrive!
          </p>
          
          <div className="bg-muted p-6 rounded-xl text-left mb-6">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span>{new Date(bookingDetails.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span>{bookingDetails.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment:</span>
                <span>{paymentMethod === 'restaurant' ? 'Pay at Restaurant' : 'Paid Online'}</span>
              </div>
            </div>
            <div className="border-t border-border pt-4">
              {orderItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm py-1">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold mt-2 pt-2 border-t border-border">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Button variant="premium" className="w-full" onClick={() => window.location.href = '/'}>
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pre-Order"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl mb-4">Pre-Order for Your Table</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4">
              Order ahead and enjoy faster service when you arrive
            </p>
          </motion.div>
        </div>
      </section>

      {/* Order Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`w-16 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-muted'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Booking Details */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg">
                <h2 className="heading-md mb-6 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-accent" />
                  Booking Details
                </h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Booking Reference (optional)</Label>
                    <Input
                      placeholder="Enter your booking reference"
                      value={bookingDetails.bookingRef}
                      onChange={(e) => setBookingDetails(prev => ({ ...prev, bookingRef: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date *
                    </Label>
                    <Input
                      type="date"
                      value={bookingDetails.date}
                      onChange={(e) => setBookingDetails(prev => ({ ...prev, date: e.target.value }))}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Time *
                    </Label>
                    <Select 
                      value={bookingDetails.time} 
                      onValueChange={(value) => setBookingDetails(prev => ({ ...prev, time: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  variant="premium"
                  size="lg"
                  className="w-full mt-8"
                  onClick={() => {
                    if (!bookingDetails.date || !bookingDetails.time) {
                      toast.error('Please select date and time');
                      return;
                    }
                    setStep(2);
                  }}
                >
                  Continue to Menu
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Select Items */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="heading-md mb-6 flex items-center gap-3">
                    <Utensils className="w-6 h-6 text-accent" />
                    Select Your Items
                  </h2>

                  {menuData.map((category) => (
                    <div key={category.id} className="mb-8">
                      <h3 className="font-display font-semibold text-xl mb-4">{category.name}</h3>
                      <div className="space-y-3">
                        {category.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-4 bg-card rounded-lg card-elevated"
                          >
                            <div className="flex items-center gap-3">
                              <div className={item.isVeg ? 'veg-indicator' : 'nonveg-indicator'} />
                              <div>
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                              </div>
                            </div>
                            <Button size="sm" onClick={() => addItem(item)}>
                              <Plus className="w-4 h-4" />
                              Add
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-24 bg-card p-6 rounded-2xl shadow-lg">
                    <h3 className="font-display font-semibold text-xl mb-4">Your Order</h3>
                    
                    {orderItems.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">No items selected</p>
                    ) : (
                      <>
                        <div className="space-y-3 mb-6">
                          {orderItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  ${item.price.toFixed(2)} × {item.quantity}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-6 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="border-t border-border pt-4 mb-6">
                          <div className="flex justify-between text-lg font-semibold">
                            <span>Total</span>
                            <span>${totalAmount.toFixed(2)}</span>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button 
                        variant="premium" 
                        onClick={() => setStep(3)} 
                        className="flex-1"
                        disabled={orderItems.length === 0}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg">
                <h2 className="heading-md mb-6">Payment Method</h2>
                
                <div className="space-y-4 mb-8">
                  <button
                    onClick={() => setPaymentMethod('restaurant')}
                    className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all ${
                      paymentMethod === 'restaurant' 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <Wallet className="w-6 h-6 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">Pay at Restaurant</p>
                      <p className="text-sm text-muted-foreground">Pay when you arrive</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setPaymentMethod('online')}
                    className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all ${
                      paymentMethod === 'online' 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">Pay Online</p>
                      <p className="text-sm text-muted-foreground">Secure payment via UPI/Card</p>
                    </div>
                  </button>
                </div>

                {paymentMethod === 'online' && (
                  <div className="bg-accent/10 p-4 rounded-xl mb-6">
                    <p className="text-sm text-muted-foreground">
                      Online payment integration coming soon. For now, you can pay at the restaurant.
                    </p>
                  </div>
                )}

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-xl font-display font-bold">
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button variant="premium" onClick={handleSubmit} className="flex-1">
                    Confirm Order
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PreOrder;
