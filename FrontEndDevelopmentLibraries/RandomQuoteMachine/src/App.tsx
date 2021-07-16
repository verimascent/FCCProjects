import React, { useState, useEffect } from 'react';
import {fetchQuotes, Quotes} from './API';
import { GlobalStyle, BodyWrapper } from './App.styles';
import QuotesCard from './components/QuotesCard';

const App: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<Quotes>(new Quotes())

  const generateNewQuote: () => Promise<void> = async() => {
    setLoading(true);
    const newQuote = await fetchQuotes();   
    setQuote(newQuote);
  }

  const generateNewColor: () => string[] = () => {
    let a: number = Math.floor(Math.random() * 256);
    let b: number = Math.floor(Math.random() * 256);
    let c: number = Math.floor(Math.random() * 256);
    let color: string = `rgba(${a}, ${b}, ${c}, 1)`;
    let colorOther: string = `rgba(${255-a}, ${255-b}, ${255-c}, 1)`;
    let newColor: string[] = [color, colorOther];
    return newColor;
  }

  const newColor: string[] = generateNewColor();

  // initialize the quote card
  useEffect(() => {generateNewQuote()}, [])

  // make the quote change automatically
  // useEffect(() => {
  //   const timeQuote: NodeJS.Timeout = setInterval(() => {
  //     generateNewQuote();
  //   }, 100000);

  //   // avoid that the timer becomes faster and faster, clear the time interval before
  //   return () => clearInterval(timeQuote)
  // });
  return (
    <>
      <GlobalStyle /> 
        <BodyWrapper color={newColor[0]}>
          <QuotesCard
            author={quote.author}
            quote={quote.content}
            callback={generateNewQuote} 
            colors = {newColor} />
        </BodyWrapper>

    </>
  );
}

export default App;
