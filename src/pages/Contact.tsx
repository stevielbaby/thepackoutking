import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const CONTACT_INBOX = 'info@thepackoutking.com';
const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_INBOX)}`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', role: 'homeowner', message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus('submitting');
    try {
      const res = await fetch(FORMSUBMIT_AJAX_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Website contact — ${formData.name}`,
          _captcha: false,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      const data = (await res.json()) as { success?: string; error?: string };
      if (data.error) throw new Error(data.error);
      setStatus('submitted');
      setFormData({ name: '', email: '', phone: '', role: 'homeowner', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page section-padding" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div className="container contact-page-inner">
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
                  <p>
                    <a href="tel:+14808050555" style={{ color: 'inherit' }}>480-805-0555</a>
                  </p>
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
                  <p>135 N. Center #145</p>
                  <p>Mesa, AZ 85201</p>
                  <p style={{ marginTop: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                    Serving the Greater Phoenix area
                  </p>
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
                  <div className="contact-honeypot" aria-hidden="true">
                    <label htmlFor="contact-company-website">Company website</label>
                    <input
                      id="contact-company-website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>
                  {status === 'error' && (
                    <p className="form-error" role="alert">
                      Something went wrong. Please try again or email us at{' '}
                      <a href={`mailto:${CONTACT_INBOX}`}>{CONTACT_INBOX}</a>.
                    </p>
                  )}
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

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '1rem' }}
                    disabled={status === 'submitting'}
                  >
                    <Send size={18} /> {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </div>
  )
}
