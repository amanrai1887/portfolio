import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  FileDown, 
  MessageSquare
} from "lucide-react";
import { Linkedin } from "react-bootstrap-icons";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: 'Please provide at least your email and a message.' });
      return;
    }

    setButtonText("Sending...");

    try {
      // Sending data to Discord webhook
      await fetch("https://discord.com/api/webhooks/1221057326820102165/TkPOgn3lTjGgsQP-HDPdJLs8LkCGALGkgAOml_h2Gw5aTNN61XBUNLn2GXSwK34uefB_", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content: `🚀 **New Message via Aman Rai's Portfolio**\n**From:** ${formDetails.firstName} ${formDetails.lastName}\n**Email:** ${formDetails.email}\n**Phone:** ${formDetails.phone || 'N/A'}\n**Message:**\n${formDetails.message}`
        })
      });

      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Thank you! Your message has been delivered directly.' });
    } catch (error) {
      setStatus({ success: false, message: 'Something went wrong, but you can email me directly at arai.343531@gmail.com!' });
    } finally {
      setButtonText("Send Message");
    }
  };

  return (
    <section className="contact-section" id="connect">
      <Container>
        <div className="section-header text-center mb-5">
          <div className="section-badge">
            <MessageSquare size={14} className="me-1" />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, interested in hiring, or want to discuss distributed systems? Reach out!
          </p>
        </div>

        <Row className="g-4 align-items-stretch">
          {/* Direct Contact Info Card */}
          <Col lg={5} md={12}>
            <div className="contact-info-panel">
              <div className="contact-panel-header">
                <div className="status-badge-live">
                  <span className="live-pulse-dot"></span>
                  <span>Open to Opportunities</span>
                </div>
                <h3 className="contact-title">Contact Information</h3>
                <p className="contact-intro">
                  Feel free to reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
                </p>
              </div>

              <div className="contact-methods">
                {/* Email Box */}
                <div className="contact-method-card">
                  <div className="method-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="method-details">
                    <div className="method-label">Direct Email</div>
                    <a href="mailto:arai.343531@gmail.com" className="method-value">
                      arai.343531@gmail.com
                    </a>
                  </div>
                  <button 
                    className="copy-btn" 
                    onClick={() => copyToClipboard('arai.343531@gmail.com', 'email')}
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="contact-method-card">
                  <div className="method-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="method-details">
                    <div className="method-label">Phone & WhatsApp</div>
                    <a href="tel:+917318143243" className="method-value">
                      +91 7318143243
                    </a>
                  </div>
                  <button 
                    className="copy-btn" 
                    onClick={() => copyToClipboard('+917318143243', 'phone')}
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="contact-method-card">
                  <div className="method-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="method-details">
                    <div className="method-label">Current Location</div>
                    <div className="method-value static">Noida / Delhi NCR, India</div>
                  </div>
                </div>

                {/* LinkedIn Box */}
                <div className="contact-method-card">
                  <div className="method-icon-box">
                    <Linkedin size={20} />
                  </div>
                  <div className="method-details">
                    <div className="method-label">LinkedIn Profile</div>
                    <a 
                      href="https://linkedin.com/in/aman-rai-9073061b0" 
                      target="_blank" 
                      rel="noreferrer"
                      className="method-value"
                    >
                      linkedin.com/in/aman-rai-9073061b0
                    </a>
                  </div>
                </div>
              </div>

              {/* Resume download quick card */}
              <div className="resume-promo-box">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <div className="promo-title">Looking for my full resume?</div>
                    <div className="promo-sub">Download complete updated PDF</div>
                  </div>
                  <a 
                    href="/aman_resume.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-promo-resume"
                    download="Aman_Rai_Resume.pdf"
                  >
                    <FileDown size={16} className="me-1" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Interactive Form */}
          <Col lg={7} md={12}>
            <div className="contact-form-card">
              <div className="form-card-header">
                <h3 className="form-title">Send a Direct Message</h3>
                <p className="form-sub">Fill out the form below and it will be delivered directly to me.</p>
              </div>

              <form onSubmit={handleSubmit} className="custom-contact-form">
                <Row className="g-3">
                  <Col sm={6}>
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input 
                        type="text" 
                        required
                        className="form-control-custom" 
                        value={formDetails.firstName} 
                        placeholder="John" 
                        onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                      />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input 
                        type="text" 
                        className="form-control-custom" 
                        value={formDetails.lastName} 
                        placeholder="Doe" 
                        onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                      />
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        className="form-control-custom" 
                        value={formDetails.email} 
                        placeholder="john@example.com" 
                        onChange={(e) => onFormUpdate('email', e.target.value)} 
                      />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control-custom" 
                        value={formDetails.phone} 
                        placeholder="+91 98765 43210" 
                        onChange={(e) => onFormUpdate('phone', e.target.value)} 
                      />
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea 
                        rows={5} 
                        required
                        className="form-control-custom textarea" 
                        value={formDetails.message} 
                        placeholder="Hi Aman, I'd like to talk about an engineering opportunity or project..." 
                        onChange={(e) => onFormUpdate('message', e.target.value)}
                      ></textarea>
                    </div>
                  </Col>

                  {status.message && (
                    <Col xs={12}>
                      <div className={`alert-feedback ${status.success ? 'alert-success-custom' : 'alert-danger-custom'}`}>
                        {status.message}
                      </div>
                    </Col>
                  )}

                  <Col xs={12}>
                    <button type="submit" className="submit-btn-glow" disabled={buttonText === 'Sending...'}>
                      <span>{buttonText}</span>
                      <Send size={16} />
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
