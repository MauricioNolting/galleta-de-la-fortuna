import './App.css'
import quotes from './json/quotes.json'
import getRandomElement from './util/random'
import QuoteCard from './components/QuoteCard'
import { useState } from 'react'






function App() {

  const backgrounds = ["bg1", "bg2", "bg3", "bg4"]

 const [quote, setQuotes] = useState(getRandomElement(quotes))
 const [bg, setBg] = useState(getRandomElement(backgrounds))

 const handleChangeQuote = () => {
    setQuotes(getRandomElement(quotes))
    setBg(getRandomElement(backgrounds))
}




  return (
    
    <main className={`app ${bg}`}>
     <QuoteCard quote={quote} handleChangeQuote={handleChangeQuote}/>
     </main>
    
  )
}

export default App
