import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  padding: 4rem 0;
  background: var(--black);
  position: relative;
  overflow: hidden;

  .featured-label {
    text-align: center;
    margin-bottom: 2rem;

    span {
      background: var(--green);
      color: var(--black);
      padding: 0.6rem 1.5rem;
      border-radius: 1.4rem;
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    color: var(--green);
    text-align: center;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.8rem;
    color: #FFFF;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 2rem;
    line-height: 1.6;
    font-weight: 500;
    letter-spacing: 0.1rem;
  }

  .website-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 4rem;
    color: var(--blue);
    font-weight: 600;
    font-size: 1.6rem;

    a {
      color: inherit;
      text-decoration: none;
      transition: all 0.25s;

      &:hover {
        color: var(--green);
        text-decoration: underline;
      }
    }

    svg {
      color: var(--blue);
    }
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .left-column {
    h3 {
      font-size: 3rem;
      font-weight: 700;
      color: var(--green);
      margin-bottom: 2rem;
      line-height: 1.3;
    }

    .description {
      font-size: 1.8rem;
      color: #FFFF;
      line-height: 1.7;
      margin-bottom: 3rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
    }

    .features-list {
      margin-bottom: 3rem;

      .feature-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 1.5rem;
        gap: 1rem;

        .bullet {
          color: var(--green);
          font-size: 2rem;
          font-weight: bold;
          line-height: 1.4;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        span:last-child {
          font-size: 1.6rem;
          color: #FFFF;
          line-height: 1.6;
          letter-spacing: 0.1rem;
          font-weight: 500;
        }
      }
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      background: var(--green);
      color: var(--black);
      padding: 1.4rem 6rem;
      border-radius: 2rem;
      font-size: 1.6rem;
      font-weight: 500;
      text-decoration: none;
      transition: filter 0.25s;

      &:hover {
        filter: brightness(0.8);
      }

      svg {
        transition: transform 0.25s ease;
      }

      &:hover svg {
        transform: translate(2px, -2px);
      }
    }
  }

  .right-column {
    .feature-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      height: fit-content;
    }

    .feature-card {
      background: #2b2b2b;
      padding: 2.5rem;
      border-radius: 1.2rem;
      transition: 0.25s;
      text-align: center;
      color: #FFF;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      .card-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        color: var(--green);

        svg {
          transition: transform 0.25s ease;
        }
      }

      &:hover .card-icon svg {
        transform: scale(1.1);
      }

      h4 {
        font-size: 1.8rem;
        font-weight: 700;
        color: #FFF;
        margin-bottom: 1rem;
        line-height: 1.3;
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
  }

  @media (max-width: 1200px) {
    .content-grid {
      gap: 3rem;
      padding: 0 1.5rem;
    }

    .right-column .feature-cards {
      gap: 1.5rem;
    }

    .feature-card {
      padding: 2rem;
    }
  }

  @media (max-width: 960px) {
    margin-top: 10rem;
    padding: 3rem 0;

    h2 {
      font-size: 3.5rem;
    }

    .subtitle {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
    }

    .content-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
      padding: 0 1rem;
    }

    .left-column {
      h3 {
        font-size: 2.8rem;
      }

      .description {
        font-size: 1.6rem;
      }

      .features-list .feature-item span:last-child {
        font-size: 1.5rem;
      }

      .cta-button {
        padding: 1.3rem 2.5rem;
        font-size: 1.5rem;
      }
    }

    .right-column .feature-cards {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .feature-card {
      padding: 1.8rem;

      h4 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 640px) {
    .right-column .feature-cards {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .feature-card {
      padding: 2rem;
    }

    .left-column {
      h3 {
        font-size: 2.4rem;
      }

      .description {
        font-size: 1.5rem;
      }

      .features-list .feature-item span:last-child {
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1.5rem;
    }

    .website-link {
      font-size: 1.4rem;
    }

    .left-column {
      h3 {
        font-size: 2.2rem;
      }

      .cta-button {
        padding: 1.2rem 2rem;
        font-size: 1.4rem;
      }
    }
  }
`; 