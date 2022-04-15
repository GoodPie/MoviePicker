import React, { useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import { database } from './firebase';
import './App.css';
import { ref } from '@firebase/database';
import { get, onValue } from 'firebase/database';

interface Movie {
  title: string;
  year: string;
  rating: number;
}


function App() {

  let [isLoading, setIsloading] = useState(true);
  let [firstRun, setIsFirstRun ] = useState(true);
  let [movie, setMovie] = useState({} as Movie);
  let lastNumber = 0;


  const getMovie = () => {
    setIsloading(true);

    let index = (Math.floor(Math.random() * 100));
    while (lastNumber === index) {
      index = (Math.floor(Math.random() * 100));
    }
    
    const movieRef = ref(database, `/${index}`);
    get(movieRef).then((snapshot) => {
      const data = snapshot.val();
      setMovie(data);
      console.log("Loaded movie: ", data);
      setIsloading(false);
      setIsFirstRun(false);
    })
  };

  const renderMovie = () => {

    if (firstRun) {
      return (
        <>

<div className="movie">
          <h1>Choose a movie to watch</h1>
          <div className='movieBtnContainer'>
          <button onClick={getMovie}>Pick a movie</button>
          </div>
        </div>

        </>
      )
    }

    if (isLoading) {
      
      return <PacmanLoader size={32} color={"#FFF"} loading={isLoading} />
    } else {
      return (
        <>
        <div className="movie">
          <h1>{movie.title}</h1>
          <span>{movie.year}</span>


          <div className='movieBtnContainer'>
            <button onClick={getMovie}>Another One</button>
          </div>
        </div>

        </>
      )
    }
  } 


  return (
    <div className="App">

      {renderMovie()}


    </div>
  );
}

export default App;
