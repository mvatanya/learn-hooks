import React, {useState} from 'react';
import useFormInputState from './hooks/useFormInputState';

export default function SimpleForInputmHooks() {
  const [email, updateEmail, resetEmail] = useFormInputState('')
  const [phone, updatePhone, resetPhone] = useFormInputState('')
  const [showPhone, setShowPhone] = useState(false)
 
  const updatePhoneNumber = () => {
    setShowPhone(true)
  }

  const resetPhoneNumber =() =>{
    setShowPhone(false);
    resetPhone();
  }
  return (
    <div>
      <h1>The email value is {email}</h1>
      <input 
        type='text' 
        value={email} 
        onChange={updateEmail}/>
      <button onClick={resetEmail}>Reset</button>

      <h1>The phone value is {phone}</h1>
      {showPhone ?  <div>Your phone is updated to {phone}</div> : ''}
      <input 
        type='text' 
        value={phone} 
        onChange={updatePhone}/>
      <button onClick={updatePhoneNumber}>Submit</button>
      <button onClick={resetPhoneNumber}>Reset</button>
      
    </div>
  )
}