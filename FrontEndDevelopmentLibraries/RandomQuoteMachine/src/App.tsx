import React, { useState, useEffect } from 'react';
import {fetchQuotes, Quotes} from './API';
import { GlobalStyle, BodyWrapper } from './App.styles';
import QuotesCard from './components/QuotesCard';

const App: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [flip, setFlip] = useState(true);
  const [quote, setQuote] = useState<Quotes>(new Quotes())
  const [colors, setColors] = useState<string[]>([]);

  const generateNewQuote: () => Promise<void> = async() => {
    setLoading(true);
    setFlip(!flip);
    const newQuote = await fetchQuotes();   
    setQuote(newQuote);
    setLoading(false);
  }

  const generateNewColor: () => void = () => {
    let a: number = Math.floor(Math.random() * 256);
    let b: number = Math.floor(Math.random() * 256);
    let c: number = Math.floor(Math.random() * 256);
    let color: string = `rgba(${a}, ${b}, ${c}, 1)`;
    let colorOther: string = `rgba(${255-a}, ${255-b}, ${255-c}, 1)`;
    let newColor: string[] = [color, colorOther];

    setColors(newColor);
  }

  // const newColor: string[] = generateNewColor();

  // initialize the quote card
  useEffect(() => {generateNewQuote()}, []);
  useEffect(() => generateNewColor(), [flip]);

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
        <BodyWrapper color={colors[0]}>
          <QuotesCard
            author={quote.author}
            quote={quote.content}
            callback={generateNewQuote} 
            colors = {colors}
            isLoading = {loading} />
        </BodyWrapper>

    </>
  );
}

export default App;
