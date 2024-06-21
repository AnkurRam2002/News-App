import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticlePage = () => {
  const { id } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find((article) => article.url === id)
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <img className="w-full h-auto mb-4" src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
