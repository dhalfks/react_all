import React from 'react';
import { boardList } from '../data/data';
import { Link } from 'react-router-dom';

const BoardList = () => {
    return (
        <div className='boardList board'>
            <h2>Board List Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Writer</th>
                        <th>Reg_date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map(b=>(
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td>
                                    <Link to={`/detail/${b.id}`}>{b.title}</Link>
                                </td>
                                <td>{b.writer}</td>
                                <td>{b.reg_date.substring(0, b.reg_date.indexOf("T"))}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            <Link to={`/register`}><button >글쓰기</button></Link>
        </div>
    );
};

export default BoardList;