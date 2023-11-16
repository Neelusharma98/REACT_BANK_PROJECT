import axios from "axios";

export const GetAllBanks = async (pageNumber=0,pageSize=10)=> {
    try {
        let response = await axios.get('http://localhost:8081/bankapp/allbank',{
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


export const createBank = async (bankname,abbrevation,branch,ifscCode)=> {
    console.log(bankname,abbrevation,branch,ifscCode)
    console.log("in bank add service")
    let response = await axios.post('http://localhost:8081/bankapp/addbank',{
        bankname:bankname,
        abbreviation:abbrevation,
        branch:branch,
        ifscCode:ifscCode
        
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

export const deleteBankService = async (bankid)=> {
    let response = await axios.delete('http://localhost:8080/bankapp/banks',{
        params :{
            bankid:bankid
        },
        headers :{
            Authorization: 'Bearer '+localStorage.getItem('authentication')
        }}
    )
    return response
}

export const updateBankService = async (bankid,bankName,branch,abbrevation,ifsc)=> {
    let response = await axios.put('http://localhost:8080/bankapp/banks',{
        
            bankid:bankid,
            bankname:bankName,
            branch:branch,
            abbrevation:abbrevation,
            ifscCode:ifsc,
            active:true
        },{
            params:{},
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('authentication')
            }
        }
    )
    return response
}