import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      <span className="px-5">{currentPage}</span>
      <button className="px-4 py-2 bg-gray-300 rounded" onClick={handleNext}>
      &raquo;
      </button>
    </div>
  );
};

export default Pagination;
