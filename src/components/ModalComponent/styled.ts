import styled from "styled-components";


export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${props => props.theme.colors.primary};
    width: 50vw;
    height: 100%;
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
export const Content = styled.div`
    display: flex;
    gap: 6rem;
    height: 60vh;
    margin-bottom: 2rem;

    img {
        width: 30rem;
        height: 46rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h1 {
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 2.8rem;
            margin-bottom: 0.5rem;
        }

        p {
            color: ${props => props.theme.colors.secondary};
            font-weight: 400;
            font-size: 2rem;
            line-height: 2.8rem;
            margin-bottom: 2rem;

        }

        span {
            font-weight: 400;
            font-size: 2.4rem;
            line-height: 2.8rem;
            color: ${props => props.theme.colors.secondary};
        }

        .map-marker {
            margin-bottom: 1rem;
            font-size: 2.4rem;
        }

    }
`

export const Search = styled.input`
    border: none;
    border-radius: 5px;
    margin-top: 2rem;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    outline: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`