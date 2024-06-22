// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles, setCategory, setPage } from '../reducers/articleSlice';
import ArticleCard from './ArticleCard';
import CategoryFilter from './CategoryFilter';
import Pagination from './Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles({ category, page }));
  }, [dispatch, category, page]);

  const handleCategoryChange = (newCategory) => {
    dispatch(setCategory(newCategory));
  };

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className="container justify-center mx-auto p-4">
      <CategoryFilter category={category} onCategoryChange={handleCategoryChange} />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles?.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      )}
      <Pagination currentPage={page} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
