const NewsCard = ({ article }) => {
  if (!article.urlToImage) return null; 

  const saveToFavorites = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadySaved = savedFavorites.some(item => item.url === article.url);
    
    if (!isAlreadySaved) {
      const updatedFavorites = [...savedFavorites, article];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      alert('¡Noticia guardada en favoritos!');
    } else {
      alert('Esta noticia ya está en tus favoritos.');
    }
  };

  return (
    <div className="news-card">
      <img src={article.urlToImage} alt={article.title} className="news-img" />
      <div className="news-content">
        <h3 className="news-title">{article.title}</h3>
        <p className="news-desc">{article.description}</p>
        
        <div className="news-footer">
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn-read">
            Leer más ➔
          </a>
          <button onClick={saveToFavorites} className="btn-save">
            Guardar ⭐
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;