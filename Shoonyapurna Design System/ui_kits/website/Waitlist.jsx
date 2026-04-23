const WL_TAGS = ['Legal Intelligence','Media Intelligence','Operational Management','Financial Services','Survey & Research','Computer Networking','Software Development','AI Integration'];

function Waitlist() {
  const [selected, setSelected] = useState(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(47);

  const toggleTag = (t) => {
    const next = new Set(selected);
    next.has(t) ? next.delete(t) : next.add(t);
    setSelected(next);
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setCount(c => c + 1);
  };

  return (
    <div id="waitlist" className="sp-waitlist">
      <div className="sp-waitlist-inner">
        <p className="sp-section-label center">Early Access</p>
        <h2 className="sp-section-title center">Join the <em>waitlist.</em></h2>
        <p className="sp-waitlist-desc">We are currently onboarding select clients and enterprise partners. Share your requirement and our team will reach out if it aligns with our current rollout phase.</p>
        <p className="sp-waitlist-note">We review each submission individually. Priority is given to organisations with clear use-cases across our core domains.</p>

        {!submitted ? (
          <form className="sp-wl-form" onSubmit={submit}>
            <div className="sp-wl-row">
              <div className="sp-wl-group"><label>Full Name *</label><input type="text" placeholder="Your full name" required /></div>
              <div className="sp-wl-group"><label>Work Email *</label><input type="email" placeholder="you@organisation.com" required /></div>
            </div>
            <div className="sp-wl-row">
              <div className="sp-wl-group"><label>Organisation</label><input type="text" placeholder="Company or institution name" /></div>
              <div className="sp-wl-group"><label>Organisation Size</label>
                <select><option value="">Select size</option><option>Solo / Freelance</option><option>2–10 people</option><option>11–50 people</option><option>51–200 people</option><option>200+ people</option></select>
              </div>
            </div>
            <div className="sp-wl-group">
              <label>Services of Interest (select all that apply)</label>
              <div className="sp-wl-tags">
                {WL_TAGS.map(t => (
                  <span key={t} className={`sp-wl-tag ${selected.has(t)?'selected':''}`} onClick={() => toggleTag(t)}>{t}</span>
                ))}
              </div>
            </div>
            <div className="sp-wl-group"><label>Describe Your Use Case</label><textarea placeholder="What problem are you looking to solve? The more specific, the better." /></div>
            <div className="sp-wl-group"><label>How soon do you need this?</label>
              <select><option value="">Select timeline</option><option>Immediately / ASAP</option><option>Within 1 month</option><option>1–3 months</option><option>3–6 months</option><option>Just exploring</option></select>
            </div>
            <button type="submit" className="sp-btn sp-btn-filled sp-wl-submit">Submit Interest →</button>
          </form>
        ) : (
          <div className="sp-wl-success">
            <div className="sp-success-icon">✦</div>
            <h3>Interest Received.</h3>
            <p>
              Thank you for joining the Shoonyapurna waitlist.<br/>
              Our team reviews each submission individually.<br/><br/>
              We will reach out to you at your provided email<br/>
              if your use-case aligns with our current rollout phase.<br/><br/>
              <strong>Expected review time: 3–7 business days.</strong>
            </p>
          </div>
        )}

        <p className="sp-wl-counter"><strong>{count}</strong> organisations already on the waitlist</p>
      </div>
    </div>
  );
}
window.Waitlist = Waitlist;
