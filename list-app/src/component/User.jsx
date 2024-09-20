import React from 'react';
import Button from 'react-bootstrap/Button';
import './user.css';

const User = ( { user, onRemove, onToggle } ) => {
    // const user = props.user;

    return (
        <div className='user'>
            <div>
                <b style={{
                    cursor:'pointer',
                    color: user.active ? 'green' : 'black'
                }} 
                onClick={()=> onToggle(user.id)} 
                >
                    {user.username}</b>
                <span className='email'>({user.email})</span> 
                {/* function으로 매개변수를 전달할 경우 */}
                {/* <button onClick={() => onRemove(user.id)}>X</button> */}
                <Button variant="outline-warning" size="sm" onClick={() => onRemove(user.id)}>X</Button>
            </div>
        </div>
    );
};

export default User;