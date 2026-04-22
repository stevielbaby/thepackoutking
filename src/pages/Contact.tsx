import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', role: 'homeowner', message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('submitted');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '', role: 'homeowner', message: '' });
    }, 3000);
  };

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div className="container" style={{ paddingTop: '60px' }}>
        <div className="contact-layout">
          <div className="contact-info">
            <h1 className="hero-title" style={{ color: 'var(--color-brand-navy)' }}>Get In Touch</h1>
            <p className="hero-subtitle" style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
              We're ready to deploy our expert pack-out team. Contact us for emergency service, detailed estimates, or long-term partnerships.
            </p>
            
            <div className="info-cards">
              <div className="info-card">
                <Phone className="text-gold" size={24} />
                <div>
                  <h4>Call Us 24/7</h4>
                  <p>1-800-PACK-KING</p>
                </div>
              </div>
              <div className="info-card">
                <Mail className="text-gold" size={24} />
                <div>
                  <h4>Email Us</h4>
                  <p>dispatch@thepackoutking.com</p>
                </div>
              </div>
              <div className="info-card">
                <MapPin className="text-gold" size={24} />
                <div>
                  <h4>Headquarters</h4>
                  <p>Mesa, Arizona (Serving Greater Phoenix area)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
             {status === 'submitted' ? (
                <div className="success-message">
                  <h3>Message Received!</h3>
                  <p>Our dispatch team has been notified and will contact you shortly.</p>
                </div>
             ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>I am a...</label>
                    <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
                      <option value="homeowner">Homeowner</option>
                      <option value="contractor">Restoration Contractor</option>
                      <option value="adjuster">Insurance Adjuster</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>How can we help?</label>
                    <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Please describe the property size and situation..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    <Send size={18} /> Send Message
                  </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </div>
  )
}
