import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { 
  Mail, 
  FileDown, 
  Terminal, 
  Menu, 
  X,
  PhoneCall
} from "lucide-react";
import { Linkedin } from "react-bootstrap-icons";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Dynamic active link based on scroll position
      const sections = ['home', 'experience', 'projects', 'skills', 'education', 'connect'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveLink(section);
    setNavExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      expanded={navExpanded}
      className={`custom-nav ${scrolled ? "scrolled" : ""}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-logo" onClick={() => handleNavClick('home')}>
          <div className="brand-icon">
            <Terminal size={18} />
          </div>
          <span className="brand-text">
            Aman<span className="brand-dot">.dev</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="main-navbar-nav"
          onClick={() => setNavExpanded(!navExpanded)}
          className="custom-toggler"
        >
          {navExpanded ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto nav-links-container">
            <Nav.Link 
              href="#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('home')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#experience" 
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('experience')}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              href="#education" 
              className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('education')}
            >
              Education
            </Nav.Link>
            <Nav.Link 
              href="#connect" 
              className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('connect')}
            >
              Contact
            </Nav.Link>
          </Nav>

          <div className="nav-actions">
            <div className="social-quick-links">
              <a 
                href="https://www.linkedin.com/in/aman-rai-9073061b0" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn"
                title="LinkedIn Profile"
              >
                <Linkedin size={17} />
              </a>
              <a 
                href="mailto:arai.343531@gmail.com" 
                className="social-btn"
                title="Send Email"
              >
                <Mail size={17} />
              </a>
              <a 
                href="tel:+917318143243" 
                className="social-btn"
                title="Call Directly"
              >
                <PhoneCall size={17} />
              </a>
            </div>

            <a 
              href="/aman_resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="resume-download-btn"
              download="Aman_Rai_Resume.pdf"
            >
              <FileDown size={15} />
              <span>Resume</span>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
