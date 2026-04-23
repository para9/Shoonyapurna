const SERVICES = ['Law','Finance','Media','Ops','Surveys','Tech'];

function Hero() {
  return (
    <section id="hero" className="sp-hero">
      <div className="sp-logo-wrap">
        <div className="sp-orbit sp-orbit-3" />
        <div className="sp-orbit sp-orbit-2"><span className="sp-dot" /></div>
        <div className="sp-orbit sp-orbit-1"><span className="sp-dot" /></div>

        <div className="sp-service-ring">
          {SERVICES.map((s, i) => (
            <div key={s} className="sp-service-dot" style={{transform:`rotate(${i*60}deg)`}}>
              <span className="sp-service-label"><i className="sp-service-bullet" />{s}</span>
            </div>
          ))}
        </div>

        <div className="sp-zero-core" aria-label="ShunyaPoorna AIOS — AI infrastructure hub">
          <span className="sp-core-zero">0</span>
          <span className="sp-core-name">ShunyaPoorna<em> AIOS</em></span>
          <span className="sp-core-tag">AI Infra · Central Hub</span>
        </div>
      </div>

      <p className="sp-tagline">Shoonyapurna.com &nbsp;·&nbsp; Greater Noida, India</p>
      <h1 className="sp-hero-title">Zero. <em>Infinite</em> Possibilities.</h1>
      <p className="sp-hero-sub">Multidisciplinary Consulting &amp; In-House AI — All Under One Domain</p>
      <p className="sp-hero-note">Early Access Platform · Enterprise Deployments Opening Soon</p>

      <div className="sp-hero-cta">
        <a href="#services" className="sp-btn">Our Services</a>
        <a href="#waitlist" className="sp-btn sp-btn-filled">Request Early Access</a>
      </div>

      <div className="sp-scroll-hint">Scroll</div>
    </section>
  );
}
window.Hero = Hero;
