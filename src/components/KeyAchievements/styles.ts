import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  text-align: center;

  h2 {
    font-size: 4rem;
    margin-bottom: 4rem;
    color: var(--green);
    font-weight: 700;
  }

  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .achievement-card {
    background: #2b2b2b;
    padding: 3rem 2rem;
    border-radius: 1.2rem;
    transition: 0.25s;
    text-align: center;
    color: #FFF;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    .card-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      color: var(--green);
      width: 60px;
      height: 60px;
      background: rgba(35, 206, 107, 0.1);
      border-radius: 50%;
      margin: 0 auto 2rem;

      svg {
        transition: transform 0.25s ease;
      }
    }

    &:hover .card-icon {
      background: rgba(255, 255, 255, 0.1);
      color: #FFF;
    }

    &:hover .card-icon svg {
      transform: scale(1.1);
    }

    .achievement-value {
      font-size: 3.2rem;
      font-weight: 700;
      color: var(--green);
      margin-bottom: 1rem;
      line-height: 1.2;
      transition: color 0.25s;
    }

    &:hover .achievement-value {
      color: #FFF;
    }

    p {
      font-size: 1.4rem;
      color: #FFFF;
      line-height: 1.5;
      margin: 0;
      letter-spacing: 0.1rem;
      font-weight: 500;
    }
  }

  @media (max-width: 1200px) {
    .achievements-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      padding: 0 2rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10rem;

    h2 {
      font-size: 3.2rem;
      margin-bottom: 3rem;
    }

    .achievements-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      padding: 0 1rem;
    }

    .achievement-card {
      padding: 2.5rem 1.5rem;

      .card-icon {
        width: 50px;
        height: 50px;
        margin-bottom: 1.5rem;
      }

      .achievement-value {
        font-size: 2.8rem;
      }

      p {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 640px) {
    .achievements-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .achievement-card {
      padding: 2rem;

      .achievement-value {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2.8rem;
    }

    .achievement-card {
      padding: 1.8rem;

      .card-icon {
        width: 45px;
        height: 45px;
        margin-bottom: 1.2rem;
      }

      .achievement-value {
        font-size: 2.2rem;
      }

      p {
        font-size: 1.1rem;
      }
    }
  }
`; 