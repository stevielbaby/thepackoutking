
import TrustBar from '../components/TrustBar';

export default function Home() {
  return (
    <main>
      <header className="hero section-padding" style={{ minHeight: 'calc(100vh - 80px)' }}>
       <div className="hero-bg">
           {/* Using the practical residential packout image */}
           <img src="/residential-packout.png" alt="Careful residential furniture protection" className="bg-img" />
           <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">
            We don't pack.<br/> <span className="text-gold">We protect.</span>
          </h1>
          <p className="hero-subtitle">
            The premier contents handling logistics partner in Mesa, AZ. Seamless pack outs, secure climate-controlled storage, and immutable digital inventory for homeowners and restoration contractors.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => window.location.href='/process'}>Dispatch Services</button>
            <button className="btn btn-secondary" onClick={() => window.location.href='/services'}>Learn More</button>
          </div>
        </div>
      </header>

      <TrustBar />

      <section className="testimonials section-padding" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="section-header text-center">
             <h2>Trusted by the Industry</h2>
             <p>Our commitment to excellence makes us the preferred partner for adjusters and homeowners.</p>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"The Pack Out King completely revolutionized my claim workflow. Their digital inventory lock provides absolute clarity, allowing me to close claims faster with zero liability headaches. Essential partner."</p>
              <div className="author">
                <h4>Sarah Jenkins</h4>
                <p>Senior Claims Adjuster</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"After the water damage, I was devastated. The crew from Pack Out King treated my personal belongings with such compassion and care. Getting everything back perfectly cleaned and staged was a massive relief."</p>
              <div className="author">
                <h4>Michael Rivera</h4>
                <p>Mesa Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="facility-preview section-padding">
         <div className="container">
           <div className="facility-card">
             <div className="facility-content">
               <h2>The Fortress Experience</h2>
               <p>We treat your clients' personal property like high-value assets securely locked in a bank vault. Our climate-controlled storage acts as an impenetrable fortress until the restoration is completely finished.</p>
             </div>
             <div className="facility-img-wrapper">
               {/* Using the practical warehouse image */}
               <img src="/warehouse.png" alt="High Security Warehouse Vault" />
             </div>
           </div>
         </div>
      </section>
    </main>
  );
}
