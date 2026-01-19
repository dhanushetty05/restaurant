import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantData';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-display font-bold mb-4">{restaurantInfo.name}</h3>
            <p className="text-primary-foreground/80 mb-6">
              {restaurantInfo.shortDescription}
            </p>
            <div className="flex gap-4">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={restaurantInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Menu
              </Link>
              <Link to="/book-table" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Book a Table
              </Link>
              <Link to="/order-online" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Order Online
              </Link>
              <Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="flex flex-col gap-2">
              {restaurantInfo.hours.slice(0, 4).map(({ day, hours }) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="text-primary-foreground/80">{day}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${restaurantInfo.contact.phone}`}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{restaurantInfo.contact.phone}</span>
              </a>
              <a
                href={`mailto:${restaurantInfo.contact.email}`}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{restaurantInfo.contact.email}</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
