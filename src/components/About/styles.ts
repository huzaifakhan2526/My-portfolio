import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  text-align: center;

  h2 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: var(--green);
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.8rem;
    color: #FFFF;
    margin-bottom: 4rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    font-weight: 500;
    letter-spacing: 0.1rem;
  }

  .content-sections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
    text-align: left;
  }

  .left-section, .right-section {
    h3 {
      font-size: 3rem;
      color: var(--green);
      margin-bottom: 2rem;
      font-weight: 700;
    }

    p {
      font-size: 1.8rem;
      color: #FFFF;
      line-height: 1.7;
      margin-bottom: 2rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
    }

    .responsibilities {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 1.6rem;
        color: #FFFF;
        line-height: 1.6;
        margin-bottom: 1rem;
        padding-left: 2rem;
        position: relative;
        letter-spacing: 0.1rem;
        font-weight: 500;

        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.8rem;
          width: 0.8rem;
          height: 0.8rem;
          background: var(--blue);
          border-radius: 50%;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }

  .expertise-card {
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

  @media (max-width: 1200px) {
    .expertise-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 960px) {
    .content-sections {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }

    .left-section, .right-section {
      h3 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.6rem;
      }

      .responsibilities li {
        font-size: 1.5rem;
      }
    }

    .expertise-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .expertise-card {
      padding: 2rem;

      h4 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 640px) {
    .expertise-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .expertise-card {
      padding: 2rem;
    }

    .left-section, .right-section {
      h3 {
        font-size: 2.2rem;
      }

      p {
        font-size: 1.5rem;
      }

      .responsibilities li {
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1.6rem;
    }

    .left-section, .right-section {
      h3 {
        font-size: 2rem;
      }

      p {
        font-size: 1.4rem;
      }

      .responsibilities li {
        font-size: 1.3rem;
      }
    }
  }
`