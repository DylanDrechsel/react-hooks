import React, { useState, useMemo } from 'react';

const useMemoComponent = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() =>  {
        return slowFunction(number)
    }, [number])

    return (
        <div className='useMemoDiv' /* style={{ backgroundColor: 'blue', width: 'auto', height: '10vh' }} */>
            <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(!dark)}> Change Theme </button>
            <div style={{ backgroundColor: dark ? 'black' : 'white', color: dark ? 'white' : 'black' }}> {doubleNumber} </div>          
        </div>
    );
};

const slowFunction = (num) => {
    console.log('Calling Slow Function')
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2
}

export default useMemoComponent;