import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuData, MenuCategory } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';
import heroImage from '@/assets/hero-restaurant.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import dish4 from '@/assets/dish-4.jpg';

const dishImages = [dish1, dish2, dish3, dish4];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id);
  const { addItem, setIsOpen } = useCart();

  const handleAddToCart = (item: MenuCategory['items'][0]) => {
    addItem(item);
    setIsOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Menu"
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
            <h1 className="heading-xl mb-4">Our Menu</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4">
              Discover our carefully crafted dishes made with the finest ingredients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            {menuData
              .filter((category) => category.id === activeCategory)
              .map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-10">
                    <h2 className="heading-md">{category.name}</h2>
                    <p className="text-muted-foreground mt-2">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex gap-4 p-4 bg-card rounded-xl card-elevated group"
                      >
                        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={dishImages[index % dishImages.length]}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="flex items-center gap-2">
                              <div className={item.isVeg ? 'veg-indicator' : 'nonveg-indicator'} />
                              <h3 className="font-display font-semibold text-lg leading-tight">
                                {item.name}
                                {item.popular && (
                                  <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                                    Popular
                                  </span>
                                )}
                              </h3>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-display font-bold text-primary">
                              ${item.price.toFixed(2)}
                            </span>
                            <Button
                              size="sm"
                              onClick={() => handleAddToCart(item)}
                            >
                              <Plus className="w-4 h-4" />
                              Add
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Dietary Info */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto text-center">
          <h3 className="heading-md mb-6">Dietary Information</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="veg-indicator" />
              <span>Vegetarian</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="nonveg-indicator" />
              <span>Non-Vegetarian</span>
            </div>
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Please inform our staff about any allergies or dietary requirements. 
            We're happy to accommodate special requests and can modify dishes upon request.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Menu;
