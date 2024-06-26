import React, {createContext, useContext, useState} from "react";
const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

const increment = () => {
    setCount(count + 1)
}
const decrement = () => {
    setCount(count - 1)
}

    return (
        <CounterContext.Provider value={ { count, increment, decrement } }>
            {children}
        </CounterContext.Provider>
    );
};

const useCounter = () => {
const context = useContext(CounterContext)
    if(!context) {
        throw new Error('useCounter must work together with CounterProvider')
    }
    return context;
} // where did we get this function from? documentation link?

export { CounterProvider, useCounter };
