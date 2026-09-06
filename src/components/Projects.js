import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FolderGit2, 
  Zap, 
  Server, 
  Radio, 
  ShieldCheck, 
  CreditCard,
  Video,
  Activity
} from "lucide-react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "EV & IoT Infrastructure", "Distributed Systems & Realtime", "Fintech & Payments"];

  const projects = [
    {
      id: "ocpp-cms",
      title: "SparkE OCPP 1.6 EV Charger Management System",
      category: "EV & IoT Infrastructure",
      subtitle: "Central Management Protocol Server (CSMS)",
      description: "Designed and implemented an enterprise OCPP 1.6-J (JSON over WebSockets) protocol engine connecting 500+ live commercial EV charging stations. Orchestrates heartbeats, status notifications, meter values, remote start/stop, firmware updates, and session lifecycles.",
      metrics: [
        { label: "Chargers", val: "500+ Active" },
        { label: "Protocol", val: "OCPP 1.6-J" },
        { label: "Uptime", val: "99.98%" }
      ],
      tech: ["Node.js", "OCPP 1.6", "WebSockets", "Kafka", "PostgreSQL", "Docker"],
      icon: Radio,
      accent: "cyan"
    },
    {
      id: "tvs-reservation",
      title: "TVS Motors EV Reservation & WebSocket Mesh",
      category: "EV & IoT Infrastructure",
      subtitle: "Low-Latency Booking & Hardware Sync Platform",
      description: "Architected end-to-end EV charging slot reservation system handling 10K+ bookings with real-time station slot availability, conflict prevention, dynamic cancellation rules, automated invoice generation, and bidirectional WebSocket hardware state propagation.",
      metrics: [
        { label: "Bookings", val: "10K+ Handled" },
        { label: "Sync Latency", val: "< 50ms" },
        { label: "Client", val: "TVS Motors" }
      ],
      tech: ["Node.js", "WebSockets", "Redis", "PostgreSQL", "Kafka", "Microservices"],
      icon: Zap,
      accent: "emerald"
    },
    {
      id: "sparke-wallet",
      title: "Corporate Fleet Wallet & Spending Authorization",
      category: "Fintech & Payments",
      subtitle: "Company-Funded Driver Authorization Engine",
      description: "Built a high-security corporate wallet and authorization engine for SparkE, enabling 1,000+ enterprise drivers to charge across public & depot chargers with fine-grained corporate budget limits, driver validation, and real-time transaction approval.",
      metrics: [
        { label: "Drivers", val: "1,000+ Enrolled" },
        { label: "Auth Speed", val: "< 100ms" },
        { label: "Security", val: "Zero Overspend" }
      ],
      tech: ["Node.js", "Express", "RBAC", "Redis", "PostgreSQL", "Transactions"],
      icon: ShieldCheck,
      accent: "purple"
    },
    {
      id: "notification-pipeline",
      title: "Fault-Tolerant Distributed Notification Mesh",
      category: "Distributed Systems & Realtime",
      subtitle: "High-Throughput Multi-Channel Event Dispatcher",
      description: "Engineered an event-driven notification backbone processing 50K+ messages/month across Email, SMS, and WhatsApp for TVS Motors and UnbiaslyAI. Implemented BullMQ queues, dead-letter queues (DLQ), automated exponential backoff retries, and delivery tracking.",
      metrics: [
        { label: "Throughput", val: "50K+ / Month" },
        { label: "Queue Lag", val: "~0ms" },
        { label: "Channels", val: "Email, SMS, WA" }
      ],
      tech: ["BullMQ", "Kafka", "Node.js", "Redis", "AWS SNS", "REST APIs"],
      icon: Activity,
      accent: "amber"
    },
    {
      id: "sub-30ms-pipeline",
      title: "Sub-30ms High-Throughput News & AI Engine",
      category: "Distributed Systems & Realtime",
      subtitle: "85-90% Latency Reduction & Content Aggregation",
      description: "Architected RESTful ingestion APIs aggregating multi-source news feeds with integrated AI classification models. Optimized query plans, created targeted database indexes, and implemented hierarchical Redis caching, cutting average response time from 200ms to 20-30ms.",
      metrics: [
        { label: "Latency", val: "200ms → 20ms" },
        { label: "AI Pipeline", val: "Real-time" },
        { label: "Infrastructure", val: "AWS CloudWatch" }
      ],
      tech: ["Node.js", "Redis Caching", "PostgreSQL Indexing", "AWS CloudWatch", "BullMQ"],
      icon: Server,
      accent: "cyan"
    },
    {
      id: "payment-orchestration",
      title: "Multi-Gateway Payment & Digital Gold Engine",
      category: "Fintech & Payments",
      subtitle: "Secure S2S Payment & Commodity Processing",
      description: "Built unified payment routing engine integrating PhonePe, Easebuzz, and Razorpay with robust server-to-server webhook authentication, cryptographic signature validation, and integrated digital gold buy/sell APIs via Augmont & Finbii. Reduced cloud vCPUs from 8 to 4.",
      metrics: [
        { label: "Cost Savings", val: "vCPU: 8 → 4" },
        { label: "Query Speed", val: "+40% Boost" },
        { label: "Gateways", val: "PhonePe, Razorpay, Easebuzz" }
      ],
      tech: ["React.js", "Node.js", "Payment Gateways", "Augmont", "Finbii", "Redis", "MongoDB"],
      icon: CreditCard,
      accent: "emerald"
    },
    {
      id: "webrtc-conference",
      title: "Real-Time Video Conferencing Platform",
      category: "Distributed Systems & Realtime",
      subtitle: "Cloudflare Realtime Kit Audio/Video Platform",
      description: "Engineered scalable real-time video conferencing platform supporting 100+ concurrent participants using Cloudflare Realtime kit with dynamic room management, low-latency audio/video media pipelines, and collaborative state management.",
      metrics: [
        { label: "Concurrency", val: "100+ Peers" },
        { label: "Platform", val: "Cloudflare RT" },
        { label: "Protocol", val: "WebRTC / WS" }
      ],
      tech: ["Cloudflare Realtime", "WebRTC", "Node.js", "WebSockets", "Session Mgmt"],
      icon: Video,
      accent: "purple"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <Container>
        <div className="section-header text-center mb-5">
          <div className="section-badge">
            <FolderGit2 size={14} className="me-1" />
            <span>Featured Systems</span>
          </div>
          <h2 className="section-title">
            Architectural & <span className="gradient-text">Flagship Projects</span>
          </h2>
          <p className="section-subtitle">
            Production-grade systems delivering high throughput, ultra-low latency, and reliable EV/IoT infrastructure.
          </p>

          {/* Filter Pills */}
          <div className="project-filter-pills mt-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`filter-pill-btn ${activeFilter === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <Row className="g-4">
          {filteredProjects.map((p) => {
            const IconComp = p.icon;
            return (
              <Col key={p.id} lg={6} md={12}>
                <div className={`project-architecture-card card-accent-${p.accent}`}>
                  <div className="card-top-bar">
                    <div className="project-category-tag">
                      <span className="cat-dot"></span>
                      {p.category}
                    </div>
                    <div className="card-icon-pill">
                      <IconComp size={18} />
                    </div>
                  </div>

                  <div className="project-main-info">
                    <h3 className="project-card-title">{p.title}</h3>
                    <div className="project-card-sub">{p.subtitle}</div>
                    <p className="project-card-desc">{p.description}</p>
                  </div>

                  {/* Impact Metrics Row */}
                  <div className="project-metrics-row">
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="metric-chip">
                        <div className="m-val">{m.val}</div>
                        <div className="m-lbl">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="project-card-footer">
                    <div className="tech-badge-container">
                      {p.tech.map((t, tIdx) => (
                        <span key={tIdx} className="project-tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
