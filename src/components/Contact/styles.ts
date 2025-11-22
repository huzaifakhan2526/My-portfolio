import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    p{
      color: var(--primary-purple);
      font-weight: 500;
      font-size: 1.8rem;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 3rem;
    
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      min-width: 30rem;
      gap: 2rem;
      background: var(--glass-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--glass-border);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: all 0.3s ease;
      box-shadow: var(--shadow-sm);
      
      svg{
        color: var(--primary-purple);
        transition: all 0.3s ease;
      }
      
      a{
        color: var(--white);
        font-weight: 500;
        font-size: 1.6rem;
        transition: all 0.3s ease;
      }
      
      &:hover{
        background: var(--primary-gradient);
        transform: translateY(-5px);
        box-shadow: var(--shadow-glow);
        border-color: transparent;
        
        svg{
          color: #FFF;
        }
        
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
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
