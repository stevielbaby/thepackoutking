

export default function Process() {
  return (
    <main className="page-wrapper" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
             <h2>The Pack Out Process</h2>
             <p>A seamless, secure transition from start to finish.</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', background: 'var(--color-bg-alt)', borderRadius: '16px' }}>
             <h3 style={{ color: 'var(--color-brand-gold)' }}>1. Dispatch & Onsite Assessment</h3>
             <p style={{marginBottom: '1.5rem'}}>Our highly trained crews arrive promptly. We assess the environment, set up protective barriers to prevent secondary damage, and establish a digital staging area.</p>

             <h3 style={{ color: 'var(--color-brand-gold)' }}>2. Secure Inventory & Digital Locking</h3>
             <p style={{marginBottom: '1.5rem'}}>Every item is photographed, condition-noted, and given a barcode. It is immediately entered into our secure digital ledger, effectively "padlocking" its status.</p>

             <h3 style={{ color: 'var(--color-brand-gold)' }}>3. Transportation to The Fortress</h3>
             <p style={{marginBottom: '1.5rem'}}>Items are packed in protective vaults and transported via GPS-tracked trucks directly to our climate-controlled, 24/7 monitored warehouse.</p>

             <h3 style={{ color: 'var(--color-brand-gold)' }}>4. Restoration Support</h3>
             <p style={{marginBottom: '1.5rem'}}>With contents out of the way, your restoration contractor can complete their work up to 40% faster without liability risks.</p>

             <h3 style={{ color: 'var(--color-brand-gold)' }}>5. Exact-State Pack Back</h3>
             <p style={{marginBottom: '1.5rem'}}>Once complete, we return, unwrap, and reset the property exactly as it was, providing a definitive sign-off that the items were protected.</p>
          </div>

          <div className="text-center" style={{marginTop: '4rem'}}>
            <h2>Need Immediate Assistance?</h2>
            <p className="mt-4" style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
              Call{' '}
              <a href="tel:+14808050555" style={{ color: 'var(--color-brand-gold)' }}>480-805-0555</a>
            </p>
            <p>We are available 24/7 for emergency dispatch.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
