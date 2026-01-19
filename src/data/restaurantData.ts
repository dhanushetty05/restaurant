export const restaurantInfo = {
  name: "Urban Plate",
  tagline: "Where Culinary Art Meets Urban Elegance",
  description: "Experience the finest fusion of traditional flavors and contemporary cuisine in the heart of the city.",
  shortDescription: "A modern fine dining experience celebrating local ingredients and global inspiration.",
  
  address: {
    street: "123 Gourmet Avenue",
    city: "Downtown",
    state: "CA",
    zip: "90210",
    country: "USA",
  },
  
  contact: {
    phone: "+1 (555) 123-4567",
    email: "reservations@urbanplate.com",
    whatsapp: "+15551234567",
  },
  
  social: {
    instagram: "https://instagram.com/urbanplate",
    facebook: "https://facebook.com/urbanplate",
    twitter: "https://twitter.com/urbanplate",
  },
  
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "5:00 PM - 10:00 PM" },
    { day: "Wednesday", hours: "5:00 PM - 10:00 PM" },
    { day: "Thursday", hours: "5:00 PM - 10:00 PM" },
    { day: "Friday", hours: "5:00 PM - 11:00 PM" },
    { day: "Saturday", hours: "12:00 PM - 11:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
  ],
  
  features: [
    {
      title: "Farm to Table",
      description: "Fresh ingredients sourced from local farmers and artisan producers.",
      icon: "leaf",
    },
    {
      title: "Award Winning",
      description: "Recognized for culinary excellence with multiple industry awards.",
      icon: "award",
    },
    {
      title: "Private Dining",
      description: "Exclusive spaces for intimate gatherings and special celebrations.",
      icon: "users",
    },
  ],
  
  about: {
    story: `Urban Plate was born from a passion for culinary excellence and a love for bringing people together over exceptional food. Founded in 2015 by Chef Marcus Rivera, our restaurant has become a beloved destination for food enthusiasts seeking an unforgettable dining experience.

Our kitchen is led by a team of talented chefs who share a commitment to creativity, quality, and sustainability. Every dish tells a story, crafted with precision and presented with artistry that reflects our dedication to the craft.

We believe that dining is more than just eating—it's an experience that engages all the senses. From the moment you step through our doors, you'll be transported to a world where flavors dance, aromas captivate, and memories are made.`,
    
    philosophy: `At Urban Plate, we embrace a farm-to-table philosophy that honors the ingredients and the people who grow them. We work closely with local farmers, fishermen, and artisan producers to source the finest seasonal ingredients.

Our commitment to sustainability extends beyond our menu. We minimize waste, use eco-friendly practices, and continuously seek ways to reduce our environmental footprint while maintaining the highest standards of quality.`,
    
    experience: `Step into our warm, sophisticated space where modern design meets timeless elegance. Whether you're celebrating a special occasion, enjoying a romantic dinner, or gathering with friends, Urban Plate offers the perfect ambiance for every moment.

Our attentive staff is dedicated to providing personalized service that makes every guest feel valued. From wine pairings to dietary accommodations, we ensure that your experience is tailored to your preferences.`,
  },
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Food Critic",
    content: "Urban Plate offers an extraordinary dining experience. The attention to detail in every dish is remarkable, and the ambiance is simply perfect for a special evening.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Regular Guest",
    content: "I've celebrated many milestones at Urban Plate. The staff always goes above and beyond to make each visit memorable. The wild mushroom risotto is absolutely divine!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Food Blogger",
    content: "From the creative presentations to the bold flavors, every element at Urban Plate speaks to their passion for culinary excellence. A must-visit destination!",
    rating: 5,
  },
];

export const galleryImages = [
  { id: 1, category: "food", alt: "Signature dish presentation" },
  { id: 2, category: "interior", alt: "Restaurant interior view" },
  { id: 3, category: "food", alt: "Gourmet appetizer" },
  { id: 4, category: "ambiance", alt: "Evening dining atmosphere" },
  { id: 5, category: "food", alt: "Dessert selection" },
  { id: 6, category: "interior", alt: "Private dining area" },
  { id: 7, category: "food", alt: "Chef special creation" },
  { id: 8, category: "ambiance", alt: "Bar and lounge area" },
];
