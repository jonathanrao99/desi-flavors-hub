
import React from 'react';
import CategorySelector from './CategorySelector';
import VegToggle from '@/components/VegToggle';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  handleCategoryClick: (category: string) => void;
  showVegOnly: boolean;
  setShowVegOnly: (show: boolean) => void;
}

const FilterBar = ({
  categories,
  activeCategory,
  handleCategoryClick,
  showVegOnly,
  setShowVegOnly
}: FilterBarProps) => {
  return (
    <section className="bg-white/80 backdrop-blur-md py-4 border-b border-gray-100 sticky top-16 z-10 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <CategorySelector 
            categories={categories} 
            activeCategory={activeCategory} 
            handleCategoryClick={handleCategoryClick}
          />
          
          <VegToggle showVegOnly={showVegOnly} setShowVegOnly={setShowVegOnly} />
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
