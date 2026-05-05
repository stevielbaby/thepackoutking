import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="container navbar-row">
        <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            className="brand-logo nav-brand-logo"
            src="/logo.png"
            alt="THE PACKOUT KING logo featuring a crowned lion"
          />
        </Link>
        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={26} aria-hidden /> : <Menu size={26} aria-hidden />}
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
        {menuOpen ? (
          <button type="button" className="nav-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
        ) : null}
        <div id="primary-nav" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/adjusters">For Adjusters</Link>
          <Link to="/process">Our Process</Link>
          <Link to="/contact" className="btn btn-primary nav-cta" style={{ padding: '0.5rem 1rem' }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
