import React, { useState } from 'react';
import {fetchQuotes} from './API';
import QuotesCard from './components/QuotesCard'

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({})

  const startQuote = async() => {
    setLoading(true);

    const newQuote = await fetchQuotes();
    
    setQuote(newQuote);
  }

  return (
    <>
      <div id="background">
        <QuotesCard
          author=""
          quote="" />
      </div>
    </>
  );
}

export default App;
