import React, { useEffect, useMemo } from 'react';
import User from './User';
import { useRef } from 'react';
import CreateUser from './CreateUser';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const UserList = () => {

    const nextId = useRef(6);

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'kim',
            email: 'kim1234@naver.com',
            active: true
        },
        {
            id: 2,
            username: 'lee',
            email: 'lee1123@naver.com',
            active: true
        },
        {
            id: 3,
            username: 'pack',
            email: 'pack1123@naver.com',
            active: false
        },
        {
            id: 4,
            username: 'choi',
            email: 'choi1234@naver.com',
            active: false
        },
        {
            id: 5,
            username: 'hong',
            email: 'user@naver.com',
            active: false
        }
    ]);

    const [ inputs, setInputs ] = useState({
        username:'',
        email:''
    });

    // const username = inputs.username;
    // const email = inputs.email;

    // 구조 분해 할당 : 객체의 구조를 분해하여 변수에 할당하는 방법
    const { username, email } = inputs;

    const onChange= (e) =>{
        const { name, value } = e.target;
        // 변경되지 않은 대상값을 공백처리 => 기존값 유지
        setInputs({
            ...inputs, // 기존 inputs 값을 복사
            [name]:value //현재 변경된 값을 key: value 형태로 set
        })
        console.log(inputs);
    }
    
    const onCreate = ()=>{
        // 값이 추가되면.... 
        // 나중에 여기서 구현.
        // .current : 현재값 
        const user = {
            id: nextId.current,
            username: username,
            email: email
        };

        //현재 users에 user 추가  =>  concat
        setUsers(users.concat(user));

        // 기존 inputs 창 초기화
        setInputs({
            username:'',
            email:''
        })

        nextId.current += 1 ; //ref() : 재 랜더링이 일어나지 않음
        console.log(users);
    }

    const onRemove = (id) => {
        // filter : 배열의 항목을 제거하기 위해서 사용
        // filter는 조건에 맞는 값만 배열로 리턴
        // user.id가 일치하지 않는 원소만 추출하여 새로운 배열로 리턴
        setUsers(users.filter(user => user.id !== id));
    }

    const onToggle = (id) => {
        // map : 배열의 처리를 하여 배열로 리턴
        // forEach : 배열의 처리만 하고 리턴하지 않음
        // user.id 가 파라미터의 id와 일치하면 active의 상태를 반전시켜 줌.
        setUsers(
            users.map(user =>(
                user.id === id ? { ...user, active: !user.active } : user
            ))
        );
    }

    const countActiveUser = (users) =>{
        // user.active 가 true 인 사용자를 세어서 리턴
        console.log("active user count");
        return users.filter(user => user.active).length;
    }

    const count = useMemo(()=> countActiveUser(users), [users]);

    return (
        <div className='userList'>
            {/* 컴포넌트에서 데이터를 하위 컴포넌트에게 전달하는 방법 = props */}
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
            <ListGroup variant="flush">
            {
                users.map(u=>(
                    <ListGroup.Item as="li">
                        <User user={u} key={u.id} onRemove={onRemove} onToggle={onToggle}/>
                    </ListGroup.Item>
                    
                ))
            }
            </ListGroup>
            <hr />

            <div>완료 사용자수 : {count}</div>

        </div>
    );
};

export default UserList;