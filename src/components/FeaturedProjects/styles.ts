import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
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
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin-top: 3rem;
  }

  .project-card {
    background: #2b2b2b;
    border-radius: 1.2rem;
    padding: 2.5rem;
    transition: 0.25s;
    text-align: left;
    position: relative;
    overflow: hidden;
    color: #FFF;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    .project-icon {
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    h3 {
      font-size: 2.2rem;
      font-weight: 700;
      color: #FFF;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }

    .project-subtitle {
      font-size: 1.4rem;
      color: var(--blue);
      font-weight: 600;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .project-description {
      font-size: 1.6rem;
      color: #FFFF;
      line-height: 1.6;
      margin-bottom: 2rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
    }

    .achievements {
      margin-bottom: 2rem;

      h4 {
        font-size: 1.6rem;
        font-weight: 600;
        color: var(--green);
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          font-size: 1.4rem;
          color: #FFFF;
          line-height: 1.5;
          margin-bottom: 0.8rem;
          padding-left: 1.5rem;
          position: relative;
          letter-spacing: 0.1rem;
          font-weight: 500;

          &:before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--green);
            font-weight: bold;
            font-size: 1.6rem;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;

      span {
        background: var(--green);
        color: var(--black);
        padding: 0.6rem 1.2rem;
        border-radius: 20px;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.3px;
        transition: all 0.25s;

        &:hover {
          background: var(--pink);
          color: #FFF;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10rem;
    
    h2 {
      font-size: 3.2rem;
    }

    .subtitle {
      font-size: 1.6rem;
      margin-bottom: 3rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .project-card {
      padding: 2rem;

      h3 {
        font-size: 2rem;
      }

      .project-description {
        font-size: 1.5rem;
      }

      .achievements ul li {
        font-size: 1.3rem;
      }

      .technologies span {
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
      }
    }
  }

  @media (max-width: 480px) {
    .project-card {
      padding: 1.5rem;

      h3 {
        font-size: 1.8rem;
      }

      .project-subtitle {
        font-size: 1.2rem;
      }

      .project-description {
        font-size: 1.4rem;
      }

      .achievements h4 {
        font-size: 1.4rem;
      }

      .achievements ul li {
        font-size: 1.2rem;
      }
    }
  }
`; 