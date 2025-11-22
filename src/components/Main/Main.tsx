// import Particles from "tsparticles-slim"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Contact } from "../Contact/Contact";
// import { Project } from "../Project/Project";
// Particle icons - will be used when particles are re-enabled
// import wordpress from "../../assets/wordpress.svg";
// import shopify from "../../assets/shopify.svg";
// import htmlIcon from "../../assets/html-icon.svg";
// import cssIcon from "../../assets/css-icon.svg";
// import sassIcon from "../../assets/sass-icon.svg";
// import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
// import reactIcon from "../../assets/react-icon.svg";
// import typescriptIcon from "../../assets/typescript-icon.svg";
// import vueIcon from "../../assets/vue-icon.svg";
// import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function Main() {
  return (
    <Container>
      {/* Particles temporarily disabled - will re-enable with v2 API */}
      {/* <Particles ... /> */}
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      {/* <Project></Project> */}
      <Contact></Contact>
    </Container>
  );
}