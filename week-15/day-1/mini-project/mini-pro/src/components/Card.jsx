import { useState } from "react";
import quotes from "./Quotes"
import './Card.css'

const Card = () => {
    const [quote, setQuote] = useState('');
    const [color, setColor] = useState("#000000"); 

  
    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setQuote({
        quote: randomQuote.quote,
        author: randomQuote.author
      });
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let newColor = "#";
        for (let i = 0; i < 6; i++) {
          newColor += letters[Math.floor(Math.random() * 16)];
        }
        setColor(newColor); 
      } 

    let bodyJs = document.querySelector('body')
    bodyJs.style.backgroundColor = color
  
    return (
      <>
      <div className="card-box">
        <h2 className="quote-sentence" style={{color: color}}>"{quote.quote}"</h2>
        <h3 className="author-of-quote" style={{color: color}}>-{quote.author}-</h3>
        <button className="button-another-quote" onClick={()=>{
            getRandomQuote();
            getRandomColor();
        }} style={{backgroundColor: color}}>New quote</button>
      </div>
      </>
    );
  };


export default Card