export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  image?: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    description: "Begin your culinary journey with our carefully crafted appetizers",
    items: [
      {
        id: "s1",
        name: "Truffle Mushroom Bruschetta",
        description: "Crispy sourdough topped with wild mushrooms, truffle oil, and aged parmesan",
        price: 14.99,
        isVeg: true,
        popular: true,
      },
      {
        id: "s2",
        name: "Seared Scallops",
        description: "Pan-seared scallops with cauliflower purée and citrus beurre blanc",
        price: 18.99,
        isVeg: false,
      },
      {
        id: "s3",
        name: "Crispy Calamari",
        description: "Lightly battered calamari with house-made aioli and lemon",
        price: 15.99,
        isVeg: false,
        popular: true,
      },
      {
        id: "s4",
        name: "Burrata Caprese",
        description: "Creamy burrata with heirloom tomatoes, basil, and aged balsamic",
        price: 16.99,
        isVeg: true,
      },
      {
        id: "s5",
        name: "Beef Carpaccio",
        description: "Thinly sliced beef tenderloin with arugula, capers, and parmesan",
        price: 19.99,
        isVeg: false,
      },
    ],
  },
  {
    id: "mains",
    name: "Main Course",
    description: "Signature dishes crafted with passion and the finest ingredients",
    items: [
      {
        id: "m1",
        name: "Grilled Ribeye Steak",
        description: "12oz prime ribeye with herb butter, roasted vegetables, and truffle mash",
        price: 42.99,
        isVeg: false,
        popular: true,
      },
      {
        id: "m2",
        name: "Pan-Roasted Salmon",
        description: "Atlantic salmon with lemon dill sauce, asparagus, and wild rice",
        price: 34.99,
        isVeg: false,
      },
      {
        id: "m3",
        name: "Lobster Linguine",
        description: "Fresh lobster tail with cherry tomatoes, garlic, and white wine sauce",
        price: 38.99,
        isVeg: false,
        popular: true,
      },
      {
        id: "m4",
        name: "Wild Mushroom Risotto",
        description: "Arborio rice with porcini, chanterelle, truffle oil, and aged parmesan",
        price: 28.99,
        isVeg: true,
        popular: true,
      },
      {
        id: "m5",
        name: "Roasted Duck Breast",
        description: "Cherry-glazed duck with sweet potato purée and seasonal greens",
        price: 36.99,
        isVeg: false,
      },
      {
        id: "m6",
        name: "Grilled Mediterranean Vegetables",
        description: "Seasonal vegetables with herb couscous and tahini drizzle",
        price: 24.99,
        isVeg: true,
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet endings to complete your dining experience",
    items: [
      {
        id: "d1",
        name: "Chocolate Lava Cake",
        description: "Warm molten chocolate cake with vanilla bean ice cream",
        price: 12.99,
        isVeg: true,
        popular: true,
      },
      {
        id: "d2",
        name: "Crème Brûlée",
        description: "Classic vanilla custard with caramelized sugar crust",
        price: 10.99,
        isVeg: true,
      },
      {
        id: "d3",
        name: "Tiramisu",
        description: "Espresso-soaked ladyfingers with mascarpone and cocoa",
        price: 11.99,
        isVeg: true,
        popular: true,
      },
      {
        id: "d4",
        name: "Seasonal Fruit Tart",
        description: "Buttery pastry with vanilla custard and fresh fruits",
        price: 10.99,
        isVeg: true,
      },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Refreshing drinks and artisanal cocktails",
    items: [
      {
        id: "b1",
        name: "Signature Mojito",
        description: "Fresh mint, lime, rum, and a splash of soda",
        price: 12.99,
        isVeg: true,
      },
      {
        id: "b2",
        name: "Espresso Martini",
        description: "Vodka, coffee liqueur, and fresh espresso",
        price: 14.99,
        isVeg: true,
        popular: true,
      },
      {
        id: "b3",
        name: "Fresh Fruit Smoothie",
        description: "Blend of seasonal fruits with yogurt and honey",
        price: 8.99,
        isVeg: true,
      },
      {
        id: "b4",
        name: "Artisan Lemonade",
        description: "House-made lemonade with herbs and a hint of ginger",
        price: 6.99,
        isVeg: true,
      },
      {
        id: "b5",
        name: "Premium Wine Selection",
        description: "Ask your server for our curated wine list",
        price: 15.99,
        isVeg: true,
      },
    ],
  },
];

export const getPopularItems = (): MenuItem[] => {
  return menuData.flatMap(category => category.items.filter(item => item.popular));
};

export const getMenuItemById = (id: string): MenuItem | undefined => {
  for (const category of menuData) {
    const item = category.items.find(item => item.id === id);
    if (item) return item;
  }
  return undefined;
};
