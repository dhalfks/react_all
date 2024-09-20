import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BoardModify = () => {
    const { id } = useParams();

    // 특정 조건을 만족하는 요소의 index를 찾는 함수 findIndex()
    // boardList.findIndex(b => b.id === Number(id))
    // params는 String 으로 값을 가져옴 ==> 따라서 Number로 형변환
    // 굳이 findIndex를 사용하는 이유 id의 값과 index(boardList의 index)가 맞지 않기 때문

    // const idx = boardList.findIndex(b=> b.id === Number(id));
    // const board = boardList[idx];

    //-- db에서 해당 파일 가져오기 ---------------------
    const [ board, setBoard ] = useState(null);

    const getBoard = async ()=>{
        try {
            const res = await axios.get(`/view/${id}`);
            setBoard(res.data[0]);

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getBoard();
    },[]);


    // 변경코드 짜기

    const onChange = (e)=>{
        const { name, value } = e.target;
        setBoard({
            ...board,
            [name]:value
        });
    }
    
    const onSubmit = async () => {
        try{
            const res = await axios.post(`/update/${id}`, board);
            console.log(res);
            window.location.href = `/detail/${id}`;
        }catch(error){
            console.log(error);
        }
    }

    if(board !== null){
        return (
            <div className='BoardModify board'>
                 <h2>No.{board.id} / Board Modify Page</h2>
                <div>
                    <Link to={`/`}><button>List</button></Link>
                </div>
    
                <div className='content'>
                    <div className='title'><input type="text" name='title' value={board.title} onChange={onChange} /></div>
                    <div className='writer'><input type="text" name='writer' value={board.writer} onChange={onChange} /> [ {board.reg_date.substring(0, board.reg_date.indexOf("T"))} ]</div>
                    <div className='con'>
                        <textarea  className='textarea' type="text" name='contents' value={board.contents} onChange={onChange} />
                    </div>
                </div>
    
                <button onClick={onSubmit}>modify</button>
            </div>
        );
    }
};

export default BoardModify;