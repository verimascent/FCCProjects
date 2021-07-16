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
        border-radius: 3rem;
    }

    #quote-box {
        color: ${props => props.col[0]};
        align-self: stretch;
        width: auto;
        height: 100%;
        padding: 10vh 10vw 5vh 10vw;
        display: flex;
        flex-direction: column;
        
    }
    #text {
        font-size: 1.5rem;
    }

    #author {
        margin-top: 3vh;
        align-self: flex-end;
        width: fit-content;
        font-size: 0.9rem;
    }

    .button-box {
        height: 3rem;
        display: grid;
        margin-top: 3rem;
        grid-template-columns: 1fr 1fr;
    }

    .button-box .twitter {
        margin-top: 0.5rem;
        font-size: 3rem;
        line-height: 100%;
    }

    .button-box .twitter a {
        text-decoration: none;
        color: white;
    } 

    .button-box button {
        justify-self: self-end;
        padding: 0.75rem 0.75rem;
        width: fit-content;
        background-color: yellow;
        box-shadow: inset 1px 1px 10px #333;
        border-radius: 1rem;
    }
`