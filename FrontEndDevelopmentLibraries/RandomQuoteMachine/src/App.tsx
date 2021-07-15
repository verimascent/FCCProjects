import React, { useState, useEffect } from 'react';
import {fetchQuotes, Quotes} from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import QuotesCard from './components/QuotesCard';

const App: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<Quotes>(new Quotes())

  const generateNewQuote: () => Promise<void> = async() => {
    setLoading(true);
    const newQuote = await fetchQuotes();   
    setQuote(newQuote);
  }

  const generateNewColor = () => {
    let a: number = Math.floor(Math.random() * 256);
    let b: number = Math.floor(Math.random() * 256);
    let c: number = Math.floor(Math.random() * 256);
    let newColor: string = `rgba(${a}, ${b}, ${c}, 1)`;
    return newColor;
  }

  const newColor = generateNewColor();

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
      <GlobalStyle /> 
        <Wrapper color={newColor}>
          <QuotesCard
            author={quote.author}
            quote={quote.content}
            callback={generateNewQuote} 
            />
        </Wrapper>

    </>
  );
}

export default App;
