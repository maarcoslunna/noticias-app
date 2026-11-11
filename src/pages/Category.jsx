import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsByCategory } from '../services/api';
import NewsCard from '../components/NewsCard';

const Category = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const articles = await getNewsByCategory(id);
      setNews(articles);
      setLoading(false);
    };
    fetchNews();
  }, [id]);

  if (loading) return <h2 className="message">Cargando noticias...</h2>;

  return (
    <div>
      <h1 className="page-title">Noticias de {id}</h1>
      <div className="news-grid">
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Category;