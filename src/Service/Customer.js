import axios from "axios";

export const GetAllCustomers = async (pageNumber=0,pageSize=10)=> {
    try {
        let response = await axios.get('http://localhost:8081/bankapp/getAllCustomer',{
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

export const createCustomer = async (userName,password,name,surname,email,mobile)=> {
    console.log(userName,password,name,surname,email,mobile)
    console.log("in customer add service")
    let response = await axios.post('http://localhost:8081/bankapp/addCustomer',{
        userName:userName,
        password:password,
        name:name,
        surname:surname,
        email:email,
        mobile: mobile
    }
    )
    return response
}      
        
    