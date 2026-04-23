const SERVICE_LIST = [
  {icon:'⚖️', name:'Legal Intelligence', desc:'Corporate law, contract drafting, dispute resolution, compliance, and litigation support across jurisdictions.', tag:'Consulting'},
  {icon:'📡', name:'Media Intelligence', desc:'Media monitoring, narrative analysis, content strategy, press & broadcast intelligence, and digital reputation management.', tag:'Intelligence'},
  {icon:'⚙️', name:'Operational Management', desc:'Process optimisation, workflow design, supply chain consulting, and enterprise operations structuring.', tag:'Operations'},
  {icon:'💹', name:'Financial Services', desc:'Investment advisory, financial modelling, budgeting, audits, and startup funding strategy.', tag:'Finance'},
  {icon:'📊', name:'Survey & Research', desc:'Market research, data collection, field surveys, analytics reports, and qualitative studies.', tag:'Research'},
  {icon:'🌐', name:'Computer Networking', desc:'Network architecture, cybersecurity, cloud infrastructure, IT support and system integration.', tag:'Infrastructure'},
  {icon:'💻', name:'Software Development', desc:'Bespoke software projects in all major languages — web, mobile, desktop, APIs and enterprise applications.', tag:'Engineering'},
  {icon:'🤖', name:'In-House AI', desc:'Our proprietary AI assistant embedded across every service — intelligent, domain-aware, always available.', tag:'Shoonyapurna AI', ai:true, free:true},
];

function Services() {
  return (
    <div id="services" className="sp-services-wrap">
      <div className="sp-services-inner">
        <p className="sp-section-label">What We Do</p>
        <h2 className="sp-section-title">Every domain. <em>One address.</em></h2>
      </div>

      <div className="sp-services-grid">
        {SERVICE_LIST.map(s => (
          <div key={s.name} className={`sp-service-card ${s.ai?'ai':''}`}>
            <span className="sp-service-icon">{s.icon}</span>
            <div className="sp-service-name">
              {s.name}{s.free && <span className="sp-free-tag">Powered</span>}
            </div>
            <p className="sp-service-desc">{s.desc}</p>
            <span className="sp-service-tag">{s.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
window.Services = Services;
