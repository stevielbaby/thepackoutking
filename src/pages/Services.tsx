
import { PackageSearch, Warehouse, Truck, Box } from 'lucide-react';

export default function Services() {
  return (
    <main className="page-wrapper" style={{ paddingTop: '100px' }}>
      <section className="services section-padding">
        <div className="container">
          <div className="section-header text-center">
             <h2>Comprehensive Contents Solutions</h2>
             <p>End-to-end secure management of personal property.</p>
          </div>
          
          <div className="services-grid" style={{ marginBottom: '4rem' }}>
            <div className="service-card">
              <div className="service-icon"><Box size={32}/></div>
              <h3>Pack Out Services</h3>
              <p>Onsite documentation, safe removal, and meticulous labeling of all contents by trained professionals.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><PackageSearch size={32}/></div>
              <h3>Digital Inventory Lock</h3>
              <p>Real-time tracked digital inventory using immutable tracking, condition reports, and high-resolution photos.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Warehouse size={32}/></div>
              <h3>Secure Vault Storage</h3>
              <p>Short- and long-term storage in our 24/7 monitored, vault-like climate-controlled Mesa warehouse.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Truck size={32}/></div>
              <h3>Pack Back Services</h3>
              <p>Timely redelivery and precise restaging of property once home restoration is fully complete.</p>
            </div>
          </div>

          <div className="facility-card">
             <div className="facility-img-wrapper">
               {/* Practical packout teamwork */}
               <img src="/packers.png" alt="Professional packout crew" />
             </div>
             <div className="facility-content">
               <h2>Reliable Tracking</h2>
               <p>Every single item is physically and digitally tracked. When items leave your property or business, they enter a secure chain of custody until they are returned exactly as they left.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
