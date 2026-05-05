
import { Target, Eye, Truck, Warehouse, CheckCircle, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <main className="page-wrapper page-wrapper--muted">
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: 'white', borderBottom: '1px solid var(--color-bg-accent)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="hero-title" style={{ color: 'var(--color-brand-navy)' }}>Our Identity</h1>
            <p className="hero-subtitle" style={{ color: 'var(--color-text-secondary)' }}>
              We are a professional contents handling company specializing in packing out, storing, and packing back personal property from homes affected by disaster.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--color-brand-gold-muted)', borderRadius: '50%', color: 'var(--color-brand-gold)', marginBottom: '1rem' }}>
              <HeartHandshake size={36} />
            </div>
            <h2 style={{ color: 'var(--color-brand-navy)' }}>Why we exist</h2>
          </div>
          <div style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
            <p style={{ marginBottom: '1.25rem' }}>
              In our experience, too many packouts treated personal belongings as something to move out of the way—not as the fragile center of someone&apos;s life after a disaster. Work was sloppy; items were scratched, lost, or mishandled. A lot of the people behind those claims were already on tight budgets. For them, damage to what they still had could hurt almost as much as the fire, flood, or mold that put them on claim in the first place. Seeing folks who were already down take another hit stayed with us.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Those possessions aren&apos;t &quot;stuff.&quot; They&apos;re often all someone has left—and the thread that connects them to the life they remember.
            </p>
            <p style={{ margin: 0 }}>
              We built this company so every pack back means items returned in the same condition we received them—better when restoration allows—so people can move toward what&apos;s next without losing what still matters from before.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section-padding" style={{ backgroundColor: 'white', borderBottom: '1px solid var(--color-bg-accent)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--color-brand-gold)' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--color-brand-gold-muted)', borderRadius: '50%', color: 'var(--color-brand-gold)', marginBottom: '1.5rem' }}>
              <Target size={32} />
            </div>
            <h2>Our Mission</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              To protect, document, and restore our customers' belongings with compassion, accuracy, and professionalism during some of their most difficult times. We ease the logistical and emotional challenges of the restoration process.
            </p>
          </div>
          
          <div style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--color-brand-navy)' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--color-bg-alt)', borderRadius: '50%', color: 'var(--color-brand-navy)', marginBottom: '1.5rem' }}>
              <Eye size={32} />
            </div>
            <h2>Our Vision</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              To become the most trusted and efficient contents restoration logistics partner in the region, bridging the gap between insurance carriers, restoration capabilities, and homeowners with absolute integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Capacity */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-bg-accent)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--color-brand-navy)' }}>Operational Capacity</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              We scale to the size of the disaster. Our infrastructure ensures every job receives uncompromising protection.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'var(--color-bg-base)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-bg-accent)', boxShadow: 'var(--shadow-sm)' }}>
               <Warehouse className="text-gold" size={40} style={{ marginBottom: '1rem' }} />
               <h3 style={{ color: 'var(--color-brand-navy)' }}>Facility Standard</h3>
               <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}><CheckCircle size={16} className="text-gold" /> 3,000–5,000 sq ft Vault Setup</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}><CheckCircle size={16} className="text-gold" /> Pure Climate Control</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}><CheckCircle size={16} className="text-gold" /> 24/7 Monitored Security</li>
               </ul>
            </div>
            <div style={{ background: 'var(--color-bg-base)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-bg-accent)', boxShadow: 'var(--shadow-sm)' }}>
               <Truck className="text-gold" size={40} style={{ marginBottom: '1rem' }} />
               <h3 style={{ color: 'var(--color-brand-navy)' }}>Heavy Fleet</h3>
               <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}><CheckCircle size={16} className="text-gold" /> 16–26 ft Heavy Box Trucks</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}><CheckCircle size={16} className="text-gold" /> Lift Gate Capabilities</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}><CheckCircle size={16} className="text-gold" /> DOT Compliant & GPS Tracked</li>
               </ul>
            </div>
            <div style={{ background: 'var(--color-bg-base)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-bg-accent)', boxShadow: 'var(--shadow-sm)' }}>
               <Target className="text-gold" size={40} style={{ marginBottom: '1rem' }} />
               <h3 style={{ color: 'var(--color-brand-navy)' }}>Software & Team</h3>
               <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}><CheckCircle size={16} className="text-gold" /> Elite Inventory System (iCat/Encircle)</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}><CheckCircle size={16} className="text-gold" /> Background-Cheked Supervisors</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}><CheckCircle size={16} className="text-gold" /> White-Glove Trained Crews</li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
