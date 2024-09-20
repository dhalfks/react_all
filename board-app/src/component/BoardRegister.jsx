import axios from 'axios';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const BoardRegister = () => {
    const [ board, setBoard ] = useState({
        title:'',
        writer:'',
        contents:''
    });

    const { title, writer, contents } = board;

    const onChange = (e) => {
        const { name, value } = e.target; 
        setBoard({
            ...board,
            [name]:value
        });
    }

    const onReset = () => {
        setBoard({
            ...board,
            title:'',
            writer:'',
            contents:''
        });
    };

    const onCreate = async () =>{
        //board 객체를 서버로 전송
        //board 객체의 내용중 하나라도 null 이면 안됨.
        if(title === ''){
            alert('title is null!!');
            return;
        }
        if(writer === ''){
            alert('writer is null!!!');
            return;
        }
        if(contents === ''){
            alert('contents is null!!!');
            return;
        }
        if(window.confirm('등록하시겠습니까?')){
            try {
                const res = await axios.post('/insert', board);
                console.log(res);
                // if(res.data === 'OK'){
                // }
                // 데이터 전송 후 이동
                window.location.href = "/list";
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className='boardRegister board'>
            <h2>Board Register Page</h2>
            <div className='content'>
                <label htmlFor="t"> Title : 
                    <input type="text" id='t' name='title' value={title} placeholder='Title...' 
                     onChange={onChange}/>
                </label>
                <label htmlFor="w"> Writer : 
                    <input type="text" id='w' name='writer' value={writer} placeholder='Writer...'
                     onChange={onChange} />
                </label>
                <label htmlFor="c"> Content : 
                    <input type="text" id='c' name='contents' value={contents} placeholder='Content...' 
                     onChange={onChange} />
                </label>
            </div>
           <button onClick={onCreate}>Regisger</button>
           <button onClick={onReset}>Init</button>
        </div>
    );
};

export default BoardRegister;