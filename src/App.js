import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import Picture from './Picture';

function App() {

  let [astroImg, setAstroImg] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ak8r52VMp7qQ8vpGsdc9V4SiSI4hIuFTvNeP4ekb')
      .then(res => {
        setAstroImg(res.data)
      }).catch(err => {
        console.error(err);
      })
  })

  return (
    <div className="App">
      {astroImg && <Picture picUrl={astroImg.hdurl} picTitle={astroImg.title} picDesc={astroImg.explanation}/>}
    </div>
  );
}

export default App;
