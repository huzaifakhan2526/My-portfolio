import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import { TypeAnimation } from 'react-type-animation'
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Muhammad Huzaifa Khan</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3 className="gradient-title">Full Stack AI Software Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <div className="typing-container">
            <TypeAnimation
              sequence={[
                'Building Intelligent Applications with AI/ML',
                2000,
                'Specializing in LLMs & NLP Solutions',
                2000,
                'Expert in Computer Vision & Deep Learning',
                2000,
                'Creating Scalable Full Stack AI Systems',
                2000,
              ]}
              wrapper="h3"
              speed={50}
              className="typing-text"
              repeat={Infinity}
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <p className="small-resume">Full Stack AI Software Developer at ChapterApps | M.Tech, IIT Roorkee | 2.5+ Years Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Get In Touch</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1.2 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/themuhammadhuzaifakhan1211"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/huzaifakhan1225"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B917007174034&text=Hello+Huzaifa,+I+am+from+your+website&app_absent=0"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Contact"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a
              href="https://t.me/+917007174034"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram Contact"
            >
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Muhammad Huzaifa Khan - AI Developer Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}