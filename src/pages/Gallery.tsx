import { useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-restaurant.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import dish4 from '@/assets/dish-4.jpg';
import interiorImage from '@/assets/interior-1.jpg';
import chefImage from '@/assets/chef-cooking.jpg';
import barImage from '@/assets/bar-area.jpg';

const images = [
  { src: dish1, category: 'food', alt: 'Signature Steak' },
  { src: dish2, category: 'food', alt: 'Lobster Linguine' },
  { src: dish3, category: 'food', alt: 'Wild Mushroom Risotto' },
  { src: dish4, category: 'food', alt: 'Chocolate Lava Cake' },
  { src: interiorImage, category: 'interior', alt: 'Dining Area' },
  { src: chefImage, category: 'kitchen', alt: 'Chef at Work' },
  { src: barImage, category: 'interior', alt: 'Bar Area' },
  { src: heroImage, category: 'interior', alt: 'Restaurant Ambiance' },
];

const categories = ['all', 'food', 'interior', 'kitchen'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredImages = activeCategory === 'all' ? images : images.filter(img => img.category === activeCategory);

  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="heading-xl mb-4">Gallery</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-muted'}`}>
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, index) => (
              <motion.div key={index} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="aspect-square rounded-xl overflow-hidden card-elevated">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
