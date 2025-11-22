import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  :root{
    /* AI-Themed Color Palette */
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --success-gradient: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    
    /* Core Colors */
    --primary-purple: #667eea;
    --primary-violet: #764ba2;
    --accent-cyan: #00f2fe;
    --accent-blue: #4facfe;
    --neon-green: #43e97b;
    --neon-pink: #f5576c;
    
    /* Neutrals */
    --black: #0a0a0f;
    --dark-bg: #121218;
    --dark-card: #1a1a24;
    --dark-border: #2a2a3a;
    --gray-text: #a0a0b0;
    --white: #ffffff;
    
    /* Glassmorphism */
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    
    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.3);
    --shadow-glow: 0 0 20px rgba(102, 126, 234, 0.4);
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 6rem;
    
    /* Border Radius */
    --radius-sm: 0.5rem;
    --radius-md: 1rem;
    --radius-lg: 2rem;
    --radius-full: 50%;
    
    scroll-padding-top: 10rem;
    scroll-behavior: smooth;

    &.light{
      --black: #0a0a0f;
      --white: #0a0a0f; /* Invert white to black for text */
      --dark-bg: #f0f2f5;
      --dark-card: rgba(255, 255, 255, 0.65);
      --dark-border: rgba(0, 0, 0, 0.1);
      --gray-text: #4a5568;
      
      /* Light Theme Glassmorphism */
      --glass-bg: rgba(255, 255, 255, 0.6);
      --glass-border: rgba(255, 255, 255, 0.9);
      --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
      
      /* Adjusted Colors for Light Mode */
      --primary-purple: #5a67d8;
      --primary-violet: #6b46c1;
      
      body{
        transition: background-color 0.3s ease, color 0.3s ease;
        background-color: #f0f2f5;
        color: #0a0a0f;
        
        /* Light mode subtle gradient */
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        background-size: 200% 200%;
        animation: gradientShift 15s ease infinite;
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: background-color 0.3s ease;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(0,0,0,0.05);
        
        a{
          transition: color 0.3s ease;
          color: #0a0a0f;
          
          &:hover {
            color: var(--primary-purple);
          }
        }
        
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        
        .menu.active{
          background-color: transparent;
        }
      }

      footer.footer{
        transition: background-color 0.3s ease;
        background-color: rgba(255, 255, 255, 0.5);
        color: var(--black);
        border-top: 1px solid rgba(0,0,0,0.05);
      }

      form{
        input, textarea{
          transition: border-color 0.3s ease, color 0.3s ease;
          border: solid 1px rgba(0,0,0,0.1);
          color: var(--black);
          background-color: rgba(255, 255, 255, 0.8);
          
          &::placeholder{
            color: var(--gray-text);
          }
          
          &:focus {
            border-color: var(--primary-purple);
            background-color: #ffffff;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          }
        }
      }
      
      /* Specific overrides for light mode visibility */
      .contacts div {
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.9);
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        
        a {
          color: var(--black);
        }
        
        &:hover {
          background: var(--primary-gradient);
          a {
            color: #ffffff;
          }
        }
      }
      
      .skill-card {
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.9);
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        
        .skill-name {
          color: var(--black);
        }
        
        .experience span {
          color: var(--gray-text);
        }
      }
      
      .project {
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.9);
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        
        h3 {
          color: var(--black);
        }
        
        p {
          color: var(--gray-text);
        }
      }
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--black);
    color: var(--white);
    overflow-x: hidden;
    
    /* Animated gradient background */
    background: linear-gradient(135deg, #0a0a0f 0%, #1a1a24 50%, #0a0a0f 100%);
    background-size: 200% 200%;
    animation: gradientShift 15s ease infinite;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  body, input, textarea, button {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button, .button {
    border: none;
    cursor: pointer;
    background: var(--primary-gradient);
    color: var(--white);
    border-radius: var(--radius-lg);
    font-weight: 600;
    font-size: 1.6rem;
    padding: 1.2rem 3rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s ease;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-glow);
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  button:disabled, .button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  .logo {
    font-size: 3rem;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    color: var(--white);
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Glassmorphism utility class */
  .glass {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
  }

  /* Gradient text utility */
  .gradient-text {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Selection styles */
  ::selection {
    background: var(--primary-purple);
    color: var(--white);
  }

  ::-moz-selection {
    background: var(--primary-purple);
    color: var(--white);
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--dark-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-gradient);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-violet);
  }

  /* Smooth animations */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`