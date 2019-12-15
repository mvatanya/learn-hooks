import { useState } from 'react';

function useToggle(initialVal = false) { //set false as defaule
  const [state, setState] = useState(initialVal);

  const toggleState = () => {
    setState(!state)
  }
  return  [state, toggleState];
} 

export default useToggle