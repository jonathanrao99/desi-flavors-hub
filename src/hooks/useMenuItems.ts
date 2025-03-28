import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  isvegetarian: boolean;
  isspicy: boolean;
  category: string;
}

// Define the order of categories
const CATEGORY_ORDER = [
  'Biryani',
  'Curries',
  'Indian Breads',
  'Snacks',
  'Chaat',
  'Breakfast',
  'Chinese',
  'Drinks',
  'Sweets'
];

export function useMenuItems() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMenuItems();
  }, [selectedCategory]);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      console.log('Fetching menu items from Supabase...');

      // First check if the table exists and has data
      const { data: tableInfo, error: tableError } = await supabase
        .from('menu_items')
        .select('count')
        .limit(1);

      if (tableError) {
        console.error('Error checking table:', tableError);
        throw tableError;
      }

      console.log('Table info:', tableInfo);

      // Build the query
      let query = supabase
        .from('menu_items')
        .select('*');

      // Apply category filter if not 'All'
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Curries') {
          query = query.or('category.eq.Non-Veg Curry,category.eq.Veg Curry');
        } else if (selectedCategory === 'Chinese') {
          query = query.or('category.eq.Chinese Non-Veg,category.eq.Chinese Veg');
        } else {
          query = query.eq('category', selectedCategory);
        }
      }

      const { data, error: queryError } = await query;

      if (queryError) {
        console.error('Query error:', queryError);
        throw queryError;
      }

      console.log('Raw data from Supabase:', data);

      if (!data || data.length === 0) {
        console.log('No data found in menu_items table');
        setMenuItems([]);
        setCategories([]);
        return;
      }

      // Map the data to match our interface
      const mappedData = data.map(item => ({
        ...item,
        isvegetarian: item.isvegetarian,
        isspicy: item.isspicy
      }));

      console.log('Mapped data:', mappedData);

      // Sort items by category and name
      const sortedItems = mappedData.sort((a, b) => {
        // First sort by category order
        const categoryOrderA = CATEGORY_ORDER.indexOf(a.category);
        const categoryOrderB = CATEGORY_ORDER.indexOf(b.category);
        
        if (categoryOrderA !== categoryOrderB) {
          return categoryOrderA - categoryOrderB;
        }
        
        // Then sort alphabetically by name within each category
        return a.name.localeCompare(b.name);
      });

      // Get unique categories from the data
      const uniqueCategories = Array.from(new Set(mappedData.map(item => item.category)))
        .filter(category => {
          // Only include categories that exist in our order list
          return CATEGORY_ORDER.includes(category);
        })
        .sort((a, b) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b));

      console.log('Current categories:', uniqueCategories);
      console.log('Current menu items:', sortedItems);

      setMenuItems(sortedItems);
      setCategories(uniqueCategories);
    } catch (err) {
      console.error('Error fetching menu items:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch menu items');
    } finally {
      setLoading(false);
    }
  };

  return {
    menuItems,
    categories,
    selectedCategory,
    setSelectedCategory,
    loading,
    error
  };
}
