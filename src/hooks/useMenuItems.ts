
import { useState, useEffect } from 'react';
import { MenuItem } from '@/types/menu';

// Sample menu data
const allMenuItems: MenuItem[] = [
  // Biryani
  {
    id: 1,
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.',
    price: '$14.99',
    isSpicy: true,
    category: 'Biryani',
    imageSrc: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Vegetable Biryani',
    description: 'Basmati rice cooked with mixed vegetables, aromatic spices, and herbs.',
    price: '$12.99',
    isVegetarian: true,
    category: 'Biryani',
    imageSrc: 'https://images.unsplash.com/photo-1645177628472-9771f5797883?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Lamb Biryani',
    description: 'Basmati rice cooked with tender lamb, aromatic spices, and herbs.',
    price: '$16.99',
    isSpicy: true,
    category: 'Biryani',
    imageSrc: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    name: 'Egg Biryani',
    description: 'Basmati rice cooked with boiled eggs, aromatic spices, and herbs.',
    price: '$13.99',
    category: 'Biryani',
    imageSrc: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600'
  },
  // Curries
  {
    id: 5,
    name: 'Butter Chicken',
    description: 'Tender chicken pieces in a creamy, tomato-based curry with a hint of butter.',
    price: '$13.99',
    category: 'Curries',
    imageSrc: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 6,
    name: 'Paneer Tikka Masala',
    description: 'Cubes of paneer cheese in a rich, spiced tomato sauce.',
    price: '$12.99',
    isVegetarian: true,
    category: 'Curries',
    imageSrc: 'https://images.unsplash.com/photo-1567188040759-fb8a3d42c3b3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 7,
    name: 'Chana Masala',
    description: 'Chickpeas cooked in a spiced tomato and onion sauce.',
    price: '$11.99',
    isVegetarian: true,
    isSpicy: true,
    category: 'Curries',
    imageSrc: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=600'
  },
  // Appetizers
  {
    id: 8,
    name: 'Vegetable Samosas',
    description: 'Crispy pastry triangles filled with spiced potatoes, peas, and vegetables.',
    price: '$6.99',
    isVegetarian: true,
    category: 'Appetizers',
    imageSrc: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 9,
    name: 'Onion Bhaji',
    description: 'Crispy, deep-fried onion fritters made with chickpea flour and spices.',
    price: '$5.99',
    isVegetarian: true,
    category: 'Appetizers',
    imageSrc: 'https://images.unsplash.com/photo-1606755456614-b3875c86b45e?auto=format&fit=crop&q=80&w=600'
  },
  // Breads & Sides
  {
    id: 10,
    name: 'Garlic Naan',
    description: 'Soft bread topped with garlic and butter, baked in a tandoor.',
    price: '$3.99',
    isVegetarian: true,
    category: 'Breads & Sides',
    imageSrc: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 11,
    name: 'Raita',
    description: 'Yogurt mixed with cucumber, tomatoes, and spices.',
    price: '$3.49',
    isVegetarian: true,
    category: 'Breads & Sides',
    imageSrc: 'https://images.unsplash.com/photo-1590779033965-9a6e5be8ef87?auto=format&fit=crop&q=80&w=600'
  },
  // Desserts
  {
    id: 12,
    name: 'Gulab Jamun',
    description: 'Soft milk solids balls soaked in rose-flavored sugar syrup.',
    price: '$4.99',
    isVegetarian: true,
    category: 'Desserts',
    imageSrc: 'https://images.unsplash.com/photo-1586954451116-17a1255a45cb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 13,
    name: 'Kheer',
    description: 'Creamy rice pudding flavored with cardamom, saffron, and topped with nuts.',
    price: '$4.99',
    isVegetarian: true,
    category: 'Desserts',
    imageSrc: 'https://images.unsplash.com/photo-1605195340090-9ae03a3cde34?auto=format&fit=crop&q=80&w=600'
  },
];

export const useMenuItems = (initialCategory: string = 'All') => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Extract unique categories
  const categories = Array.from(new Set(allMenuItems.map(item => item.category)));
  
  // Filter menu items by active category
  useEffect(() => {
    if (activeCategory === 'All') {
      setMenuItems(allMenuItems);
    } else {
      setMenuItems(allMenuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
  // Add scroll event listener to handle transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return {
    activeCategory,
    setActiveCategory,
    menuItems,
    isScrolled,
    categories,
    allMenuItems
  };
};
