import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Utensils, Truck, Award, Leaf, Users, Star, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { restaurantInfo, testimonials } from '@/data/restaurantData';
import { getPopularItems } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';
import heroImage from '@/assets/hero-restaurant.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import dish4 from '@/assets/dish-4.jpg';
import interiorImage from '@/assets/interior-1.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const dishImages = [dish1, dish2, dish3, dish4];

const Index = () => {
  const popularItems = getPopularItems().slice(0, 4);
  const { addItem, setIsOpen } = useCart();

  const handleAddToCart = (item: typeof popularItems[0]) => {
    addItem(item);
    setIsOpen(true);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Urban Plate Restaurant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 container-narrow mx-auto px-4 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent text-sm md:text-base font-medium tracking-widest uppercase mb-4">
              Welcome to
            </span>
            <h1 className="heading-xl mb-6 text-primary-foreground">
              {restaurantInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
              {restaurantInfo.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-table">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  Book a Table
                </Button>
              </Link>
              <Link to="/pre-order">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  <Utensils className="w-5 h-5" />
                  Pre-Order for Table
                </Button>
              </Link>
              <Link to="/order-online">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  <Truck className="w-5 h-5" />
                  Order Delivery
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Leaf, title: 'Farm to Table', description: 'Fresh ingredients sourced from local farmers and artisan producers.' },
              { icon: Award, title: 'Award Winning', description: 'Recognized for culinary excellence with multiple industry awards.' },
              { icon: Users, title: 'Private Dining', description: 'Exclusive spaces for intimate gatherings and special celebrations.' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 rounded-xl bg-background card-elevated"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-md mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent text-sm font-medium tracking-widest uppercase">Our Story</span>
              <h2 className="heading-lg mt-2 mb-6">A Passion for Culinary Excellence</h2>
              <p className="body-lg mb-6">
                {restaurantInfo.shortDescription}
              </p>
              <p className="text-muted-foreground mb-8">
                Every dish at {restaurantInfo.name} is a celebration of flavors, textures, and artistry. 
                Our chefs combine traditional techniques with innovative approaches to create 
                unforgettable dining experiences.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={interiorImage}
                alt="Restaurant Interior"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-display font-bold">10+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">From Our Kitchen</span>
            <h2 className="heading-lg mt-2">Popular Dishes</h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {popularItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="group bg-background rounded-xl overflow-hidden card-elevated"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dishImages[index % dishImages.length]}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={item.isVeg ? 'veg-indicator' : 'nonveg-indicator'} />
                    <h3 className="font-display font-semibold text-lg">{item.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-display font-bold text-primary">${item.price.toFixed(2)}</span>
                    <Button size="sm" onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/menu">
              <Button variant="premium" size="lg">
                View Full Menu
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Testimonials</span>
            <h2 className="heading-lg mt-2">What Our Guests Say</h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                className="p-8 bg-card rounded-xl card-elevated"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-accent" />
                <h2 className="heading-md text-primary-foreground">Opening Hours</h2>
              </div>
              <div className="space-y-3">
                {restaurantInfo.hours.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between border-b border-primary-foreground/20 pb-3">
                    <span className="text-primary-foreground/80">{day}</span>
                    <span className="font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-accent" />
                <h2 className="heading-md text-primary-foreground">Find Us</h2>
              </div>
              <div className="mb-6">
                <p className="text-primary-foreground/90 text-lg mb-2">
                  {restaurantInfo.address.street}
                </p>
                <p className="text-primary-foreground/80">
                  {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
                </p>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-primary-foreground/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-4">Ready for an Unforgettable Experience?</h2>
            <p className="body-lg max-w-2xl mx-auto mb-8">
              Reserve your table today and discover why {restaurantInfo.name} is the destination for discerning diners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-table">
                <Button variant="premium" size="xl">
                  <Calendar className="w-5 h-5" />
                  Book a Table
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
