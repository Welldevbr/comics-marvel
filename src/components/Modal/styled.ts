import styled from "styled-components";

export const Overlay = styled.div`
    backdrop-filter: blur(15px);
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`
export const ModalContainer = styled.div`
    position: relative;
    display: flex;
    background-color: var(--primary);
    width: 100%;
    max-width: 650px;
    height: 80%;
    padding: 2rem 0.5rem;
    border-radius: 5px;
`
export const ComicInfo = styled.div`

`