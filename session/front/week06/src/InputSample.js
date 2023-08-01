import React, { useRef, useState } from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: "",
        nickname: "",
    });
    const nameInput = useRef(); // useRef 추가

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value, // name과 nickname 구분을 위해 대괄호
        });
    };

    const onReset = () => {
        setInputs({
            name: "",
            nickname: "",
        });
        nameInput.current.focus(); // useRef 추가 (DOM 선택)
    };

    return (
        <div>
             <input name="name" 
             placeholder='이름' 
             onChange={onChange} 
             value={name}
             ref={nameInput}/> {/* useRef 추가 (DOM 선택)*/}
             <input
                name='nickname'
                placeholder='닉네임'
                onChange={onChange}
                value={nickname}
                />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
};

export default InputSample;