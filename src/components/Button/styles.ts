import styled from "styled-components";


export const ButtonComponent = styled.button`
  
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  width: 12%;
  padding: 1.2rem;

  background: ${porps => porps.theme.colors.primary};
  color: #fff;

  font-size: 1.6rem;
  font-weight: 500;
  
`
