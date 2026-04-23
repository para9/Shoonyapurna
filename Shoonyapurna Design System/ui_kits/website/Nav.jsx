const { useState, useEffect, useRef } = React;

function Nav({ active = 'services' }) {
  return (
    <>
      <nav className="sp-nav">
        <a className="sp-logo" href="#"><span className="sp-logo-zero">0</span><span className="sp-logo-name">Shoonyapurna</span></a>
        <ul className="sp-nav-links">
          <li><a href="#services" className={active==='services'?'on':''}>Services</a></li>
          <li><a href="#features">Free Tools</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#waitlist">Join Waitlist</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="sp-ai-badge" onClick={() => window.__toggleChat && window.__toggleChat()}>In-House AI</button>
      </nav>
      <div className="sp-coming-banner">
        🚧 Platform Launching Soon — Limited Access &nbsp;·&nbsp; For Early Access &amp; Enterprise Queries Only
      </div>
    </>
  );
}
window.Nav = Nav;
