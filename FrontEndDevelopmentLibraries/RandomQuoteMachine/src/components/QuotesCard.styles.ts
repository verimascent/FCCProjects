import styled from 'styled-components';

interface IComponentWrapper {
    col: string[][];
    fade: boolean;
}

export const ComponentWrapper = styled.div<IComponentWrapper>`
    align-self: center;

    #background {
        background-color: ${props => props.col[0][0]};
        width: 60vw;
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        border-radius: 3rem;
        animation: changeColor 3s ease;
        
    }

    @keyframes changeColor {
        from {
            background-color: ${props => { if (props.col.length == 2) return props.col[1][0];
                                           else return props.col[0][0] }};
        }
        to {
            background-color: ${props => props.col[0][0]};
        }
    }

    #quote-box {
        color: ${props => { if (props.col.length == 2) return props.col[1][1];
                            else return props.col[0][1] }};
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

    #text, #author {
        animation: fadeInOut 1s;
        transition: opacity 1s ease;
    }

    @keyframes fadeInOut {
        from {
            opacity: ${props => {
                if (props.fade){
                    return 1;
                }
                else {
                    return 0;
                }

            }};
        }

        to {
            opacity: ${props => {
                if (props.fade){
                    return 0;
                }
                else {
                    return 1;
                }

            }};
        }
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