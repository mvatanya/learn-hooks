/**
 * When we want a side effect (something that happened after 
  a state is updated and the component is rerendered)
  in class component it would look somthing like this
  setState({ count: count+1 }, function()) 
  this callback function will run after count is updated
  but when we use useState we can't do this so to do it we use useEffect

  This useEffect will run everytime the component renders.
  This is replaced all the lifecycle methods.
  We can control this useEffect to not run everytime
  the component renders in
*/

import React, { useState, useEffect } from 'react';

function Clicker(){
  const [count, setCount] = useState(0);
  useEffect( () => {
    document.title = `You clicked ${count} times`
  })

  const divStyle = {
    padding: "20px",
    margin: "20px"
  };

  return (
    <div style={ divStyle }>
      <div>Using useEffect</div>
      <button onClick={ () => setCount(count + 1)}>Click Me {count}</button>
    </div>
  )
}

export default Clicker;