import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img className="brand-logo" src="/logo.svg" alt="The Pack Out King Logo" style={{ height: '80px', width: 'auto', borderRadius: '0px', marginTop: '-8px' }} />
          
        </Link>
        <div className="nav-links">
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/adjusters">For Adjusters</Link>
          <Link to="/process">Our Process</Link>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
