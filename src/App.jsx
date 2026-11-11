import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import Sidebar from './components/Sidebar';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:id" element={<Category />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/busqueda/:keyword" element={<Search />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;