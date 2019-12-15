import React, { useState } from 'react';

function CounterHooks() {
    /** 
     * useState() is a function which return us an array with two diff pieces, which are
        1. reference to a piece of state itself
        2. a function to update that piece of state
     */
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>The Count is: {count}</h1>
            <button onClick={ ()=> setCount(count+1) }>Add 1</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    )
}

export default CounterHooks;