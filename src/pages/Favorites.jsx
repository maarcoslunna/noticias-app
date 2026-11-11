import { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <h1 className="page-title">Mis Noticias Favoritas</h1>
      {favorites.length === 0 ? (
        <h3 className="message">Aún no has guardado ninguna noticia.</h3>
      ) : (
        <div className="news-grid">
          {favorites.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;