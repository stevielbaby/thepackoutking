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
           <p>135 N. Center #145</p>
           <p>Mesa, AZ 85201</p>
           <p className="flex-align">
             <Phone size={16} aria-hidden />
             <a href="tel:+14808050555" style={{ color: 'inherit' }}>480-805-0555</a>
           </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Pack Out King. All rights reserved.</p>
      </div>
    </footer>
  );
}
