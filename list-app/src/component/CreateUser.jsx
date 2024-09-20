import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const CreateUser = ({ username, email, onChange, onCreate }) => {
    //props = username, email, onChange, onCreate
    // const { username, email, onChange, onCreate } = props;
    return (
        <div className='createUser'>
            <Form>
                <Row className='row' style={{ margin:'20px'}}>
                    <Col>
                    <Form.Control 
                        className='input'
                         name='username' 
                         placeholder='이름' 
                         onChange={onChange} 
                         value={username} />
                    </Col>
                    <Col>
                    <Form.Control 
                        className='input'
                        name='email' 
                        placeholder='이메일' 
                        onChange={onChange} 
                        value={email} />
                    </Col>
                    <Button style={{ width:'100px'}} variant="primary" onClick={onCreate}>create</Button>
                </Row>
                </Form>
            {/* <input 
                type="text" 
                name='username' 
                placeholder='이름' 
                onChange={onChange} 
                value={username} 
            />
            <input 
                type="text" 
                name='email' 
                placeholder='이메일' 
                onChange={onChange} 
                value={email}
            /> */}
            {/* <button onClick={onCreate}>create</button> */}
           
        </div>
    );
};

export default CreateUser;