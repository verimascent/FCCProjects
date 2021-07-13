import React from 'react';

type Props = {
    author: string;
    quote: string;
}

const QuotesCard: React.FC<Props> = ({
    author,
    quote
}) => {
    return (
    <div>
        <div id="quote-box">
          <div id="text"></div>
          <div id="author"></div>
          <button id="new-quote" />
        </div>
    </div>
    )}

export default QuotesCard;