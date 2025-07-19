import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedScroll = ScrollAnimation as any;

export function KeyAchievements() {
  return (
    <Container id="key-achievements">
      <AnimatedScroll animateIn="fadeInUp">
        <h2>Key Achievements</h2>
      </AnimatedScroll>
      
      <div className="achievements-grid">
        <AnimatedScroll animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="achievement-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="achievement-value">AED 1.3B</div>
            <p>Scaled GenAI portfolio contributing to acquisition (2024)</p>
          </div>
        </AnimatedScroll>

        <AnimatedScroll animateIn="fadeInUp" delay={0.3 * 1000}>
          <div className="achievement-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9l-3-3-3 3-3-3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="achievement-value">95%</div>
            <p>Intent accuracy in conversational banking assistants</p>
          </div>
        </AnimatedScroll>

        <AnimatedScroll animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="achievement-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="achievement-value">30%</div>
            <p>Reduction in customer complaints via multilingual chatbots</p>
          </div>
        </AnimatedScroll>

        <AnimatedScroll animateIn="fadeInUp" delay={0.5 * 1000}>
          <div className="achievement-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="achievement-value">AED 22M</div>
            <p>Annual revenue growth from AI credit-scoring engine</p>
          </div>
        </AnimatedScroll>

        <AnimatedScroll animateIn="fadeInUp" delay={0.6 * 1000}>
          <div className="achievement-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="achievement-value">40%</div>
            <p>Reduced cloud infrastructure costs through optimization</p>
          </div>
        </AnimatedScroll>

        <AnimatedScroll animateIn="fadeInUp" delay={0.7 * 1000}>
          <div className="achievement-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9l-3-3-3 3-3-3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="achievement-value">₹50L</div>
            <p>Seed funding secured for IoT-AI AgriTech platform</p>
          </div>
        </AnimatedScroll>
      </div>
    </Container>
  );
} 