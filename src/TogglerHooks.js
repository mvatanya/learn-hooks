import React, { useState } from 'react';
import useToggle from './hooks/useToggle';

/** 
// In case that you only have to toggle one thing you can just toggle in useState
function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggle = () => {
    setIsHappy(!isHappy)
  }

  return (
    //option1 use arrow function inside this onClick to toggle
    // <h1 onClick={() => setIsHappy(!isHappy)}> {isHappy ? '😊': '😢'}</h1>

    //option2, make seperate function (called toggle for this example) and call it in this onClick
    <h1 onClick={toggle}> {isHappy ? '😊' : '😢'}</h1>
  )
}
*/


//In calse that there're so many thing to toggle, to make different toggle function
//customize to each onClick is redundant, so you can make useToggle (like useState)
//in a different file in hooks folder
// ****create your own hooks in hooks folder****

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
  const [isBanana, toggleIsBanana] = useToggle(true);

  return (
    <div>
      <h1 onClick={toggleIsHappy}> {isHappy ? '😊' : '😢'}</h1>
      <h1 onClick={toggleIsHeartBroken}> {isHeartBroken ? '💔' :'❤️'} </h1>
      <h1 onClick={toggleIsBanana}> {isBanana ? '🍌' :'🍏'} </h1>
    </div>
  )
}
export default Toggler