import { useState } from 'react';

export default initialVal => { 
  //this is so that in the component when we call this,
  // we will pass in default value in initialVal (which is an argument for this anonymous function)
  const [value, setValue] = useState(initialVal);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('')
  };
  return [value, handleChange, reset];
};
