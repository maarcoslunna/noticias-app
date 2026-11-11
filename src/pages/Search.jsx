import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsBySearch } from '../services/api';
import NewsCard from '../components/NewsCard';

const Search = () => {
  const { keyword } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      const articles = await getNewsBySearch(keyword);
      setNews(articles);
      setLoading(false);
    };
    if (keyword) fetchSearch();
  }, [keyword]);

  if (loading) return <h2 className="message">Buscando...</h2>;

  return (
    <div>
      <h1 className="page-title">Resultados para: "{keyword}"</h1>
      {news.length === 0 ? (
        <h3 className="message">No se encontraron noticias.</h3>
      ) : (
        <div className="news-grid">
          {news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;