import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export const BodyWrapper = styled.body`

    display: flex;
    background-color: ${props => props.color};
    height: 100vh;
    justify-content: center;
`;

