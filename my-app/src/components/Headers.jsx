import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <div className='headers'>
            <div>Headers.jsx 영역</div>  
            <Link to='/'>Home</Link>
            <Link to='/comp1'>comp1</Link>
            <Link to='/comp2'>comp2</Link>
            <Link to='/comp3'>comp3</Link>

        </div>
    );
};

export default Headers;