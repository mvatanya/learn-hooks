
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState('');

  // to call api in use effect has to have an async function  in function like this
  useEffect( () => {
    async function getData(){
      const response = await axios.get(`https://swapi.co/api/films/${number}/`)
      setMovie(response.data); //to do this it will keep making request
      //over and over because useEffect will happen everytime this component
      //renders and caling setMovie in here is like calling setState inside
      //render function in class component which caused infinite loop
      //to fix this we have to pass a second argument in this useEffect
      //(online 19)
    }
    getData()
  }, [number]) // the seconde argument here takes a form of an array. we can pass
  // in any data of the state that if they change, useEffect should run
  // so in this case we want to run this useEffect when the number (the series of the movie)
  // is changed. In this array you can have more than one value ex if you 
  // also want to run useEffect if, for example you have year state that if
  // it changes, this useEffect will change so you can do by => [number, year] 

  // Also you can have more than one useEffect in this component so that it run 
  // other function once other state changes
  return (
    <div>
      <h1>Pick A Movie</h1>
      <h4>{movie.title}</h4>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
      </select>
    </div>
  )
}

export default SWMovies;