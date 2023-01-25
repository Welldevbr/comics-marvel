import styled from "styled-components";


export const ButtonComponent = styled.button`
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  background: ${porps => porps.theme.colors.primary};
  width: 12%;
  padding: 1rem;
  border: none;
  position: relative;

    &::before, &::after{
      content: '';
      background: ${props => props.theme.colors.secondary};
      width: 40%;
      height: 30%;
      transform: rotate(-45deg);
      position: absolute;
    }

    &::before {
      bottom: 22%;
      right: -28%;
    }

    &::after {
      top: 22%;
      left: -29%;
    }
  
`
