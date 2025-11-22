import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding: 8rem 0;
  background: transparent;

  h2 {
    text-align: center;
    font-size: 4.5rem;
    margin-bottom: 2rem;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-subtitle {
    text-align: center;
    font-size: 1.8rem;
    color: var(--gray-text);
    margin-bottom: 6rem;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
  }

  .category-tabs {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 5rem;
    flex-wrap: wrap;

    button {
      padding: 1.2rem 3rem;
      font-size: 1.6rem;
      font-weight: 600;
      background: var(--glass-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--glass-border);
      color: var(--white);
      border-radius: var(--radius-lg);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-glow);
      }

      &.active {
        background: var(--primary-gradient);
        border-color: transparent;
        box-shadow: var(--shadow-glow);
      }
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .skill-card {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    padding: 3rem 2.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--primary-gradient);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
      border-color: var(--primary-purple);

      &::before {
        transform: scaleX(1);
      }

      .skill-icon {
        transform: scale(1.1) rotate(5deg);
      }
    }

    .skill-header {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;

      .skill-icon {
        font-size: 4rem;
        color: var(--primary-purple);
        transition: all 0.3s ease;
        filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));
      }

      .skill-name {
        font-size: 2rem;
        font-weight: 700;
        color: var(--white);
      }
    }

    .skill-details {
      .experience {
        font-size: 1.4rem;
        color: var(--gray-text);
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          color: var(--neon-green);
        }
      }

      .proficiency-bar {
        margin-top: 1.5rem;

        .proficiency-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.8rem;
          font-size: 1.4rem;
          color: var(--gray-text);
        }

        .bar-container {
          width: 100%;
          height: 8px;
          background: var(--dark-border);
          border-radius: 10px;
          overflow: hidden;
          position: relative;

          .bar-fill {
            height: 100%;
            background: var(--success-gradient);
            border-radius: 10px;
            transition: width 1s ease-out;
            position: relative;

            &::after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.3),
                transparent
              );
              animation: shimmer 2s infinite;
            }
          }
        }
      }
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @media (max-width: 960px) {
    padding: 6rem 0;

    h2 {
      font-size: 3.5rem;
    }

    .skills-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
  }

  @media (max-width: 600px) {
    padding: 4rem 0;

    h2 {
      font-size: 3rem;
    }

    .section-subtitle {
      font-size: 1.6rem;
      padding: 0 2rem;
    }

    .category-tabs {
      gap: 1rem;
      padding: 0 2rem;

      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
      }
    }

    .skills-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .skill-card {
      padding: 2.5rem 2rem;

      .skill-header {
        .skill-icon {
          font-size: 3.5rem;
        }

        .skill-name {
          font-size: 1.8rem;
        }
      }
    }
  }
`;
