import styled from "styled-components";

export const ComicContainer =  styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: color .2s;
  
  img {
    width: 40rem;
    height: 48rem;
    max-width: 100%;
    margin-top: 0.75rem;
    position: relative;
    transition: transform .3s,-webkit-transform .3s;

      &::before {
        content: '';
        background: #000;
        max-width:20%;
        height: 10rem;
        padding: 1rem;
        position: absolute;
        bottom: 20%;
        left: 0;
      }
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