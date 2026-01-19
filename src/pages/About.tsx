import { motion } from 'framer-motion';
import { ChefHat, Heart, Leaf, Award } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantData';
import heroImage from '@/assets/hero-restaurant.jpg';
import chefImage from '@/assets/chef-cooking.jpg';
import interiorImage from '@/assets/interior-1.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Urban Plate"
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
            <h1 className="heading-xl mb-4">Our Story</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4">
              A passion for culinary excellence and memorable dining experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent text-sm font-medium tracking-widest uppercase">Our Beginning</span>
              <h2 className="heading-lg mt-2 mb-6">The {restaurantInfo.name} Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {restaurantInfo.about.story.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={chefImage}
                alt="Our Chef"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Our Values</span>
            <h2 className="heading-lg mt-2">What We Stand For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ChefHat, title: 'Culinary Excellence', description: 'Every dish is crafted with precision, passion, and the finest ingredients.' },
              { icon: Heart, title: 'Warm Hospitality', description: 'We treat every guest like family, creating memorable experiences.' },
              { icon: Leaf, title: 'Sustainability', description: 'Committed to eco-friendly practices and supporting local producers.' },
              { icon: Award, title: 'Quality First', description: 'Uncompromising standards in everything we do, from kitchen to table.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-background rounded-xl card-elevated"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src={interiorImage}
                alt="Restaurant Interior"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-accent text-sm font-medium tracking-widest uppercase">Our Philosophy</span>
              <h2 className="heading-lg mt-2 mb-6">Farm to Table Excellence</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {restaurantInfo.about.philosophy.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">The Experience</span>
            <h2 className="heading-lg mt-2 mb-6 text-primary-foreground">More Than Just Dining</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-primary-foreground/90 leading-relaxed">
              {restaurantInfo.about.experience.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
