const FEATURES = [
  {label:'OCR Service', title:'Document Text Extraction', body:'Upload any scanned document, image or PDF. Our OCR engine extracts text instantly — no account required.'},
  {label:'Language Translation', title:'Multilingual Translation', body:'Translate content across 100+ languages in seconds. Supports legal, technical and general documents.'},
  {label:'AI Consultation', title:'Ask Shoonyapurna AI', body:'Get instant answers on any of our service domains. Our in-house AI assistant is available 24/7 for all visitors.'},
];

function FeaturesBand() {
  return (
    <div id="features" className="sp-features-band">
      <div className="sp-features-inner">
        {FEATURES.map(f => (
          <div key={f.title} className="sp-feature-pill">
            <div className="sp-pill-label"><span className="sp-free-badge">Free</span> {f.label}</div>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
window.FeaturesBand = FeaturesBand;
