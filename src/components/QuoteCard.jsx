
import './QuoteCard.css'

const QuoteCard = ({quote, handleChangeQuote}) => {





  return (
    <section className="card ">
      <article className="card__container">
        <h1 className="card__title">GALLETAS DE LA FORTUNA</h1>
        <button className="card__btn" onClick={handleChangeQuote}>Probar mi suerte</button>
        <p className="card__phrase">{quote.phrase}</p>
      </article>
        <footer className="card__footer">Fuente: {quote.author} </footer>
    </section>
  )
}
export default QuoteCard  