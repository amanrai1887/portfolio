import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Zap, 
  ChevronRight, 
  Layers, 
  CheckCircle
} from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      id: "tekmindz",
      company: "Tekmindz",
      role: "Software Engineer",
      period: "Jan 2026 – Present",
      location: "Noida, U.P, India",
      type: "Full-Time",
      badge: "EV & Real-time Systems",
      color: "emerald",
      highlights: [
        "Designed and implemented an OCPP 1.6 protocol service for SparkE's in-house EV charging management system, connecting 500+ charging stations with the central platform and handling charger status, transaction processing, remote operations, and charging-session lifecycle events.",
        "Built a Corporate wallet and authorization system for SparkE, enabling 1,000+ corporate drivers to charge using company-funded wallets with configurable spending limits, driver-level validations, balance checks, and transaction authorization.",
        "Developed an end-to-end EV charging reservation system for TVS Motors, handling 10K+ bookings with station and slot availability, booking lifecycle management, cancellation policies, conflict validation, and automated invoice generation.",
        "Architected a real-time communication WebSocket service for TVS Motors' EV charging infrastructure, enabling low-latency exchange of charger events, transaction updates, and charging-session state changes between charging stations and the central platform.",
        "Designed an event-driven notification system for TVS Motors, processing 50K+ notifications/month across Email, SMS, and WhatsApp with asynchronous processing, message routing, retries, and fault-tolerant failure handling.",
        "Engineered a real-time video conferencing platform using Cloudflare Realtime Kit supporting 100+ concurrent participants, delivering reliable video/audio communication, session management, and real-time collaboration."
      ],
      tech: ["Node.js", "OCPP 1.6", "WebSockets", "Kafka", "Redis", "Cloudflare Realtime", "PostgreSQL", "Microservices", "TVS Motors", "SparkE"]
    },
    {
      id: "unbiasly",
      company: "UnbiaslyAI",
      role: "Software Engineer",
      period: "Jun 2024 – Sep 2025",
      location: "Delhi, India",
      type: "Full-Time",
      badge: "High-Scale APIs & AI Ingestion",
      color: "cyan",
      highlights: [
        "Led the development of RESTful APIs for a news aggregator app using Node.js, integrating multiple third-party news APIs for real-time updates. Implemented AI-based models to aggregate news, providing users with relevant and personalized content.",
        "Built a scalable notification service using BullMQ, efficiently handling high volumes of user notifications for breaking news and updates without compromising performance.",
        "Optimized REST APIs across web and mobile platforms, slashing average response time from 200 ms to 20–30 ms through query optimization, database indexing, and Redis caching.",
        "Ensured system reliability by monitoring server health through AWS CloudWatch, setting up auto-scaling, load balancing, and proactive alert mechanisms to detect and resolve issues quickly.",
        "Implemented a Role-Based Access Control (RBAC) system with role creation, permission management, and middleware for secure access control, including fine-grained permission control.",
        "Oversaw backend operations, including server deployment, API performance optimization, and database management with Redis caching."
      ],
      tech: ["Node.js", "Express.js", "BullMQ", "Redis", "AWS CloudWatch", "PostgreSQL", "RBAC", "Auto-Scaling", "Docker", "RESTful APIs"]
    },
    {
      id: "byajbook",
      company: "ByajBook",
      role: "Full Stack Developer",
      period: "Jan 2023 – May 2024",
      location: "Remote",
      type: "Full-Time",
      badge: "Fintech & Payments",
      color: "indigo",
      highlights: [
        "Integrated secure payment gateways (PhonePe, Easebuzz, Razorpay) using Node.js, ensuring smooth transactions with top-tier encryption and employing server-to-server callback authentication for enhanced security.",
        "Integrated third-party APIs such as Augmont and Finbii to enable seamless digital gold buy/sell transactions, including real-time gold price retrieval and secure transaction handling.",
        "Proactively resolved API issues by leveraging logging tools like Winston, implementing caching with Redis, and indexing database queries. Achieved a 40% boost in query performance and reduced vCPUs from 8 to 4.",
        "Ensured server health by monitoring with AWS CloudWatch, implementing auto-scaling, load balancing, and setting up alerts for administrators to address system risks and bottlenecks promptly."
      ],
      tech: ["React.js", "Node.js", "PhonePe", "Razorpay", "Easebuzz", "Augmont", "Finbii", "Redis", "MongoDB", "AWS CloudWatch", "Winston"]
    }
  ];

  const [activeTab, setActiveTab] = useState(experiences[0].id);
  const activeExp = experiences.find(e => e.id === activeTab) || experiences[0];

  return (
    <section className="experience-section" id="experience">
      <Container>
        <div className="section-header text-center mb-5">
          <div className="section-badge">
            <Briefcase size={14} className="me-1" />
            <span>Career History</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            3+ years engineering resilient distributed architectures, real-time protocols, 
            and mission-critical cloud backends.
          </p>
        </div>

        <Row className="g-4 align-items-start">
          {/* Company Selection Tabs */}
          <Col lg={4} md={12}>
            <div className="company-nav-glass">
              <div className="nav-title-label">Select Company</div>
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`company-tab-btn ${activeTab === exp.id ? "active" : ""} ${exp.color}`}
                >
                  <div className="tab-indicator"></div>
                  <div className="tab-content-wrapper">
                    <div className="tab-company-name">{exp.company}</div>
                    <div className="tab-role-name">{exp.role}</div>
                    <div className="tab-period-tag">{exp.period}</div>
                  </div>
                  <ChevronRight size={18} className="tab-arrow" />
                </button>
              ))}
            </div>
          </Col>

          {/* Detailed Experience Panel */}
          <Col lg={8} md={12}>
            <div className="experience-detail-card">
              <div className="exp-card-header">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                  <h3 className="exp-role-title">
                    {activeExp.role} <span className="text-muted font-normal">@</span> <span className="text-white">{activeExp.company}</span>
                  </h3>
                  <span className={`exp-highlight-badge badge-${activeExp.color}`}>
                    <Zap size={13} className="me-1" />
                    {activeExp.badge}
                  </span>
                </div>

                <div className="exp-meta-bar">
                  <div className="meta-item">
                    <Calendar size={15} />
                    <span>{activeExp.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={15} />
                    <span>{activeExp.location}</span>
                  </div>
                  <div className="meta-item">
                    <Layers size={15} />
                    <span>{activeExp.type}</span>
                  </div>
                </div>
              </div>

              <div className="exp-card-body">
                <h4 className="key-contributions-title">Key Responsibilities & Core Achievements:</h4>
                <ul className="exp-bullet-list">
                  {activeExp.highlights.map((bullet, i) => (
                    <li key={i} className="exp-bullet-item">
                      <div className="bullet-icon-wrapper">
                        <CheckCircle size={16} />
                      </div>
                      <div className="bullet-text">{bullet}</div>
                    </li>
                  ))}
                </ul>

                <div className="exp-tech-section">
                  <div className="exp-tech-title">Technologies & Architecture:</div>
                  <div className="exp-tech-chips">
                    {activeExp.tech.map((t, idx) => (
                      <span key={idx} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
