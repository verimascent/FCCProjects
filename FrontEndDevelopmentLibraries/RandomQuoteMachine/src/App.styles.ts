import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

interface IColors {
    colorBody: string[][];
}

export const BodyWrapper = styled.div<IColors>`

    #body-wrapper { display: flex;
    animation: changeColor 3s ease;
    height: 100vh;
    justify-content: center;
    background-color: ${props => props.colorBody[0][0] };
    }

    @keyframes changeColor {
        from { background-color: ${props => { if (props.colorBody.length === 2) return props.colorBody[1][0];
                                   else return props.colorBody[0][0] }};
        }
        to {
            background-color: ${props => props.colorBody[0][0] }};
        }
    
`;

