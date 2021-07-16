import styled from 'styled-components';

interface IComponentWrapper {
    col: string[];
}

export const ComponentWrapper = styled.div<IComponentWrapper>`
    align-self: center;

    #background {
        background-color: ${props => props.col[1]};
        width: 60vw;
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        border-radius: 5rem;
    }

    #quote-box {
        color: ${props => props.col[0]};
        align-self: stretch;
        width: auto;
        padding: 10vh 10vw 5vh 10vw;
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
    }

    #author {
        margin-top: 3vh;
        align-self: flex-end;
        width: fit-content;
    }

    .button-box {
        height: 10vh;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 3vw;
    }

    .button-box button {
        align-self: flex-start;
        margin-right: 10vw;
        padding: 1vh 1vw;
        background-color: yellow;
        box-shadow: inset 1px 1px 10px #333;
        border-radius: 3vw;
        padding: 2vw;
    }
`