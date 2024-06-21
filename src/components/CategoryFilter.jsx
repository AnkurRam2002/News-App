import React from 'react';

const categories = [
  'General',
  'Business',
  'Entertainment',
  'Health',
  'Science',
  'Sports',
  'Technology',
];

const CategoryFilter = ({ category, onCategoryChange }) => {
  return (
    <div className="mb-4 flex justify-between">
        <div className='px-5 py-2 text-3xl font-bold text-center text-blue-600 rounded-lg"'>News World</div>
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
