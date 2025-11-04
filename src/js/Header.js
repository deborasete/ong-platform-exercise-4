import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownClick = (hash) => {
    navigate(`/projetos-sociais${hash}`);
    closeMenu();
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          ONG Mãos Unidas
        </Link>
        
        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Início</Link>
          
          <div className={`dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}>
            <button 
              className="nav-link dropdown-toggle" 
              onClick={toggleDropdown}
              aria-expanded={dropdownOpen}
            >
              Projetos Sociais
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className="dropdown-menu">
              <Link 
                to="/projetos-sociais#education" 
                className="dropdown-item" 
                onClick={() => handleDropdownClick('#education')}
              >
                Projeto Educação
              </Link>
              <Link 
                to="/projetos-sociais#food" 
                className="dropdown-item" 
                onClick={() => handleDropdownClick('#food')}
              >
                Projeto Alimentação
              </Link>
              <Link 
                to="/projetos-sociais#inclusion" 
                className="dropdown-item" 
                onClick={() => handleDropdownClick('#inclusion')}
              >
                Projeto Inclusão Digital
              </Link>
              <div className="dropdown-divider"></div>
              <Link 
                to="/projetos-sociais#volunteering" 
                className="dropdown-item" 
                onClick={() => handleDropdownClick('#volunteering')}
              >
                Como Ser Voluntário
              </Link>
              <Link 
                to="/projetos-sociais#donation" 
                className="dropdown-item" 
                onClick={() => handleDropdownClick('#donation')}
              >
                Doações
              </Link>
            </div>
          </div>

          <Link to="/cadastro-voluntarios" className="nav-link" onClick={closeMenu}>Cadastro de Voluntários</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

