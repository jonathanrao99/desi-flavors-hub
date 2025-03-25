
import React from 'react';

interface CategorySelectorProps {
  categories: string[];
  activeCategory: string;
  handleCategoryClick: (category: string) => void;
}

const CategorySelector = ({ 
  categories, 
  activeCategory, 
  handleCategoryClick 
}: CategorySelectorProps) => {
  return (
    <div className="flex justify-center flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            category === activeCategory
              ? 'bg-desi-orange text-white shadow-md'
              : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
