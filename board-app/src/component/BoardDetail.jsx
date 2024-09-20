import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const BoardDetail = () => {

    const { id } = useParams();

    // 특정 조건을 만족하는 요소의 index를 찾는 함수 findIndex()
    // boardList.findIndex(b => b.id === Number(id))
    // params는 String 으로 값을 가져옴 ==> 따라서 Number로 형변환
    // 굳이 findIndex를 사용하는 이유 id의 값과 index(boardList의 index)가 맞지 않기 때문

    // const idx = boardList.findIndex(b=> b.id === Number(id));
    // console.log(idx);

    // const board = boardList[idx];
    // console.log(board);

    const [ board, setBoard ] = useState(null);

    const getBoard = async ()=>{
        try{
            const res = await axios(`/view/${id}`);
            //res.data : 데이터가 1개 더라도 배열로 들어옴
            setBoard(res.data[0]);
            console.log(res);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getBoard();
    },[]);

    const onDelete = async () => {
        if(window.confirm('정말 삭제 하시겠습니까?')){
            await axios.get(`/delete/${id}`);
            window.location.href = "/list";
        }
    }

    

    if(board != null){
        return (
            <div className='boardDetail board'>
                <h2>No.{board.id} / Board Detail Page</h2>
                <div>
                    <Link to={`/modify/${board.id}`}><button>Modify</button></Link>
                    <button onClick={onDelete}>Remove</button>
                    <Link to={`/`}><button>List</button></Link>
                </div>
    
                <div className='content'>
                    <div className='title'>{board.title}</div>
                    <div className='writer'>{board.writer} [ {board.reg_date.substring(0, board.reg_date.indexOf("T"))} ]</div>
                    <div className='con'>
                        {board.contents}
                    </div>
    
                </div>
            </div>
        );
    }
};

export default BoardDetail;