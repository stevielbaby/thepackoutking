import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer section-padding">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img className="brand-logo" src="/logo.svg" alt="The Pack Out King Logo" style={{ height: '40px', width: 'auto', borderRadius: '4px' }} />
            <span>The Pack Out King</span>
          </div>
          <p>Compassionate, accurate, and professional contents restoration logistics.</p>
          <div style={{ marginTop: '1rem' }}>
             <a href="/about" style={{ color: 'var(--color-brand-gold)' }}>Read Our Story &rarr;</a>
          </div>
        </div>
        <div className="footer-contact">
           <h3>Contact Us</h3>
           <p>Mesa, Arizona HQ</p>
           <p className="flex-align"><Phone size={16}/> 1-800-PACK-KING</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Pack Out King. All rights reserved.</p>
      </div>
    </footer>
  );
}
