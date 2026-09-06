import { Container, Row, Col } from "react-bootstrap";
import { Mail, Phone, ArrowUp, Terminal, FileDown } from "lucide-react";
import { Linkedin } from "react-bootstrap-icons";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-modern">
      <Container>
        <div className="footer-main-row">
          <Row className="gy-4 align-items-center justify-content-between">
            <Col md={5} sm={12}>
              <div className="footer-brand">
                <div className="brand-logo mb-2">
                  <div className="brand-icon">
                    <Terminal size={18} />
                  </div>
                  <span className="brand-text">
                    Aman<span className="brand-dot">.dev</span>
                  </span>
                </div>
                <p className="footer-tagline">
                  Software Engineer specializing in scalable distributed backends, 
                  real-time IoT protocols (OCPP 1.6), high-throughput microservices, and cloud infrastructure.
                </p>
                <div className="footer-contact-links mt-2">
                  <a href="mailto:arai.343531@gmail.com" className="footer-link-item">
                    <Mail size={14} className="me-1" /> arai.343531@gmail.com
                  </a>
                  <span className="divider">•</span>
                  <a href="tel:+917318143243" className="footer-link-item">
                    <Phone size={14} className="me-1" /> +91 7318143243
                  </a>
                </div>
              </div>
            </Col>

            <Col md={4} sm={12} className="text-md-center">
              <div className="footer-nav-links">
                <a href="#home">Home</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#connect">Contact</a>
              </div>
            </Col>

            <Col md={3} sm={12} className="text-md-end">
              <div className="footer-actions">
                <div className="footer-socials">
                  <a 
                    href="https://linkedin.com/in/aman-rai-9073061b0" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="footer-social-btn"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="/aman_resume.pdf" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="footer-social-btn"
                    title="Download Resume"
                    download="Aman_Rai_Resume.pdf"
                  >
                    <FileDown size={18} />
                  </a>
                  <button 
                    onClick={scrollToTop} 
                    className="footer-back-to-top"
                    title="Back to Top"
                  >
                    <ArrowUp size={18} />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="footer-bottom-bar">
          <Row className="align-items-center">
            <Col sm={6} className="text-center text-sm-start">
              <p className="copyright-text">
                © {new Date().getFullYear()} Aman Rai. Designed & Engineered for High Performance.
              </p>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
              <p className="footer-status-tag">
                <span className="status-ping"></span> Live in Noida / Delhi NCR, India
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};
