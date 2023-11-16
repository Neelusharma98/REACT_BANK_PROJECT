import React, { useEffect, useState } from "react";
//import { useNavigate } from 'react-router-dom';
import { GetAllBanks, deleteBankService } from "../../Service/Bank";
//import './AddBank'
//import { validateUser as validateAdmin } from "../../Service/Login";
//import Navbar from '../../Shared/Navbar/Navbar';
import PageSize from "../../Shared/table/PageSize";
import PaginationApp from "../../Shared/table/PaginationApp";
import { validateAdmin } from "../../Service/Login";
//import Loader from "../../Shared/loader/Loader";
import Table from "../../Shared/table/Table";
//import UpdateModal from "../../Shared/updateModal/UpdateModal";
import { GetAllCustomers } from "../../Service/Customer";



const GetAllCustomer = () => {

  const [pageSize, setPageSize] = useState(4);
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState([]);
  const [totalrecord,setTotalrecord] = useState();
  const [totalpage,setTotalpage]=useState();
  const [isUserValid,setIsUserValid] = useState(false);
  const [isUpdate,setIsUpdate] = useState(false);
  const [checkPage,setCheckPage] = useState("Bank");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bank,setBank] = useState();
  const [isLoading, setIsLoading] = useState(true)

  // const navigate=new useNavigate();

  const showcustomer = async () => {

    try {
      let response = await GetAllCustomers(pageNumber, pageSize);

      console.log("Response Value",response);
      if (response.data) {
      console.log("response=="+response.data);
      setData(response.data);
      setTotalrecord(response.headers['x-total-count'])
      console.log("total records ---> ",totalrecord)
      setTotalpage(Math.ceil(response.headers['x-total-count']/pageSize))
    }
    } catch (error) {
      alert(error)
    }finally {
      setIsLoading(false)
    }
  };

 
  

  

//   const validateUser = async() =>{
//     const authToken = localStorage.getItem('authentication')
//     if(!authToken)
//     {
//       setIsUserValid(false)
//     }
//     console.log("authtoken--->"+authToken)
//     let resp = await validateAdmin(authToken)
//     console.log(resp)

//     if(resp.data.role[0].authority !='ROLE_ADMIN')
//     {
//         setIsUserValid(false)
//     }
//     setIsUserValid(true)
//     return
//  }

 

  useEffect(() => {
    showcustomer()
  } , [totalrecord,pageSize,pageNumber])


 
    return (
      <>

            <div className="pagination">
              <PaginationApp 
                totalpage={totalpage}
                setpage={setPageNumber} 
                pageNumber={pageNumber} 
                getData={showcustomer}
                pageSize={pageSize}>
              </PaginationApp>
          
              
              <PageSize totalrecord={totalrecord} 
                setPageSize={setPageSize}
                setTotalpage={setTotalpage}
                pageSize={pageSize}>
              </PageSize>
             
  
            </div>
            <div className="display-table">
              <h4 align="center">Customer Details</h4>
              <Table data={data} 
            //   deleteFunction={deleteBank} updateFunction={updateBank} checkPage={checkPage}
                >
              </Table>
            </div>
      </>
    );
 
};

export default GetAllCustomer;