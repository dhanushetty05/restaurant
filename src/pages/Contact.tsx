import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { restaurantInfo } from '@/data/restaurantData';
import heroImage from '@/assets/hero-restaurant.jpg';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
  };

  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="heading-xl mb-4">Contact Us</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="heading-md mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <a href={`tel:${restaurantInfo.contact.phone}`} className="flex items-center gap-4 p-4 bg-card rounded-xl card-elevated">
                  <Phone className="w-6 h-6 text-primary" />
                  <div><p className="text-sm text-muted-foreground">Phone</p><p className="font-medium">{restaurantInfo.contact.phone}</p></div>
                </a>
                <a href={`mailto:${restaurantInfo.contact.email}`} className="flex items-center gap-4 p-4 bg-card rounded-xl card-elevated">
                  <Mail className="w-6 h-6 text-primary" />
                  <div><p className="text-sm text-muted-foreground">Email</p><p className="font-medium">{restaurantInfo.contact.email}</p></div>
                </a>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl card-elevated">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div><p className="text-sm text-muted-foreground">Address</p><p className="font-medium">{restaurantInfo.address.street}, {restaurantInfo.address.city}</p></div>
                </div>
              </div>
              <div className="mt-8 aspect-video rounded-xl overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9857!3d40.7484" width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Map" />
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-2xl shadow-lg h-fit">
              <h2 className="heading-md mb-6">Send a Message</h2>
              <div className="space-y-4">
                <div><Label>Name</Label><Input placeholder="Your name" required /></div>
                <div><Label>Email</Label><Input type="email" placeholder="your@email.com" required /></div>
                <div><Label>Message</Label><Textarea placeholder="How can we help?" rows={4} required /></div>
              </div>
              <Button type="submit" variant="premium" size="lg" className="w-full mt-6">Send Message</Button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
