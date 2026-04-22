
import { Shield, FileText, Truck, Download } from 'lucide-react';

export default function Adjusters() {
  return (
    <main className="page-wrapper" style={{ paddingTop: '100px' }}>
      <section className="adjuster-advantage section-padding">
        <div className="container adjuster-layout">
          <div className="adjuster-text">
            <h2>The Adjuster Advantage</h2>
            <p className="subtitle">Built by industry veterans, for seamless workflows.</p>
            <p>
              We understand what insurance companies and adjusters are looking for. We know that speed, accuracy, and detailed documentation are paramount to a successful claim closure.
            </p>
            <ul className="advantage-list">
              <li><Shield size={20} className="text-gold"/> Absolute liability mitigation through secure tracking.</li>
              <li><FileText size={20} className="text-gold"/> Transparent, actionable digital inventory reports for your desk.</li>
              <li><Truck size={20} className="text-gold"/> Fast response limits business interruption and displacement.</li>
            </ul>
             <button className="btn btn-primary mt-4" onClick={() => window.location.href='/process'}>Partner With Us</button>
          </div>
          <div className="adjuster-image-container">
            <img src="/residential-packout.png" alt="Professional Residential Packout" className="adjuster-img" />
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="container">
          <div className="section-header text-center">
             <h2>Vendor Onboarding & Resources</h2>
             <p>Instant access to our credentials and standardized documentation.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
             <button className="btn btn-secondary" onClick={() => alert('Placeholder: COI.pdf expected here.')}>
               <Download size={18} /> Certificate of Insurance
             </button>
             <button className="btn btn-secondary" onClick={() => alert('Placeholder: W9.pdf expected here.')}>
               <Download size={18} /> Company W-9
             </button>
             <button className="btn btn-secondary" onClick={() => alert('Placeholder: sample_inventory.pdf expected here.')}>
               <Download size={18} /> Sample Inventory Report
             </button>
             <button className="btn btn-secondary" onClick={() => alert('Placeholder: liability_release.pdf expected here.')}>
               <Download size={18} /> Liability Release Form
             </button>
          </div>
        </div>
      </section>
    </main>
  );
}
