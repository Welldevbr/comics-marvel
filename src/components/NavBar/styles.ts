import styled from "styled-components";

export const Container = styled.div`
  background: ${ props => props.theme.colors.secondary };
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 6.8rem;

  >img {
    width: 12%;
  }

  span {
    display: flex;
    align-items: center;

    input {
      padding: 0.5rem 2rem;
      border-radius: 10rem;
      border: none;
      outline: none;
      position: relative;
      font-size: 1.6rem;

      &:focus {
        outline: 2px solid ${props => props.theme.colors.primary}
      }
    }

    img {
      width: 2.5rem;
      right: 8%;
      position: absolute;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  svg path {
    transition: all 0.3s ease-in-out;
  }
  
  svg:hover path {
    stroke: ${props => props.theme.colors.primary};
  }

  @media(min-width: 900px) {
    img {
      right: 10%;
    }
  }
`
export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 3.5rem;
`

export const MenuItem = styled.a`
  text-decoration: none;
  color: #fff; 
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1.25rem 0.75rem;
  position: relative;
  transition: all ease-in-out 0.3s;

  &::before {
    content: "";
    background: ${props => props.theme.colors.primary};
    width: 0%;
    height: 2px;
    border-radius: 5rem;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all ease-in-out 0.3s;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    &::before {
      width: 100%;
    }
  }
`