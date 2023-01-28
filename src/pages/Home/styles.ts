import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 6rem;
  margin-inline: auto;
  max-width: 70%;
  height: 100%;

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

export const Footer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  margin-top: 8rem;
  background: ${props => props.theme.colors.secondary};

  div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 70%;
    margin: 1rem auto;
    font-size: 1.8rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);

    img {
      width: 10rem;
    }

    span, h3, a {
      font-size: 1.8rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;

    }

    span {
      display: flex;
      gap: 0.4rem;
    }
  }
`