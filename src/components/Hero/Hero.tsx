import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import AdityaKoushikV from "../../assets/Aditya.jpg";
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'


const AnimatedScroll = ScrollAnimation as any;
const NavHashLinkComponent = NavHashLink as any;

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <AnimatedScroll animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </AnimatedScroll>
        <AnimatedScroll animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Aditya Koushik V</h1>
        </AnimatedScroll>
        <AnimatedScroll animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>AI Product Leader | Generative AI, LLMs & Enterprise SaaS</h3>
        </AnimatedScroll>
        <AnimatedScroll animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Building next-generation AI products and platforms for global impact.</p>
        </AnimatedScroll>
        <AnimatedScroll animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">I am Aditya Koushik, an AI Product Manager with 7+ years of experience delivering transformative Generative AI, Large Language Model, and Machine Learning solutions across FinTech, HealthTech, and industrial sectors. I specialize in AI product strategy, agentic orchestration, and no-code AI platforms—driving measurable business value and innovation across the UAE, India, and global markets.</p>
        </AnimatedScroll>
        <AnimatedScroll animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLinkComponent smooth to="#contact" className="button">Contact</NavHashLinkComponent>
          </BrowserRouter>
        </AnimatedScroll>
        {/* <AnimatedScroll animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media"><a
            href="https://www.linkedin.com/in/themuhammadhuzaifakhan1211"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
            <a
              href="https://github.com/huzaifakhan1225"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B917007174034&text=Hello+Huzaifa,+I+am+from+your+website&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me/+917007174034"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a></div>
        </AnimatedScroll> */}
      </div>
      <div className="hero-image">
        <AnimatedScroll animateIn="fadeInRight" delay={1 * 1000}>
          <img src={AdityaKoushikV} alt="Ilustração" />
        </AnimatedScroll>
      </div>
    </Container>
  )
}