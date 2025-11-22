import styled from "styled-components";

export const Container = styled.section`
  padding-top: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  background: transparent;
  min-height: 80vh;
  
  .hero-text {
    flex: 1;
    
    & > p {
      font-size: 2rem;
      color: var(--gray-text);
      margin-bottom: 1rem;
      
      img {
        display: inline-block;
        vertical-align: middle;
        margin-left: 0.5rem;
      }
    }
    
    h1 {
      font-size: 7rem;
      font-weight: 800;
      margin-bottom: 2rem;
      line-height: 1.1;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: fadeInUp 0.8s ease-out;
    }

    h3.gradient-title {
      font-size: 3.2rem;
      font-weight: 700;
      margin: 2rem 0;
      background: var(--accent-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .typing-container {
      min-height: 4rem;
      margin: 2rem 0;
      
      .typing-text {
        font-size: 2.4rem;
        font-weight: 600;
        color: var(--neon-green);
        text-shadow: 0 0 10px rgba(67, 233, 123, 0.3);
      }
    }
    
    p.small-resume {
      font-size: 1.8rem;
      color: var(--gray-text);
      margin: 3rem 0;
      line-height: 1.8;
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 3rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background: var(--glass-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--glass-border);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        background: var(--primary-gradient);
        box-shadow: var(--shadow-glow);
        
        img {
          filter: brightness(0) invert(1);
        }
      }
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
      transition: all 0.3s ease;
    }
  }

  .button {
    margin-top: 4rem;
    padding: 1.6rem 4rem;
    font-size: 1.8rem;
    display: inline-block;
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      max-width: 550px;
      width: 100%;
      height: auto;
      filter: drop-shadow(0 0 30px rgba(102, 126, 234, 0.3));
      animation: float 6s ease-in-out infinite;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media(max-width: 960px) {
    display: block;
    margin-top: 15%;
    padding-top: 10%;
    
    .hero-text {
      h1 {
        font-size: 5rem;
      }
      
      h3.gradient-title {
        font-size: 2.4rem;
      }
      
      .typing-container .typing-text {
        font-size: 2rem;
      }
    }
    
    .hero-image {
      margin-top: 5rem;
      
      img {
        max-width: 400px;
      }
    }
  }

  @media(max-width: 600px) {
    margin-top: 25%;
    
    .hero-text {
      h1 {
        font-size: 4rem;
      }
      
      h3.gradient-title {
        font-size: 2rem;
      }
      
      .typing-container .typing-text {
        font-size: 1.6rem;
      }
      
      p.small-resume {
        font-size: 1.6rem;
      }
    }
    
    .social-media {
      gap: 1.5rem;
      
      a {
        width: 4rem;
        height: 4rem;
      }
      
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  @media(max-width: 480px) {
    margin-top: 35%;
    
    .hero-text h1 {
      font-size: 3.5rem;
    }
  }
`