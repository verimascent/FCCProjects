import React from 'react';
import { ComponentWrapper } from './QuotesCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
  
 
interface Props {
    author: string;
    quote: string;
    callback: React.MouseEventHandler;
    colors: string[];
}

const QuotesCard: React.FunctionComponent<Props> = ({
    author,
    quote,
    callback,
    colors
}) => {
    
    return (
        <>
            <ComponentWrapper col={colors}>
                <div id="background">
                    <div id="quote-box">
                        <div id="text">{quote}</div>
                        <div id="author">- {author}</div>
                    </div>
                    <div className="button-box">
                    <FontAwesomeIcon icon={faFacebook} />
                        <button id="new-quote" onClick={callback}>New Quote</button>
                    </div>
                </div>
            </ComponentWrapper>
        </>
    )}

export default QuotesCard;