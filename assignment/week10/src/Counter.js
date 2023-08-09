import React from 'react';
import { useState, useEffect } from 'react';
import '../src/App.css'

const Counter = ({name}) => {
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log('useEffect 실행!')
    }, [state]);

    return (
        <div class="body">
            <div class="like-btn">
                <div class="name">{name} • </div>
                <div className="num">Like : {state}</div>
                <button onClick={() => setState(state + 1)}></button>
            </div>
        </div>
    );
};

export default Counter;