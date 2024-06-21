import React from 'react';

const categories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];

const CategoryFilter = ({ category, onCategoryChange }) => {
  return (
    <div className="mb-4">
      <select
        className="p-2 border rounded"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
