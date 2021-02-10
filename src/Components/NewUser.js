
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { addUser } from '../Redux/NewUser/NewUserActions';

const NewUser = ({addUser}) => {
    const [addNewUser, setAddNewUser] = useState({
        email: '',
        password: ''
    })
    const handleInputBlur = e =>{
        const user = {...addNewUser}
        user[e.target.name]= e.target.value;
         setAddNewUser(user)
         
    }
    const handleSubmit = e =>{
        e.preventDefault();
        addUser(addNewUser); 
        setAddNewUser({
            email: '',
            password: ''
        })  
          
    }
    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  name='email' onBlur={handleInputBlur} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' onBlur={handleInputBlur} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="danger" className='ml-3 px-4' type="reset">
                    Reset
                </Button>
                
            </Form>
        </div>
    );
};

export default connect(null, {addUser}) (NewUser);