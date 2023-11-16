import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    async function save (event)  {
      event.preventDefault();
      try{
        await axios.post('http://localhost:8081/bankapp/registeradmin',{
            username:username,
            password:password  
        });
        alert("admin registerd sucessfully");
      }catch(err){
        alert(err)
      }
      console.log('username>>>>:', username);
      console.log('Password:', password);
      
    };
  
    const handleCancel = () => {
      // Implement your cancel logic here
      // This can be used to clear the form or navigate away
      console.log('Registration canceled');
    };



  return (
    <>
    <Container>
        <h1>REGISTRATION PAGE</h1>
      <Form>
        <Form.Group controlId="username">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={save}>
          Submit
        </Button>

        <Button variant="secondary" type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </Container>
    </>
  )
}

export default Register
