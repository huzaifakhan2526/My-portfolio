import { Container } from "./styles";
import HuzaifaKhan from "../../assets/Huzaifa_khan.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import {
  SiTensorflow, SiPytorch, SiOpenai, SiPython, SiReact,
  SiNodedotjs, SiTypescript, SiDocker, SiAmazon,
  SiMongodb, SiPostgresql, SiFastapi, SiNextdotjs
} from 'react-icons/si';

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm <strong>Muhammad Huzaifa Khan</strong>, a dedicated <strong>Full Stack AI Software Developer</strong> currently working at <strong>ChapterApps</strong> since June 2022. I hold an <strong>M.Tech from IIT Roorkee</strong> and have a proven track record of spearheading innovative AI projects that drive efficiency and productivity.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            As the key architect behind the <strong>AI-Enhanced Resume Builder</strong>, I introduced cutting-edge ATS-optimization using NLP models, reducing resume creation time by an impressive <strong>70%</strong> and enhancing user success rates. I've also optimized SQL queries in Learning Management Systems, resulting in a <strong>35-40% reduction in server load</strong>, and delivered the <strong>HR Assistant Chatbot (Agentic)</strong> 25% ahead of schedule.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            My expertise spans <strong>Angular (7-17)</strong>, <strong>ReactJS</strong>, <strong>NextJS</strong>, <strong>React Native</strong>, <strong>Node.js</strong>, <strong>Python</strong>, <strong>FastAPI</strong>, and cloud platforms like <strong>AWS</strong> and <strong>Google Cloud Services</strong>. I specialize in designing scalable architectures and integrating cutting-edge AI technologies to deliver seamless user experiences. I've enhanced backend processing speed by <strong>50%</strong>, improved ATS keyword-matching accuracy by <strong>85%</strong>, and consistently delivered high-impact solutions ahead of schedule.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Core Technologies & Expertise:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <SiTensorflow size={60} color="#FF6F00" title="TensorFlow" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <SiPytorch size={60} color="#EE4C2C" title="PyTorch" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <SiOpenai size={60} color="#412991" title="OpenAI" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <SiPython size={60} color="#3776AB" title="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <SiFastapi size={60} color="#009688" title="FastAPI" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <SiReact size={60} color="#61DAFB" title="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <SiNextdotjs size={60} color="#FFFFFF" title="Next.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <SiTypescript size={60} color="#3178C6" title="TypeScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <SiNodedotjs size={60} color="#339933" title="Node.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <SiMongodb size={60} color="#47A248" title="MongoDB" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <SiPostgresql size={60} color="#4169E1" title="PostgreSQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <SiDocker size={60} color="#2496ED" title="Docker" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.23 * 1000}>
              <SiAmazon size={60} color="#FF9900" title="AWS" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={HuzaifaKhan} alt="Muhammad Huzaifa Khan - Full Stack AI Software Developer" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}

