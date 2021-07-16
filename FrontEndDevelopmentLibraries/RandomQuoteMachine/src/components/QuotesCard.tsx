import React from 'react';
import { ComponentWrapper } from './QuotesCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
  
 
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
                        <div className="button-box">
                            <div className="twitter">
                                <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                            <button id="new-quote" onClick={callback}>New Quote</button>
                        </div>
                    </div>
                    
                </div>
            </ComponentWrapper>
        </>
    )}

export default QuotesCard;