import React, { useState } from 'react';

export default function SimpleFormHooks() {
  const [email, setEmail] = useState('')
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <div>
      <h1>The email value is {email}</h1>
      <input 
        type='text' 
        value={email} 
        onChange={handleChange}/>
    </div>
  )

  // we can extract some of these functionality above into it's own custom hooks
  // in a file name useFormState in hooks folder (look at the component call SimpleFormInputHook)

}