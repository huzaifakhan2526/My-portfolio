import { Container } from "./styles";
import AdityaKoushikV from "../../assets/Aditya.jpg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedScroll = ScrollAnimation as any;

export function About() {
  return (
    <Container id="about">
      <AnimatedScroll animateIn="fadeInUp">
        <h2>About Me</h2>
      </AnimatedScroll>
      <AnimatedScroll animateIn="fadeInUp" delay={0.2 * 1000}>
        <p className="subtitle">
          Strategic AI Product Manager with a proven record in launching enterprise-grade AI solutions from concept to go-to-market.
        </p>
      </AnimatedScroll>

      <div className="content-sections">
        <AnimatedScroll animateIn="fadeInLeft" delay={0.3 * 1000}>
          <div className="left-section">
            <h3>Who I Am</h3>
            <p>
              Strategic AI Product Manager with a proven record in launching enterprise-grade AI solutions from concept to go-to-market. Adept at leading cross-functional teams, defining product vision, and scaling AI platforms that have generated over AED 1.3B in enterprise value.
            </p>
            <p>
              My expertise spans Generative AI, NLP, Computer Vision, Retrieval Augmented Generation, and AI automation across FinTech, HealthTech, and industrial sectors.
            </p>
          </div>
        </AnimatedScroll>

        <AnimatedScroll animateIn="fadeInRight" delay={0.4 * 1000}>
          <div className="right-section">
            <h3>What I Do</h3>
            <ul className="responsibilities">
              <li>Build and scale AI products for FinTech, HealthTech, and industrial clients</li>
              <li>Lead teams in Agile/SAFe environments, optimizing product lifecycles</li>
              <li>Architect cloud-native AI solutions on AWS, Azure, and Google Cloud</li>
              <li>Drive end-to-end delivery: ideation, MVP, product-market fit, and GTM</li>
              <li>Implement AI governance, compliance, and ethical frameworks</li>
            </ul>
          </div>
        </AnimatedScroll>
      </div>

      <AnimatedScroll animateIn="fadeInUp" delay={0.5 * 1000}>
        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 3c0 1-1 2-2 2s-2 1-2 2 1 2 2 2 2 1 2 2 1 2 2 2 2 1 2 2-1 2-2 2-2-1-2-2-1-2-2-2-2-1-2-2 1-2 2-2 2-1 2-2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4>AI Strategy</h4>
            <p>Defining product vision for next-gen AI solutions</p>
          </div>

          <div className="expertise-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4>Enterprise Focus</h4>
            <p>AED 1.3B+ in enterprise value generated</p>
          </div>

          <div className="expertise-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Team Leadership</h4>
            <p>Leading cross-functional teams in Agile environments</p>
          </div>

          <div className="expertise-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Innovation</h4>
            <p>Cloud-native AI solutions on AWS, Azure, GCP</p>
          </div>

          <div className="expertise-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9l-3-3-3 3-3-3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Growth</h4>
            <p>From concept to go-to-market success</p>
          </div>

          <div className="expertise-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Compliance</h4>
            <p>AI governance and ethical frameworks</p>
          </div>
        </div>
      </AnimatedScroll>
    </Container>
  )
}
