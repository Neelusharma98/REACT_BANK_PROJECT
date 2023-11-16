import React from 'react'
import { useState } from 'react';
//import { GetAllBanks } from '../../Service/Bank';
// import { createBank } from '../../Service/Bank';
//import './AddCustomer.css';
import { createCustomer } from '../../Service/Customer';

const AddCustomer = () => {

    const[userName, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[name, setName] = useState("")
    const[surname,setSurname] = useState("")
    const[email,setMail]= useState("")
    const[mobile,setMobile]= useState("")
    const handleMySubmit =  async (e) => {
        e.preventDefault();
        if(userName ==="")
        {
            alert("Please Enter user Name")
        }

        else if(password ==="")
        {
            alert("Please enter password")
        }

        else if( name==="")
        {
            alert("Please Enter customer name")
        }
        else if(surname==="")
        {
            alert("Please Enter customer surname")
        }
        else if(email==="")
        {
            alert("Please Enter email")
        }
        else if(mobile==="")
        {
            alert("Please Enter customers mobile number")
        }
        else{
            console.log("adding customer>>>>")
            let response = await createCustomer(userName,password,name,surname,email,mobile)
            console.log(response)
            if(response.data)
            {
                alert("customer Added Successfully")
            }
        }
    
    }


  return (
    <form>
        <h4 align="center">Add customer</h4>
        <div className="userName">
            <label className="form-label">userName</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" value={userName}
                onChange={(e) => {
                    setUsername(e.target.value)
                }}/>
        </div>
        <div className="password">
            <label className="form-label">password</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}/>
        </div>
        <div className="name">
            <label className="form-label">name</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" value={name}
            onChange={(e) => {
                setName(e.target.value)
            }}/>
        </div>
        <div className="surname">
            <label className="form-label">surname</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" value={surname}
            onChange={(e) => {
                setSurname(e.target.value)
            }}/>
        </div>
        <div className="email">
            <label className="form-label">email</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" value={email}
            onChange={(e) => {
                setMail(e.target.value)
            }}/>
        </div>
        <div className="mobile">
            <label className="form-label">mobile</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" value={mobile}
            onChange={(e) => {
                setMobile(e.target.value)
            }}/>
        </div>

        <br />
        <button type="submit" className="btn btn-primary" onClick={handleMySubmit}>Submit</button>
    </form>
  )
}









export default AddCustomer
