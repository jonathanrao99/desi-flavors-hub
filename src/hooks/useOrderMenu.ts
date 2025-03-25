
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  category: string;
  imageSrc?: string;
}

export const useOrderMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showVegOnly, setShowVegOnly] = useState(false);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

  // Fetch menu items from Supabase
  useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);
      try {
        console.log('Fetching menu items for order page...');
        const { data, error } = await supabase
          .from('menu_items')
          .select('*');
        
        if (error) {
          console.error('Error fetching menu items:', error);
          toast({
            title: "Error",
            description: "Failed to load menu items",
            variant: "destructive"
          });
          return;
        }
        
        if (data) {
          console.log('Menu items fetched for order page:', data);
          // Transform database fields to match our interface
          const transformedData = data.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description || '',
            price: item.price,
            isVegetarian: item.isvegetarian,
            isSpicy: item.isspicy,
            category: item.category,
            imageSrc: item.imagesrc
          }));
          
          // Extract unique categories
          const uniqueCategories = Array.from(new Set(transformedData.map(item => item.category)));
          setCategories(['All', ...uniqueCategories]);
          setMenuItems(transformedData);
        }
      } catch (err) {
        console.error('Failed to fetch menu items:', err);
        toast({
          title: "Error",
          description: "Failed to load menu items",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Handle filtering for both category and vegetarian toggle
  useEffect(() => {
    let filtered = [...menuItems];
    
    // Filter by category if not "All"
    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Filter by vegetarian if the toggle is on
    if (showVegOnly) {
      filtered = filtered.filter(item => item.isVegetarian);
    }
    
    setFilteredItems(filtered);
  }, [activeCategory, showVegOnly, menuItems]);

  return {
    menuItems,
    filteredItems,
    isLoading,
    categories,
    activeCategory,
    setActiveCategory,
    showVegOnly,
    setShowVegOnly
  };
};
