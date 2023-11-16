
import axios from 'axios';

export const createTransaction = async (accountNumber,recieverAccount,type,amount)=> {
    console.log(accountNumber,recieverAccount,type,amount)
    console.log("in Transaction add service")
    let response = await axios.post('http://localhost:8081/bankapp/transaction',{
        accountNumber:accountNumber,
        recieverAccount:recieverAccount,
        type:type,
        amount:amount
        
    }
    // ,
    // {
    //     // params:{},
    //     // headers:{
    //     //     Authorization: 'Bearer '+localStorage.getItem('authentication')
    //     // }
    // }
    )
    return response
}