import { useState, useEffect } from 'react';
import { getNewsByCategory } from '../services/api';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const articles = await getNewsByCategory('general');
      setNews(articles);
      setLoading(false);
    };
    fetchNews();
  }, []);

  if (loading) return <h2 className="message">Cargando noticias...</h2>;

  return (
    <div>
      <h1 className="page-title">Últimas Noticias</h1>
      <div className="news-grid">
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;