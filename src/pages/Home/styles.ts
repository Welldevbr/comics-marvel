import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 6rem;
  margin-inline: auto;
  max-width: 70%;
  height: 100vh;

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.8rem;
    text-transform: uppercase;
    position: relative;

    &::before {
      content: '';
      width: 10rem;
      height: 0.25rem;
      background: ${props => props.theme.colors.terciary};
      position: absolute;
      bottom: -20%;
      
    }
  }
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  width: 100%;
  background: ${props => props.theme.colors.secondary};
  padding: 1.5rem 7.5rem;

  p {
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
  }
`