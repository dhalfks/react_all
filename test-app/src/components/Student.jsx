import React from 'react';
import {student, students } from '../data/data';

const Student = () => {

    // const name = "홍길동";
    // const age = "20";
    // const addr = "seoul";


    return (
        <div className='student'>
          <h3>{student.name}({student.age}) : {student.addr}</h3>  
          {
            students.map(s => (
                <h3>{s.name}({s.age}) : {s.addr}</h3>
            ))
            
          }
        </div>
    );
};

export default Student;