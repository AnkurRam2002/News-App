import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
      <Link to={`/article/${encodeURIComponent(article.url)}`}>
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
        <img className="w-full h-48 object-cover mb-4" src={article.urlToImage} alt={article.title} />
        <p>{article.description}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
