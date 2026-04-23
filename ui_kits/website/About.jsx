function About() {
  return (
    <section id="about" className="sp-about">
      <p className="sp-section-label">Who We Are</p>
      <h2 className="sp-section-title">Born from <em>zero</em>,<br/>built for everything.</h2>

      <div className="sp-about-grid">
        <div className="sp-about-text">
          <p><strong>Shoonyapurna</strong> — meaning "Building from zero to full-scale solutions" — is a multidisciplinary consulting and technology firm headquartered in Greater Noida, India. We believe zero is not emptiness; it is the origin of all possibility.</p>
          <p>From navigating complex legal landscapes to architecting enterprise software, from conducting field surveys to delivering media intelligence for organisations — we bring <strong>deep domain expertise</strong> together under one unified platform.</p>
          <p>Our in-house AI, built and trained on our proprietary methodologies, augments every engagement with intelligence, speed and precision. <strong>Free tools</strong> like OCR and language translation are available to every visitor — because access to capability should not be gated.</p>
          <a href="#waitlist" className="sp-btn" style={{marginTop:16}}>Join the Waitlist</a>
        </div>

        <div>
          <div className="sp-ceo-card">
            <p className="sp-ceo-title">Chief Executive Officer</p>
            <h3 className="sp-ceo-name">Usha Singh</h3>
            <div className="sp-ceo-info">
              <div>📍 Greater Noida, India</div>
              <div>📧 <a href="mailto:shoonyapurna@shoonyapurna.com">shoonyapurna@shoonyapurna.com</a></div>
              <div>📞 <a href="tel:+919433130278">+91 94331 30278</a></div>
              <div>🌐 <a href="https://shoonyapurna.com" target="_blank">shoonyapurna.com</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
