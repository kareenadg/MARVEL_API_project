import './Quotes.css';

import { useEffect, useState } from 'react';

const bestQuotes = [
  {
    quote: 'I love you 3000.',
    author: 'Tony Stark',
  },
  {
    quote: 'Avengers, assemble!',
    author: 'Captain America',
  },
  {
    quote: "That's my secret, Cap. I'm always angry.",
    author: 'Bruce Banner',
  },
  {
    quote: "Well, I don't judge people on their worst mistakes.",
    author: 'Black Widow',
  },
  {
    quote: 'Bring me Thanos!',
    author: 'Thor',
  },
  {
    quote: 'I am Iron Man',
    author: 'Iron Man',
  },
];

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * bestQuotes.length);
      const myquotes = bestQuotes[index];
      setQuote(myquotes);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {quote && (
        <div className="quotes">
          <h3>"{quote.quote}"</h3>
          <p>-{quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default Quotes;
