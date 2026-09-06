import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Layers, 
  Radio 
} from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: Server,
      color: "emerald",
      skills: [
        { name: "Node.js", desc: "Event-driven runtime & asynchronous architectures", level: "Advanced" },
        { name: "NestJS & Express.js", desc: "Modular microservices & REST APIs", level: "Advanced" },
        { name: "WebSockets & Realtime", desc: "Low-latency bidirectional streaming", level: "Expert" },
        { name: "OCPP 1.6 Protocol", desc: "EV CSMS communication & session telemetry", level: "Specialist" },
        { name: "Kafka & BullMQ", desc: "High-throughput asynchronous event queues", level: "Advanced" },
      ]
    },
    {
      title: "Languages & Core",
      icon: Code2,
      color: "cyan",
      skills: [
        { name: "TypeScript", desc: "Type-safe robust distributed architectures", level: "Advanced" },
        { name: "JavaScript (ES6+)", desc: "Full-stack modern runtime patterns", level: "Advanced" },
        { name: "SQL", desc: "Query optimization, indexing, tuning", level: "Advanced" },
        { name: "C / C++", desc: "Foundational algorithms & low-level memory", level: "Proficient" },
      ]
    },
    {
      title: "Databases & In-Memory",
      icon: Database,
      color: "indigo",
      skills: [
        { name: "Redis", desc: "Multi-tier caching, pub/sub, atomic limits", level: "Expert" },
        { name: "PostgreSQL", desc: "Relational modeling, indexing, transactions", level: "Advanced" },
        { name: "MongoDB", desc: "Document stores & high-volume logging", level: "Advanced" },
        { name: "MySQL & SQLite", desc: "Relational query execution & schemas", level: "Proficient" },
      ]
    },
    {
      title: "Cloud, DevOps & Observability",
      icon: Wrench,
      color: "purple",
      skills: [
        { name: "Docker", desc: "Containerization & microservice deployments", level: "Advanced" },
        { name: "AWS CloudWatch & EC2", desc: "Auto-scaling, metrics, alarms, load balancers", level: "Advanced" },
        { name: "New Relic & Grafana", desc: "APM tracing, observability & health telemetry", level: "Proficient" },
        { name: "Jenkins & CI/CD", desc: "Automated pipelines & Git workflows", level: "Proficient" },
        { name: "Postman & Swagger", desc: "API documentation & automated test suites", level: "Advanced" },
      ]
    },
    {
      title: "Frontend & UI Engineering",
      icon: Layers,
      color: "amber",
      skills: [
        { name: "React.js", desc: "Modern component architectures, hooks, state", level: "Advanced" },
        { name: "Angular.js", desc: "Enterprise dashboards & single page apps", level: "Proficient" },
        { name: "HTML5 / Vanilla CSS", desc: "Responsive design, glassmorphism, flex/grid", level: "Advanced" },
      ]
    },
    {
      title: "Fintech & Protocols",
      icon: Radio,
      color: "rose",
      skills: [
        { name: "Payment Gateways", desc: "PhonePe, Easebuzz, Razorpay S2S integrations", level: "Expert" },
        { name: "Digital Gold APIs", desc: "Augmont & Finbii real-time transaction hooks", level: "Advanced" },
        { name: "Cloudflare Realtime", desc: "WebRTC audio/video concurrency (100+ peers)", level: "Advanced" },
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <Container>
        <div className="section-header text-center mb-5">
          <div className="section-badge">
            <Cpu size={14} className="me-1" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Engineering Stack</span>
          </h2>
          <p className="section-subtitle">
            Curated toolkit spanning distributed systems, real-time protocols, database performance, and cloud platforms.
          </p>
        </div>

        <Row className="g-4">
          {skillCategories.map((category, idx) => {
            const CatIcon = category.icon;
            return (
              <Col key={idx} lg={4} md={6} sm={12}>
                <div className={`skill-category-card border-accent-${category.color}`}>
                  <div className="card-cat-header">
                    <div className={`cat-icon-box bg-${category.color}`}>
                      <CatIcon size={20} />
                    </div>
                    <h3 className="cat-title">{category.title}</h3>
                  </div>

                  <div className="skills-list">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-item-row">
                        <div className="skill-info">
                          <div className="skill-name-wrap">
                            <span className="skill-name">{skill.name}</span>
                            <span className={`level-pill level-${skill.level.toLowerCase()}`}>
                              {skill.level}
                            </span>
                          </div>
                          <p className="skill-desc">{skill.desc}</p>
                        </div>
                      </div>
                    ))}
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
