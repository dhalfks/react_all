import React, { useRef, useState } from 'react';
import { boardList } from '../data/data';
import { Link } from 'react-router-dom';

const BoardRegister = () => {
    const nextId = useRef(8);
    //오늘 날짜 가져오기
    const today = new Date();
    //날짜 포멧 생성
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const [ boardListTmp, setBoardListTmp ] = useState([...boardList]);
    console.log(boardListTmp);

    const [ board, setBoard ] = useState({
        title:'',
        writer:'',
        content:'',
        reg_date: formattedDate
    });

    const { title, writer, content, reg_date } = board;

    const onChange = (e) => {
        const { name, value } = e.target; 
        setBoard({
            ...board,
            [name]:value
        });
    }

    const onCreate = ()=>{
        const b = {
            id : nextId.current,
            title: title,
            writer: writer,
            content: content
        };
        setBoardListTmp(boardListTmp.concat(b));
        setBoard({
            title:'',
            writer:'',
            content:'',
            reg_date: formattedDate
        });
        nextId.current += 1; 
    }

    return (
        <div className='boardRegister board'>
            <h2>Board Register Page</h2>
            <div className='content'>
                <label htmlFor="r">Date : 
                    <input type="text" id='r' name='reg_date' value={reg_date} />
                </label>
                <label htmlFor="t"> Title : 
                    <input type="text" id='t' name='title' value={title} placeholder='Title...' 
                     onChange={onChange}/>
                </label>
                <label htmlFor="w"> Writer : 
                    <input type="text" id='w' name='writer' value={writer} placeholder='Writer...'
                     onChange={onChange} />
                </label>
                <label htmlFor="c"> Content : 
                    <input type="text" id='c' name='content' value={content} placeholder='Content...' 
                     onChange={onChange} />
                </label>
            </div>
            <Link to={'/'}><button onClick={onCreate}>Regisger</button></Link>
        </div>
    );
};

export default BoardRegister;