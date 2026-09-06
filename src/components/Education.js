import { GraduationCap, Award, Users, Calendar, MapPin } from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";

export const Education = () => {
  return (
    <section className="education-section" id="education">
      <Container>
        <div className="section-header text-center mb-5">
          <div className="section-badge">
            <GraduationCap size={14} className="me-1" />
            <span>Academic & Leadership</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Community Leadership</span>
          </h2>
          <p className="section-subtitle">
            Strong foundational computer engineering background combined with student mentorship.
          </p>
        </div>

        <Row className="g-4">
          {/* Degree Card */}
          <Col lg={6} md={12}>
            <div className="edu-card main-degree-card">
              <div className="edu-card-top">
                <div className="edu-icon-badge">
                  <GraduationCap size={24} />
                </div>
                <div className="edu-period">
                  <Calendar size={14} className="me-1" />
                  <span>July 2019 – June 2023</span>
                </div>
              </div>

              <div className="edu-content">
                <span className="inst-badge">Premier National Institute</span>
                <h3 className="degree-title">Bachelor of Technology (B.Tech)</h3>
                <h4 className="institution-name">
                  Maulana Azad National Institute of Technology (NIT Bhopal)
                </h4>
                <div className="edu-location">
                  <MapPin size={14} className="me-1" />
                  <span>Bhopal, Madhya Pradesh, India</span>
                </div>

                <p className="edu-summary">
                  Comprehensive engineering curriculum covering Data Structures & Algorithms, 
                  Operating Systems, Computer Networks, Database Management Systems, Object-Oriented 
                  Programming, and Software Engineering principles.
                </p>

                <div className="edu-tags">
                  <span className="edu-tag">NIT Bhopal Alumni</span>
                  <span className="edu-tag">Engineering Graduate</span>
                  <span className="edu-tag">CS Fundamentals</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Volunteer & Mentorship Cards */}
          <Col lg={6} md={12}>
            <div className="volunteer-column">
              <div className="volunteer-card">
                <div className="vol-icon-badge iste">
                  <Users size={20} />
                </div>
                <div className="vol-info">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h4 className="vol-role">Technical Trainer & Mentor</h4>
                    <span className="vol-reach">3000+ Students Impacted</span>
                  </div>
                  <div className="vol-org">Indian Society For Technical Education (ISTE)</div>
                  <div className="vol-sub">MANIT Bhopal Chapter</div>
                  <p className="vol-desc">
                    Conducted extensive online and offline technical and soft-skills training sessions, workshops, 
                    and hands-on coding bootcamps impacting over 3,000 engineering students.
                  </p>
                </div>
              </div>

              <div className="volunteer-card mt-3">
                <div className="vol-icon-badge think-india">
                  <Award size={20} />
                </div>
                <div className="vol-info">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h4 className="vol-role">Event Lead & Workshop Organizer</h4>
                    <span className="vol-reach">Campus Lead</span>
                  </div>
                  <div className="vol-org">Think India MANIT Chapter</div>
                  <div className="vol-sub">MANIT Bhopal Chapter</div>
                  <p className="vol-desc">
                    Spearheaded and coordinated high-impact technical workshops, innovation hackathons, and cultural seminars, managing logistics, student outreach, and speaker coordination.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
