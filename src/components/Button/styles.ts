import styled from "styled-components";


export const ButtonWraper = styled.button`
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  background: ${porps => porps.theme.colors.primary};
  width: 20%;
  padding: 1rem;
  border: none;
  position: relative;

    &:hover {
      filter: brightness(0.8);
    }

`
