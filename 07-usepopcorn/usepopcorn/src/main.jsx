import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import StarRating from './StarRating.jsx'

function Test(){
  const [movieRating,setMovieRating]=useState(0);
  return(
    <div>
      <StarRating color='blue'maxRating={10} onSetRating={setMovieRating}/>
      <p>The movie was rated {movieRating} star by user</p>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating/>
    <Test/>
  </React.StrictMode>,
)
