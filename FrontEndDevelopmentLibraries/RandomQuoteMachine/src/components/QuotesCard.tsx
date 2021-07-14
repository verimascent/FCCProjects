import React from 'react';

interface Props {
    author: string;
    quote: string;
    callback: React.MouseEventHandler;
}

const QuotesCard: React.FunctionComponent<Props> = ({
    author,
    quote,
    callback
}) => {
    
    return (
    <div>
        <div id="quote-box">
          <div id="text">This is a quote: {quote}</div>
          <div id="author">This is author: {author}</div>
          <button id="new-quote" onClick={callback}>New Quote</button>
        </div>
    </div>
    )}

export default QuotesCard;