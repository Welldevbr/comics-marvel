import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    color: ${props => props.theme.colors.primary};
    width: 70vw;
    height: 70vh;
    padding: 2rem;
    border-radius: 5px;

    svg {
        width: 4rem;
        cursor: pointer;

        path {
            transition: all 0.3s ease-in-out;
        }

        &:hover path {
            stroke: ${props => props.theme.colors.primary};
        }

    }
`
export const ComicInfo = styled.div`

`