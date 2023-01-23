import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 70%;
  height: 100vh;
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  width: 100%;
  background: ${props => props.theme.colors.secondary};
  padding: 0 7.5rem;

  p {
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
  }

  Button {
    position: relative;

    &::before {
      content: '';
      background: ${props => props.theme.colors.secondary};
      width: 40%;
      height: 30%;
      transform: rotate(-45deg);
      position: absolute;
      bottom: 5%;
      right: -28%;
    }

    &::after {
      content: '';
      background: ${props => props.theme.colors.secondary};
      width: 40%;
      height: 30%;
      transform: rotate(-45deg);
      position: absolute;
      top: 5%;
      left: -29%;
    }
  }
`