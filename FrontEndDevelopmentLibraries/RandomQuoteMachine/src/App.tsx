import React, { useState, useEffect } from 'react';
import {fetchQuotes, Quotes} from './API';
import QuotesCard from './components/QuotesCard'

const App: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<Quotes>(new Quotes())

  const generateNewQuote: () => Promise<void> = async() => {
    setLoading(true);
    const newQuote = await fetchQuotes();   
    setQuote(newQuote);
  }

  // initialize the quote card
  useEffect(() => {generateNewQuote()}, [])

  // make the quote change automatically
  useEffect(() => {
    const timeQuote: NodeJS.Timeout = setInterval(() => {
      generateNewQuote();
    }, 10000);

    // avoid that the timer becomes faster and faster, clear the time interval before
    return () => clearInterval(timeQuote)
  });
  return (
    <>
      <div id="background">
        <QuotesCard
          author={quote.author}
          quote={quote.content}
          callback={generateNewQuote} />
      </div>
    </>
  );
}

export default App;
