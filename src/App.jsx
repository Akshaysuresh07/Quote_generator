
import { useEffect, useState } from 'react'
import './App.css'





function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] =useState('')
  useEffect(() => {
    getqoutes()


  }, [])
  function getqoutes(){
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    fetch(url)
      .then(res => res.json())
 
      .then(data => {
        const quotesData =data.quotes;
        const randomnumber=Math.floor(Math.random()*quotesData.length);
        const newQuotes=quotesData[randomnumber];
        // console.log(newQuotes);
        setQuote(newQuotes.quote);
        setAuthor(newQuotes.author);
    
  })
  .catch(err => console.log(err))
}

  const handleQuote = () => {
    getqoutes()
    

  }


  return (
    <>
      <h1 className='text-center text-danger mt-5 fs-1 text fw-bold '>Quotes Generator</h1>

      <div id='quote-box' className='container  mt-5 d-flex justify-content-center align-items-center rounded'>
        <div className='card text-center p-3 border border-danger'>
          <div id='text' className='card-text'>
            <p className='text-info'>{quote}</p>
          </div>
          <div id='author'  style={{ color: "rgb(209, 151, 27)"}}   className='card-text'>
            <p  className='text-end'>--{author}</p>
          </div>
          <div className='d-flex justify-content-between'>
         
            <button id='new-quote' onClick={handleQuote} className='btn btn-success '>New Quote</button>
          </div>
        </div>
      </div>

 
    </>
  )
}

export default App
