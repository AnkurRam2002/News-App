import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find((article) => article.url === id)
  );

  if (!article) {
    return <div className="container mx-auto p-4">Article not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      {article.urlToImage && (
        <img className="w-full h-auto mb-4" src={article.urlToImage} alt={article.title} />
      )}
      <p className="mb-4">{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Read the full article
      </a>
    </div>
  );
};

export default ArticleDetail;
