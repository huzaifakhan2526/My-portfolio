import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedScroll = ScrollAnimation as any;

export function FeaturedProjects() {
  return (
    <Container id="project">
      <AnimatedScroll animateIn="fadeInUp">
        <h2>Featured Projects</h2>
      </AnimatedScroll>
      <AnimatedScroll animateIn="fadeInUp" delay={0.2 * 1000}>
        <p className="subtitle">Transformative AI solutions delivering measurable business impact across industries</p>
      </AnimatedScroll>
      
      <div className="projects-grid">
        <AnimatedScroll animateIn="fadeInUp" delay={0.3 * 1000}>
          <div className="project-card">
            <div className="project-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9l-3-3-3 3-3-3-3 3" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Agentic Orchestration for FinTech</h3>
            <p className="project-subtitle">Leading FinTech - India</p>
            <p className="project-description">
              Architected intent-based AI orchestration for a leading FinTech, integrating mutual funds, insurance, and loan products.
            </p>
            <div className="achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li>Enabled real-time plan comparison and dynamic recommendations</li>
                <li>Reduced onboarding time by 50%</li>
                <li>Increased cross-sell conversion by 22%</li>
              </ul>
            </div>
            <div className="technologies">
              <span>Generative AI</span>
              <span>RAG</span>
              <span>Intent Recognition</span>
              <span>Financial APIs</span>
            </div>
          </div>
        </AnimatedScroll>

        <AnimatedScroll animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="project-card">
            <div className="project-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>AI Recruitment Solution</h3>
            <p className="project-subtitle">HRTech Platform</p>
            <p className="project-description">
              Developed an AI-powered recruitment suite with video interviewers and text-based assessments.
            </p>
            <div className="achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li>Real-time prompt engineering and automated feedback</li>
                <li>Cut recruiter screening time by 60%</li>
                <li>Improved candidate quality through AI ranking</li>
              </ul>
            </div>
            <div className="technologies">
              <span>Computer Vision</span>
              <span>NLP</span>
              <span>Video Analysis</span>
              <span>Assessment AI</span>
            </div>
          </div>
        </AnimatedScroll>

        <AnimatedScroll animateIn="fadeInUp" delay={0.5 * 1000}>
          <div className="project-card">
            <div className="project-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>AgriTech AI Solution</h3>
            <p className="project-subtitle">WhatsApp Disease Detection</p>
            <p className="project-description">
              Engineered a WhatsApp-based image recognition system for crop disease detection.
            </p>
            <div className="achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li>Combined OCR, weather APIs, and feedback-loop retraining</li>
                <li>Boosted crop yield by 20%</li>
                <li>Early pathogen detection and treatment advisories</li>
              </ul>
            </div>
            <div className="technologies">
              <span>Computer Vision</span>
              <span>OCR</span>
              <span>WhatsApp Business API</span>
              <span>IoT Integration</span>
            </div>
          </div>
        </AnimatedScroll>
      </div>
    </Container>
  );
} 