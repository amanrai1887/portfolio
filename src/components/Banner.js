import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  ArrowRight, 
  FileDown, 
  Zap, 
  Cpu, 
  Server, 
  Activity,
  ShieldCheck,
  Radio
} from "lucide-react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(120);

  const toRotate = [
    "Software Engineer",
    "Distributed Systems Architect",
    "EV Infrastructure & OCPP 1.6 Specialist",
    "High-Performance Backend Engineer",
    "Event-Driven & Cloud Solutions Builder"
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]); // eslint-disable-line react-hooks/exhaustive-deps

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2.2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(120);
    }
  };

  const metrics = [
    { value: "500+", label: "EV Stations Connected", sub: "OCPP 1.6 Central Protocol" },
    { value: "10K+", label: "Reservations Processed", sub: "TVS Motors EV Infrastructure" },
    { value: "50K+", label: "Alerts / Month", sub: "Async Multi-Channel Routing" },
    { value: "20ms", label: "Optimized Latency", sub: "Cut down from 200ms with Redis" },
    { value: "40%", label: "Query Speed Boost", sub: "Cloud vCPUs halved (8 → 4)" },
  ];

  return (
    <section className="banner-section" id="home">
      {/* Ambient background glows */}
      <div className="banner-glow-orb glow-orb-1" />
      <div className="banner-glow-orb glow-orb-2" />

      <Container>
        <Row className="align-items-center min-vh-hero">
          <Col lg={7} md={12} className="banner-content">
            <div className="status-pill">
              <span className="pulsing-dot"></span>
              <span className="status-text">Available for High-Impact Roles & Collaborations</span>
            </div>

            <h1 className="hero-heading">
              Hi, I'm <span className="gradient-name">Aman Rai</span>
              <br />
              <span className="role-title">
                {text}
                <span className="typewriter-cursor">|</span>
              </span>
            </h1>

            <p className="hero-bio">
              Software Engineer specializing in <strong>scalable distributed backends</strong>, 
              <strong> real-time IoT protocols (OCPP 1.6)</strong>, high-concurrency WebSockets, and 
              cloud infrastructure. Built mission-critical EV platforms for <strong>TVS Motors & SparkE</strong>, 
              slashed API latency from <strong>200ms to 20ms</strong>, and engineered fault-tolerant microservices.
            </p>

            <div className="hero-actions">
              <a href="#experience" className="btn-primary-glow">
                <span>Explore Experience</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href="/aman_resume.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-secondary-glass"
                download="Aman_Rai_Resume.pdf"
              >
                <FileDown size={18} />
                <span>Download CV</span>
              </a>

              <a href="#connect" className="btn-tertiary-link">
                <span>Get In Touch</span>
              </a>
            </div>

            <div className="tech-stack-strip">
              <span className="tech-strip-label">Core Stack:</span>
              <div className="tech-chips">
                <span className="chip">Node.js</span>
                <span className="chip">TypeScript</span>
                <span className="chip">OCPP 1.6</span>
                <span className="chip">WebSockets</span>
                <span className="chip">Kafka</span>
                <span className="chip">Redis</span>
                <span className="chip">PostgreSQL</span>
                <span className="chip">Docker</span>
                <span className="chip">AWS</span>
                <span className="chip">React</span>
              </div>
            </div>
          </Col>

          <Col lg={5} md={12} className="banner-graphic-col mt-5 mt-lg-0">
            <div className="interactive-sys-card">
              <div className="card-window-header">
                <div className="window-controls">
                  <span className="control-dot close"></span>
                  <span className="control-dot min"></span>
                  <span className="control-dot max"></span>
                </div>
                <div className="window-title">
                  <Activity size={13} className="text-emerald me-1" />
                  <span>system_telemetry.live.log</span>
                </div>
                <div className="window-badge">ACTIVE</div>
              </div>

              <div className="terminal-body">
                <div className="term-line">
                  <span className="term-prompt">$</span>
                  <span className="term-cmd">csms --status --protocol=ocpp1.6</span>
                </div>
                
                <div className="term-block system-stat-grid">
                  <div className="stat-pill">
                    <div className="stat-icon-wrapper cyan">
                      <Radio size={16} />
                    </div>
                    <div>
                      <div className="stat-num">500+</div>
                      <div className="stat-desc">Active Chargers Connected</div>
                    </div>
                  </div>

                  <div className="stat-pill">
                    <div className="stat-icon-wrapper emerald">
                      <Zap size={16} />
                    </div>
                    <div>
                      <div className="stat-num">99.98%</div>
                      <div className="stat-desc">OCPP Session Reliability</div>
                    </div>
                  </div>

                  <div className="stat-pill">
                    <div className="stat-icon-wrapper indigo">
                      <Server size={16} />
                    </div>
                    <div>
                      <div className="stat-num">20 ms</div>
                      <div className="stat-desc">Average API Latency</div>
                    </div>
                  </div>

                  <div className="stat-pill">
                    <div className="stat-icon-wrapper purple">
                      <Cpu size={16} />
                    </div>
                    <div>
                      <div className="stat-num">-50%</div>
                      <div className="stat-desc">vCPU Optimization</div>
                    </div>
                  </div>
                </div>

                <div className="terminal-feed">
                  <div className="feed-item">
                    <span className="feed-time">11:53:02</span>
                    <span className="feed-badge success">HEARTBEAT</span>
                    <span className="feed-text">SparkE Hub: 500+ chargers online</span>
                  </div>
                  <div className="feed-item">
                    <span className="feed-time">11:53:05</span>
                    <span className="feed-badge info">WS_EVENT</span>
                    <span className="feed-text">TVS Reservation #10492 confirmed</span>
                  </div>
                  <div className="feed-item">
                    <span className="feed-time">11:53:08</span>
                    <span className="feed-badge queue">BULLMQ</span>
                    <span className="feed-text">50K dispatch pipeline: 0 backlog</span>
                  </div>
                </div>

                <div className="live-engine-footer">
                  <ShieldCheck size={14} className="text-emerald me-1" />
                  <span>CloudWatch Monitored • Redis Cached • Production Ready</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Global Impact Numbers */}
        <div className="metrics-banner-strip">
          <Row>
            {metrics.map((m, idx) => (
              <Col key={idx} xs={6} md={4} lg className="metric-col">
                <div className="metric-box">
                  <div className="metric-val">{m.value}</div>
                  <div className="metric-lbl">{m.label}</div>
                  <div className="metric-sub">{m.sub}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};
