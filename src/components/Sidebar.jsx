import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'sports', name: 'Deportes' },
    { id: 'technology', name: 'Tecnología' },
    { id: 'business', name: 'Negocios' },
    { id: 'entertainment', name: 'Entretenimiento' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/busqueda/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <div className="sidebar">
      <h2>Menú</h2>
      
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Buscar noticias..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Buscar 🔍
        </button>
      </form>

      <Link to="/favoritos" className="nav-link fav">
        ⭐ Mis Favoritos
      </Link>

      <h3>Categorías</h3>
      <ul className="nav-list">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link to={`/categoria/${cat.id}`} className="nav-link">
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;