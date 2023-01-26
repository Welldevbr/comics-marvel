import styled from "styled-components";

export const ComicContainer =  styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: color .2s;
  position: relative;
  z-index: 1;

  &::before {
        content: '';
        background: rgba(0,0,0,0.9);
        filter: blur(2rem);
        width:60%;
        height: 10rem;
        padding: 1rem;
        position: absolute;
        bottom: 22%;
        left: 17%;
        z-index: -1;
        
      }
  
  img {
    width: 40rem;
    height: 50rem;
    max-width: 100%;
    margin-top: 0.75rem;
    transition: transform .3s,-webkit-transform .3s;
  }  

  &:hover {
    cursor: pointer;

    img {
      filter: brightness(.6);
      transform: translateY(-1.5rem);
    }

    h2, p{
        color: ${porps => porps.theme.colors.primary};
    }
  }

  @media (mix-width: 768px) {
    img {
      width: 20rem;
      height: 30rem;
    }
  }
`
export const TextComic = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.4rem;
  }
  
  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
  
`