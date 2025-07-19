import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;
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

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
  }

  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-card {
    background: #2b2b2b;
    padding: 2rem;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: #FFF;

    &:hover {
      transform: translateY(-3px);
      background-color: var(--pink);
    }

    .card-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background: rgba(35, 206, 107, 0.1);
      border-radius: 12px;
      color: var(--green);
      flex-shrink: 0;
      transition: all 0.25s;

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

    .contact-info {
      flex: 1;

      a {
        color: var(--blue);
        font-size: 1.6rem;
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        transition: color 0.25s;

        &:hover {
          color: var(--green);
        }

        svg {
          transition: transform 0.25s ease;
        }

        &:hover svg {
          transform: translate(2px, -2px);
        }
      }

      p {
        color: #FFFF;
        font-size: 1.4rem;
        margin: 0;
        letter-spacing: 0.1rem;
        font-weight: 500;
      }
    }
  }

  .right-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .schedule-section {
    background: var(--green);
    padding: 3rem;
    border-radius: 1.2rem;
    text-align: center;
    color: var(--black);

    .schedule-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      color: var(--black);

      svg {
        transition: transform 0.25s ease;
      }
    }

    &:hover .schedule-icon svg {
      transform: scale(1.1);
    }

    h3 {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--black);
    }

    p {
      font-size: 1.6rem;
      margin-bottom: 2rem;
      line-height: 1.6;
      color: var(--black);
      font-weight: 500;
    }

    .schedule-button {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      background: var(--black);
      color: #FFF;
      padding: 1.2rem 2.5rem;
      border-radius: 2rem;
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.25s;

      &:hover {
        background: #333;
        transform: translateY(-2px);
      }

      svg {
        transition: transform 0.25s ease;
      }

      &:hover svg {
        transform: scale(1.1);
      }
    }
  }

  .promise-section {
    background: #2b2b2b;
    padding: 2rem;
    border-radius: 1.2rem;
    text-align: center;

    h4 {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--green);
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.4rem;
      color: #FFFF;
      line-height: 1.6;
      margin: 0;
      letter-spacing: 0.1rem;
      font-weight: 500;
    }
  }

  @media (max-width: 1200px) {
    .contact-content {
      gap: 3rem;
      padding: 0 2rem;
    }
  }

  @media (max-width: 960px) {
    margin-top: 8rem;

    h2 {
      font-size: 3.2rem;
    }

    .subtitle {
      font-size: 1.6rem;
      margin-bottom: 3rem;
    }

    .contact-content {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }

    .contact-card {
      padding: 1.5rem;
      gap: 1rem;

      .card-icon {
        width: 45px;
        height: 45px;
      }

      .contact-info a {
        font-size: 1.4rem;
      }

      .contact-info p {
        font-size: 1.3rem;
      }
    }

    .schedule-section {
      padding: 2.5rem;

      h3 {
        font-size: 2rem;
      }

      p {
        font-size: 1.5rem;
      }

      .schedule-button {
        padding: 1rem 2rem;
        font-size: 1.5rem;
      }
    }

    .promise-section {
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
    .contact-card {
      flex-direction: column;
      text-align: center;
      gap: 1rem;

      .card-icon {
        width: 50px;
        height: 50px;
      }
    }

    .schedule-section {
      padding: 2rem;

      h3 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.4rem;
      }

      .schedule-button {
        padding: 0.8rem 1.5rem;
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2.8rem;
    }

    .subtitle {
      font-size: 1.5rem;
    }

    .contact-card {
      padding: 1.2rem;

      .contact-info a {
        font-size: 1.3rem;
      }

      .contact-info p {
        font-size: 1.2rem;
      }
    }

    .schedule-section {
      padding: 1.5rem;

      h3 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.3rem;
      }

      .schedule-button {
        padding: 0.8rem 1.2rem;
        font-size: 1.3rem;
      }
    }

    .promise-section {
      padding: 1.5rem;

      h4 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }
`
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
