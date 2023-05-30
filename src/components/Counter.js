import React, { useState } from 'react';

function Counter({ fruitName, count, increment, decrement }) {

    return (
        <>
        <div className="counter">
            <h2>{fruitName}</h2>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
        </>
    );
}
export default Counter;
