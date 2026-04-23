function ChatPanel() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {role:'ai', text:"Namaste! I'm the in-house AI for Shoonyapurna. We are currently in a limited rollout phase. I can help explain our platform, capabilities, and which of our services might suit your needs. How can I assist you today?"}
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => { window.__toggleChat = () => setOpen(o => !o); }, []);
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, {role:'user', text}]);
    setInput('');
    setTimeout(() => {
      setMessages(m => [...m, {role:'ai', text:"Thank you for reaching out. Our team will be happy to discuss this further — please share your details via the waitlist form and we'll respond within 3–7 business days."}]);
    }, 800);
  };

  return (
    <>
      <button className="sp-ai-fab" onClick={() => setOpen(true)} style={{opacity: open?0:1, pointerEvents: open?'none':'all'}}>0</button>
      <div className={`sp-chat-panel ${open?'open':''}`}>
        <div className="sp-chat-header">
          <div className="sp-avatar">0</div>
          <div className="sp-chat-header-text">
            <h4>Shoonyapurna AI</h4>
            <p>In-House Intelligence · Limited Rollout</p>
          </div>
          <button className="sp-chat-close" onClick={() => setOpen(false)}>×</button>
        </div>
        <div className="sp-chat-messages" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`sp-msg ${m.role}`}>
              <div className="sp-msg-name">{m.role === 'ai' ? 'Shoonyapurna AI' : 'You'}</div>
              {m.text}
            </div>
          ))}
        </div>
        <div className="sp-chat-input-row">
          <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Ask anything…" onKeyDown={e => { if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); send(); } }} rows={1} />
          <button onClick={send} className="sp-send-btn">→</button>
        </div>
      </div>
    </>
  );
}
window.ChatPanel = ChatPanel;

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <FeaturesBand />
      <About />
      <Waitlist />
      <Contact />
      <Footer />
      <ChatPanel />
    </>
  );
}
window.App = App;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
