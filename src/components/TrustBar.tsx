
import { CheckCircle } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-container">
        <div className="trust-item"><CheckCircle size={20} className="text-gold"/> Licensed & Bonded</div>
        <div className="trust-item"><CheckCircle size={20} className="text-gold"/> Climate-Controlled Vaults</div>
        <div className="trust-item"><CheckCircle size={20} className="text-gold"/> Digital Inventory</div>
        <div className="trust-item"><CheckCircle size={20} className="text-gold"/> Carrier Preferred</div>
      </div>
    </section>
  );
}
