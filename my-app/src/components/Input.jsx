import React, { useState } from 'react';

const Input = () => {

    // input에서 입력한 값을 h3 태그에 표시 
    const [inputValue, setInputValue] = useState("");

    const textInput = (e)=>{
        setInputValue(e.target.value);
    }

    return (
        <div className='input'>
            {/* input에서 입력한 값을 h3 태그에 표시 */}
            <h3>InputValue : {inputValue}</h3>
            <input type="text" name="text" value={inputValue} onChange={textInput} />
        </div>
    );
};

export default Input;