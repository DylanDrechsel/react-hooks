/* very similar to state in thqat you can store a value in it and it persist through different renders */
/* but it does not cause you to re-render like state does */

import React, { useState, useEffect, useRef } from 'react';

const useRefComponent = () => {
    const [name, setName] = useState('')
    const inputRef = useRef()
    const prevName = useRef('')

    const focus = () => {
        inputRef.current.focus()
    }

    useEffect(() => {
        prevName.current = name
    }, [name])

    return (
        <div>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div> My name is {name} and it used to be {prevName.current} </div>
            <button onClick={focus}> Focus </button>
        </div>
    );
};

export default useRefComponent;

/* const renderCount = useRef(1)
    useEffect(() => {
        renderCount.current = renderCount.current + 1
    }) */
    
{/* <div> I rendered {renderCount.current} times </div> */}