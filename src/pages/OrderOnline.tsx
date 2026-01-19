import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, MapPin, CreditCard, Wallet, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import heroImage from '@/assets/hero-restaurant.jpg';
import { toast } from 'sonner';

const OrderOnline = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [deliveryInfo, setDeliveryInfo] = useState({ name: '', phone: '', address: '', notes: '' });
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('cod');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!deliveryInfo.name || !deliveryInfo.phone || !deliveryInfo.address) {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsSubmitted(true);
    clearCart();
    toast.success('Order placed successfully!');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-card p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h2 className="heading-md mb-4">Order Confirmed!</h2>
          <p className="text-muted-foreground mb-6">Your order is being prepared and will be delivered soon.</p>
          <Link to="/"><Button variant="premium" className="w-full">Back to Home</Button></Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0 && step === 1) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <Truck className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="heading-md mb-4">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-6">Add items from our menu to get started</p>
          <Link to="/menu"><Button variant="premium">Browse Menu</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-[30vh] min-h-[200px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Order Online" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="heading-xl">Order Online</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-2xl">
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card p-6 rounded-2xl shadow-lg">
              <h2 className="heading-md mb-6 flex items-center gap-3"><MapPin className="w-6 h-6 text-accent" />Delivery Details</h2>
              <div className="space-y-4">
                <div><Label>Full Name *</Label><Input value={deliveryInfo.name} onChange={(e) => setDeliveryInfo(p => ({ ...p, name: e.target.value }))} placeholder="John Doe" /></div>
                <div><Label>Phone *</Label><Input value={deliveryInfo.phone} onChange={(e) => setDeliveryInfo(p => ({ ...p, phone: e.target.value }))} placeholder="+1 (555) 000-0000" /></div>
                <div><Label>Delivery Address *</Label><Textarea value={deliveryInfo.address} onChange={(e) => setDeliveryInfo(p => ({ ...p, address: e.target.value }))} placeholder="Enter full address" /></div>
                <div><Label>Notes</Label><Input value={deliveryInfo.notes} onChange={(e) => setDeliveryInfo(p => ({ ...p, notes: e.target.value }))} placeholder="Special instructions" /></div>
              </div>
              <Button variant="premium" size="lg" className="w-full mt-6" onClick={() => setStep(2)}>Continue to Payment</Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card p-6 rounded-2xl shadow-lg">
              <h2 className="heading-md mb-6">Payment Method</h2>
              <div className="space-y-4 mb-6">
                <button onClick={() => setPaymentMethod('cod')} className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 ${paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                  <Wallet className="w-6 h-6 text-primary" /><div className="text-left"><p className="font-medium">Cash on Delivery</p></div>
                </button>
                <button onClick={() => setPaymentMethod('online')} className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 ${paymentMethod === 'online' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                  <CreditCard className="w-6 h-6 text-primary" /><div className="text-left"><p className="font-medium">Pay Online</p><p className="text-sm text-muted-foreground">Coming soon</p></div>
                </button>
              </div>
              <div className="border-t pt-4 mb-6"><div className="flex justify-between text-xl font-bold"><span>Total</span><span>${totalPrice.toFixed(2)}</span></div></div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button>
                <Button variant="premium" onClick={handleSubmit} className="flex-1">Place Order</Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OrderOnline;
