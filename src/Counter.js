import React from 'react';
import {useCounter} from "./counterContext";

const Counter = () => {

    const {count, increment, decrement} = useCounter();

    return (
        <div>

        <h1>My counter with Context API</h1>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    );
};


export default Counter;
