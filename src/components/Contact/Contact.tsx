import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedScroll = ScrollAnimation as any;

export function Contact(){
  return(
    <Container id="contact">
      <AnimatedScroll animateIn="fadeInUp">
        <h2>Let's Build the Future Together</h2>
      </AnimatedScroll>
      <AnimatedScroll animateIn="fadeInUp" delay={0.2 * 1000}>
        <p className="subtitle">
          Ready to transform your business with AI? Let's discuss how we can create innovative solutions that drive real value and impact.
        </p>
      </AnimatedScroll>

      <div className="contact-content">
        <AnimatedScroll animateIn="fadeInLeft" delay={0.3 * 1000}>
          <div className="contact-methods">
            <div className="contact-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-info">
                <a href="mailto:adityakoushik821@gmail.com">adityakoushik821@gmail.com</a>
                <p>Drop me a line anytime</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-info">
                <a href="tel:+919487778192">+91-9487778192</a>
                <p>Let's discuss your AI strategy</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-info">
                <a href="https://wa.me/919487778192" target="_blank" rel="noreferrer">+91-9487778192</a>
                <p>Quick chat on WhatsApp</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-info">
                <a href="https://www.linkedin.com/in/aditya-koushik-v-33b35482/" target="_blank" rel="noreferrer">
                  Connect with me
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <p>Professional networking</p>
              </div>
            </div>
          </div>
        </AnimatedScroll>

        <AnimatedScroll animateIn="fadeInRight" delay={0.4 * 1000}>
          <div className="right-section">
            <div className="schedule-section">
              <div className="schedule-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Schedule a Strategic Discussion</h3>
              <p>Book a 30-minute call to explore how AI can transform your business</p>
              <a href="https://meet.google.com/new?hs=122&authuser=0" target="_blank" rel="noreferrer" className="schedule-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Book a Call
              </a>
            </div>

            <div className="promise-section">
              <h4>Quick Response Promise</h4>
              <p>I typically respond to all inquiries within 24 hours. For urgent matters, feel free to reach out via phone or LinkedIn.</p>
            </div>
          </div>
        </AnimatedScroll>
      </div>
    </Container>
  )
}