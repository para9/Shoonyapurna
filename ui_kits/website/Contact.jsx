function Contact() {
  return (
    <div id="contact" className="sp-contact">
      <div className="sp-contact-inner">
        <div>
          <p className="sp-section-label">Get In Touch</p>
          <h2 className="sp-section-title">Start the <em>conversation.</em></h2>
          <div className="sp-contact-info">
            <div className="sp-info-item"><div className="sp-info-icon">📍</div><div><div className="sp-info-label">Office</div><div className="sp-info-value">Greater Noida, Uttar Pradesh, India</div></div></div>
            <div className="sp-info-item"><div className="sp-info-icon">📧</div><div><div className="sp-info-label">Email</div><div className="sp-info-value"><a href="mailto:shoonyapurna@shoonyapurna.com">shoonyapurna@shoonyapurna.com</a></div></div></div>
            <div className="sp-info-item"><div className="sp-info-icon">📞</div><div><div className="sp-info-label">Phone</div><div className="sp-info-value"><a href="tel:+919433130278">+91 94331 30278</a></div></div></div>
            <div className="sp-info-item"><div className="sp-info-icon">🌐</div><div><div className="sp-info-label">Website</div><div className="sp-info-value"><a href="https://shoonyapurna.com" target="_blank">shoonyapurna.com</a></div></div></div>
          </div>
        </div>

        <div>
          <p className="sp-section-label">Direct Enquiry</p>
          <p className="sp-early-note">We are currently onboarding select clients. Share your requirement and our team will reach out if it aligns with our current rollout phase.</p>
          <form className="sp-contact-form" onSubmit={e => { e.preventDefault(); alert('Interest received.'); }}>
            <div className="sp-form-group"><label>Full Name</label><input type="text" placeholder="Your full name" required /></div>
            <div className="sp-form-group"><label>Email</label><input type="email" placeholder="your@email.com" required /></div>
            <div className="sp-form-group"><label>Service Required</label>
              <select><option>Select a service</option><option>Legal Intelligence</option><option>Media Intelligence</option><option>Financial Services</option><option>Software Development</option><option>Other</option></select>
            </div>
            <div className="sp-form-group"><label>Message</label><textarea placeholder="Describe your requirement…"></textarea></div>
            <button type="submit" className="sp-btn sp-btn-filled" style={{alignSelf:'flex-start'}}>Submit Interest →</button>
          </form>
        </div>
      </div>
    </div>
  );
}
window.Contact = Contact;

function Footer() {
  return (
    <footer className="sp-footer">
      <div className="sp-footer-logo">0</div>
      <div className="sp-footer-copy">© 2026 Shoonyapurna. All rights reserved.</div>
      <a href="https://shoonyapurna.com" className="sp-footer-domain" target="_blank">shoonyapurna.com</a>
    </footer>
  );
}
window.Footer = Footer;
