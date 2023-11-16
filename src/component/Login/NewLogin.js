// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Container } from 'react-bootstrap';
// import { validateAdmin } from "../../Service/Login";
// import { useNavigate } from 'react-router-dom';




// const NewLogin = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = new useNavigate();
//     let response
//     async function Log (event)  {
//         event.preventDefault();
//         try{
//           response=await axios.post('http://localhost:8081/bankapp/login',{
//               username:username,
//               password:password  
//           });
//           alert("loggedin sucessfully");
//           console.log("here login detail>>"+ response)
//           if(response.data.roles[0].rolename == "ROLE_ADMIN") {
            
//             navigate(`/admindashboard`)
//         }

//         if(response.data.roles[0].rolename == "ROLE_USER") {
//             alert("Login Successfull")
//             navigate(`/customerdashboard`)
//         }
//         }catch(err){
//           alert(err)
//         }
//         console.log('username>>>>:', username);
//         console.log('Password:', password);
        
//       };
    

//   return (
//     <>
//     <Container>
//         <h1>LOGIN PAGE</h1>
//       <Form>
//         <Form.Group controlId="username">
//           <Form.Label>username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="formPassword">
//           <Form.Label>password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="button" onClick={Log}>
//           Login
//         </Button>

//         {/* <Button variant="primary" type="button" onClick={handleCancel}>
//           Cancel
//         </Button> */}
//       </Form>
//     </Container>
//     </>
//   )
// }

// export default NewLogin


import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NewLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function Log(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/bankapp/login', {
        username: username,
        password: password,
      });

      alert('Logged in successfully');
      console.log('here login detail>>', response);

      if (response.data.roles[0].rolename === 'ROLE_ADMIN') {
        alert('Login Successful');
        navigate('/admindashboard');
      }

      if (response.data.roles[0].rolename === 'ROLE_USER') {
        alert('Login Successful');
        navigate('/customerdashboard');
      }
    } catch (err) {
      alert(err);
    }

    console.log('username>>>>:', username);
    console.log('Password:', password);
  }

  return (
    <>
      <Container>
        <h1>LOGIN PAGE</h1>
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

          <Button variant="primary" type="button" onClick={Log}>
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default NewLogin;
