import React, {useState} from 'react'
import {Button} from "@mui/material";

const Counter = (counter) => {

    const {min, max, initial} = counter.data
    const [count, setCount] = useState( initial || 0)

    const increase = () => {
        setCount(count => count + 1);
    };

    const decrease = () => {
        setCount(count => count - 1);
    };

    const reset = () => {
        setCount(initial || 0)
    }

    return (

        <>
            <h2 key={counter.id}>
                Поточний рахунок: {count}
            </h2>
            <Button variant="outlined" onClick={increase} disabled={count === max}>+</Button>
            <Button variant="outlined" onClick={decrease} disabled={count === min}>-</Button>
            <Button variant="outlined" onClick={reset}>Reset</Button>
        </>
    )
}

export default Counter;