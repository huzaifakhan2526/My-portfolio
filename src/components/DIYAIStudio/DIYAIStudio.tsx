import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedScroll = ScrollAnimation as any;

export function DIYAIStudio() {
  return (
    <Container id="diy-ai-studio">
      <div className="featured-label">
        <AnimatedScroll animateIn="fadeInDown">
          <span>Featured Product</span>
        </AnimatedScroll>
      </div>
      
      <AnimatedScroll animateIn="fadeInUp">
        <h2>DIY AI Studio Platform</h2>
      </AnimatedScroll>
      
      <AnimatedScroll animateIn="fadeInUp" delay={0.2 * 1000}>
        <p className="subtitle">A no-code AI agent builder empowering anyone to create custom AI Agents—without coding.</p>
      </AnimatedScroll>
      
      <AnimatedScroll animateIn="fadeInUp" delay={0.3 * 1000}>
        <div className="website-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <a href="https://studio.chapterapps.ai" target="_blank" rel="noreferrer">studio.chapterapps.ai</a>
        </div>
      </AnimatedScroll>

      <div className="content-grid">
        <AnimatedScroll animateIn="fadeInLeft" delay={0.4 * 1000}>
          <div className="left-column">
            <h3>Revolutionizing AI Agent Development</h3>
            <p className="description">
              DIY AI Studio Platform democratizes AI agent creation, enabling businesses and individuals to build sophisticated AI solutions without technical expertise. From concept to deployment in minutes, not months.
            </p>
            
            <div className="features-list">
              <div className="feature-item">
                <span className="bullet">•</span>
                <span>Visual Workflow Builder: Drag-and-drop interface for multi-agent orchestration</span>
              </div>
              <div className="feature-item">
                <span className="bullet">•</span>
                <span>Smart Integration: Connect with Slack, Teams, and external APIs seamlessly</span>
              </div>
              <div className="feature-item">
                <span className="bullet">•</span>
                <span>Instant Deployment: Launch to web, custom URLs, and WhatsApp with one click</span>
              </div>
              <div className="feature-item">
                <span className="bullet">•</span>
                <span>Enterprise Scale: Usage-based pricing with enterprise-grade security</span>
              </div>
            </div>
            
            <a href="https://studio.chapterapps.ai" target="_blank" rel="noreferrer" className="cta-button">
              <span>Explore DIY AI Studio</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </AnimatedScroll>

        <AnimatedScroll animateIn="fadeInRight" delay={0.5 * 1000}>
          <div className="right-column">
            <div className="feature-cards">
              <div className="feature-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Drag-and-Drop Workflows</h4>
                <p>Multi-agent orchestration with visual workflow builder</p>
              </div>

              <div className="feature-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>System Prompt Configuration</h4>
                <p>Advanced prompt engineering and external tool integration</p>
              </div>

              <div className="feature-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>One-Click Deployment</h4>
                <p>Deploy to web, custom URLs, and WhatsApp instantly</p>
              </div>

              <div className="feature-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Enterprise Ready</h4>
                <p>Usage-based pricing and seamless UI integration</p>
              </div>
            </div>
          </div>
        </AnimatedScroll>
      </div>
    </Container>
  );
} 