
import axios from "axios"
export const validateAdmin = async (token)=>{
    console.log(token)
    let response = await axios.get('http://localhost:8081/bankapp/login',{
        headers:{
            Authorization :'Bearer ' + token
        }
    })

    console.log(response)
    return response
}