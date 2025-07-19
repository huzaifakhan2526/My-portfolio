import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

      /* About Section */
      section[id="about"] {
        .subtitle, p, .responsibilities li, .expertise-card h4, .expertise-card p {
          color: var(--black) !important;
        }
        
        .expertise-card {
          background: #e0e0e0 !important;
          color: var(--black) !important;
        }
      }

      /* Featured Projects Section */
      section[id="project"] {
        .subtitle, .project-description, .achievements ul li, .project-card h3, .project-card p {
          color: var(--black) !important;
        }
        
        .project-card {
          background: #e0e0e0 !important;
          color: var(--black) !important;
        }
      }

      /* Key Achievements Section */
      section[id="key-achievements"] {
        .achievement-card p, .achievement-card {
          color: var(--black) !important;
        }
        
        .achievement-card {
          background: #e0e0e0 !important;
        }
      }

      /* DIY AI Studio Section */
      section[id="diy-ai-studio"] {
        background: #f0f0f0 !important;
        
        .subtitle, .description, .features-list .feature-item span:last-child, .feature-card h4, .feature-card p {
          color: var(--black) !important;
        }
        
        .feature-card {
          background: #e0e0e0 !important;
          color: var(--black) !important;
        }
      }

      /* Contact Section */
      section[id="contact"] {
        .subtitle, .contact-info p, .promise-section p {
          color: var(--black) !important;
        }
        
        .contact-card, .promise-section {
          background: #e0e0e0 !important;
          color: var(--black) !important;
        }

        /* Schedule section specific fixes */
        .schedule-section {
          background: var(--green) !important;
          
          h3 {
            color: var(--black) !important;
          }
          
          p {
            color: var(--black) !important;
          }
          
          .schedule-button {
            background: var(--black) !important;
            color: #FFF !important;
            
            &:hover {
              background: #333 !important;
              color: #FFF !important;
            }
          }
        }
      }

      /* General text color fixes for light theme */
      p, span, div, li {
        color: var(--black) !important;
      }

      /* Ensure all white text becomes black in light theme */
      * {
        color: var(--black) !important;
      }

      /* Keep green and blue colors for headings and accents */
      h1, h2, h3, h4, h5, h6 {
        color: var(--green) !important;
      }

      .subtitle, .description, .project-description, .achievements ul li, 
      .features-list .feature-item span:last-child, .contact-info p, 
      .promise-section p, .expertise-card p, .project-card p {
        color: var(--black) !important;
      }

      /* Card backgrounds */
      .expertise-card, .project-card, .achievement-card, .feature-card, 
      .contact-card, .promise-section {
        background: #e0e0e0 !important;
        color: var(--black) !important;
      }

      /* Section backgrounds */
      section[id="diy-ai-studio"] {
        background: #f0f0f0 !important;
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }
`

export default GlobalStyle;