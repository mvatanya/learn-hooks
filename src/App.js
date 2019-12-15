import React from 'react';
import CounterHooks from './CounterHooks'
import TogglerHooks from './TogglerHooks'
import SimpleFormHooks from './SimpleFormHooks'
import SimpleFormInputHook from './SimpleFormInputHook'
import Clicker from './Clicker'
import SWMovies from './SWMovies'
import './App.css';

function App() {
  return (
    <div className='App'>
      <CounterHooks />  
      <TogglerHooks />
      <SimpleFormHooks />
      <SimpleFormInputHook />
      <Clicker />
      <SWMovies />
    </div>
  );
}

export default App;

/**
 * CounterHooks => basic hooks wiht useState
 * TogglerHooks => to make your own hooks (created your own hooks in hooks folder: useToggle)
 * SimpleFormHooks => basic form using hooks
 * SimpleFormInputHook => to make your your own hooks for form (created your own hooks in hooks folder: useToseFormInputState)
 * Clicker => basic useEffect
 * SWMovies => useEffect calling api (with axios)
 */
