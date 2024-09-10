import React, { useState } from 'react';
import './src/components/Navbar.css';

const Navbar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Buscar: ${searchQuery}`);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">Logo</a>
        <button className="toggle-menu" onClick={handleToggleMenu}>
          {mostrarMenu ? 'Cerrar' : 'Abrir'}
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Busca algo acá"
          />
          <button type="submit">Buscar</button>
        </form>
        <ul className={`nav-links ${mostrarMenu ? 'mostrar' : ''}`}>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">ajksdhskja</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;