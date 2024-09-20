import React, { useState } from 'react';
import { boardList } from '../data/data';
import { Link, useParams } from 'react-router-dom';

const BoardModify = () => {
    const { id } = useParams();

    // 특정 조건을 만족하는 요소의 index를 찾는 함수 findIndex()
    // boardList.findIndex(b => b.id === Number(id))
    // params는 String 으로 값을 가져옴 ==> 따라서 Number로 형변환
    // 굳이 findIndex를 사용하는 이유 id의 값과 index(boardList의 index)가 맞지 않기 때문

    const idx = boardList.findIndex(b=> b.id === Number(id));
    const board = boardList[idx];

    const [ mod, setMod ] = useState({
        title: board.title,
        content: board.contents
    });

    const onChange = (e)=>{
        const { name, value } = e.target;
        
        setMod({
            ...mod,
            [name]:value
        });
    }
        
    return (
        <div className='BoardModify board'>
             <h2>No.{board.id} / Board Modify Page</h2>
            <div>
                <Link to={`/`}><button>List</button></Link>
            </div>

            <div className='content'>
                <div className='title'><input type="text" name='title' value={mod.title} onChange={onChange} /></div>
                <div className='writer'>{board.writer} [ {board.reg_date.substring(0, board.reg_date.indexOf("T"))} ]</div>
                <div className='con'>
                    <textarea  className='textarea' type="text" name='content' value={mod.content} onChange={onChange} />
                </div>

            </div>

            <button>modify</button>
        </div>
    );
};

export default BoardModify;