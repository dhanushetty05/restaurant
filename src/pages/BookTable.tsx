import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, User, Phone, MessageSquare, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { restaurantInfo } from '@/data/restaurantData';
import heroImage from '@/assets/hero-restaurant.jpg';
import { toast } from 'sonner';

interface BookingData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

const BookTable = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const handleChange = (field: keyof BookingData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!bookingData.name || !bookingData.phone || !bookingData.date || !bookingData.time) {
      toast.error('Please fill in all required fields');
      return;
    }

    // In production, this would send data via email/WhatsApp/Google Sheets
    // For demo, we'll show confirmation
    setIsSubmitted(true);
    toast.success('Booking request submitted successfully!');
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      `Table Booking Request:\n\n` +
      `Name: ${bookingData.name}\n` +
      `Phone: ${bookingData.phone}\n` +
      `Date: ${bookingData.date}\n` +
      `Time: ${bookingData.time}\n` +
      `Guests: ${bookingData.guests}\n` +
      `Special Requests: ${bookingData.specialRequests || 'None'}`
    );
    window.open(`https://wa.me/${restaurantInfo.contact.whatsapp}?text=${message}`, '_blank');
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
          <h2 className="heading-md mb-4">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for your reservation. We've received your booking request and will confirm shortly.
          </p>
          
          <div className="bg-muted p-6 rounded-xl text-left mb-6">
            <h3 className="font-semibold mb-4">Booking Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span>{bookingData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span>{new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span>{bookingData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Guests:</span>
                <span>{bookingData.guests} {parseInt(bookingData.guests) === 1 ? 'person' : 'people'}</span>
              </div>
            </div>
          </div>

          <Button variant="premium" className="w-full" onClick={() => setIsSubmitted(false)}>
            Make Another Booking
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
            alt="Book a Table"
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
            <h1 className="heading-xl mb-4">Book a Table</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4">
              Reserve your spot for an unforgettable dining experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-card p-6 md:p-10 rounded-2xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={bookingData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date *
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Time *
                  </Label>
                  <Select value={bookingData.time} onValueChange={(value) => handleChange('time', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Guests */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="guests" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Number of Guests *
                  </Label>
                  <Select value={bookingData.guests} onValueChange={(value) => handleChange('guests', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </SelectItem>
                      ))}
                      <SelectItem value="10+">10+ (Contact us)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Requests */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="requests" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Special Requests
                  </Label>
                  <Textarea
                    id="requests"
                    value={bookingData.specialRequests}
                    onChange={(e) => handleChange('specialRequests', e.target.value)}
                    placeholder="Any dietary requirements, allergies, or special occasions..."
                    rows={4}
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button type="submit" variant="premium" size="lg" className="flex-1">
                  Confirm Booking
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={handleWhatsAppSubmit}
                >
                  Book via WhatsApp
                </Button>
              </div>
            </motion.form>

            <p className="text-center text-muted-foreground text-sm mt-6">
              For large parties or special events, please contact us directly at{' '}
              <a href={`tel:${restaurantInfo.contact.phone}`} className="text-primary hover:underline">
                {restaurantInfo.contact.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookTable;
