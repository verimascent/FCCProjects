import React, { useState, useEffect } from 'react';
import {fetchQuotes, Quotes} from './API';
import { GlobalStyle, BodyWrapper } from './App.styles';
import QuotesCard from './components/QuotesCard';

const App: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [flip, setFlip] = useState(true);
  const [quote, setQuote] = useState<Quotes>(new Quotes())
  const [colors, setColors] = useState<Array<Array<string>>>([[]]);
  const [isFadeOut, setIsFadeOut] = useState(false);

  const generateNewQuote: () => Promise<void> = async() => {
    setLoading(true);
    setFlip(!flip);
    const newQuote = await fetchQuotes();   
    setQuote(newQuote);
    setLoading(false);
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

  // const newColor: string[] = generateNewColor();

  
  // initialize the quote card
  
  useEffect(() => {
    // generateNewColor();
    // generateNewQuote();
    console.log("colors: " + colors);
    setColors(prev => {
      console.log("prev: " + prev);
      const colorGenerate: string[] = generateNewColor();
      const myColors: Array<Array<string>> = [];
      myColors.push(colorGenerate);
      console.log("myColors: " + myColors);
      const myPrev = [...prev];
      const newColors: string[][] = myColors.concat(myPrev);
      if (newColors.length > 2){
        newColors.pop();
      }
      console.log("myColorsConcat: " + newColors);
      
      
      return newColors;
    });
    console.log("CLORS" +colors)
  }
  , [flip]);

  useEffect(() => {
    // generateNewColor();
    generateNewQuote();
    // console.log(colors);
  }
  , []);

  
  // useEffect(() => {
  //   generateNewQuote();
  //   generateNewColor();
  // }
    
  // , [flip]);

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
        <BodyWrapper colorBody={colors}>
          <div id="body-warpper">
          <QuotesCard
            author={quote.author}
            quote={quote.content}
            callback={generateNewQuote} 
            colors = {colors}
            isLoading = {loading}
            fade = {isFadeOut} />
          </div>
        </BodyWrapper>

    </>
  );
}

export default App;
