import axios from "axios";

export const GetAllAccounts = async (pageNumber=0,pageSize=10)=> {
    try {
        let response = await axios.get('http://localhost:8081/bankapp/getAllAccounts',{
        params:
        {
            pagesize:pageSize,
            pagenumber:pageNumber
        },
        /*headers :{
            Authorization: 'Bearer '+localStorage.getItem('authentication')
        }*/
    })
    return response
    } catch (error) {
        throw error
    }

}



export const createAccount = async (customerId,bankId,balance)=> {
    console.log(customerId,bankId,balance)
    console.log("in account add service")
    let response = await axios.post('http://localhost:8081/bankapp/addAccount',{
        customerId:customerId,
        bankId:bankId,
        balance:balance 
        
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