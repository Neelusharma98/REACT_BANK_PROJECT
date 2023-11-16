import React, { useState } from 'react';
//import { GetAllBanks } from '../../Service/Bank';
import { createAccount } from '../../Service/Account';
import './AddAccount.css'

const AddAccount = () => {
    
    const[customerId, setCustomerId] = useState("")
    const[bankId, setBankId] = useState("")
    const[balance, setBalance] = useState("")
    

    const handleMySubmit =  async (e) => {
        e.preventDefault();
        if(customerId ==="")
        {
            alert("Please Enter customerid")
        }

        else if(bankId ==="")
        {
            alert("Please Enter Bankid")
        }

        else if(balance ==="")
        {
            alert("Please Enter balance")
        }
        else{
            console.log("adding account>>>>")
            let response = await createAccount(customerId,bankId,balance)
            console.log(response)
            if(response.data)
            {
                alert("Account Added Successfully")
            }
        }
    
    }


  return (
    <form>
        <h4 align="center">Add Account</h4>
        <div className="customerId">
            <label className="form-label">customerId</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" value={customerId}
                onChange={(e) => {
                    setCustomerId(e.target.value)
                }}/>
        </div>
        <div className="bankId">
            <label className="form-label">bankId</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" value={bankId}
            onChange={(e) => {
                setBankId(e.target.value)
            }}/>
        </div>
        <div className="balance">
            <label className="form-label">balance</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" value={balance}
            onChange={(e) => {
                setBalance(e.target.value)
            }}/>
        </div>
        

        <br />
        <button type="submit" className="btn btn-primary" onClick={handleMySubmit}>Submit</button>
    </form>
  )
}

export default AddAccount 