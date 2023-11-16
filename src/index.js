import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GetAllbank from './component/bank/GetAllBank';
import AddBank from './component/bank/AddBank';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Register from './component/Login/Register';
import NewLogin from './component/Login/NewLogin';
import BankPage from './component/pages/LandingPage';
import GetAllCustomer from './component/customer/GetAllCustomer';
import AddCustomer from './component/customer/AddCustomer';
import AdminDashboard from './component/pages/AdminDashboard';
import GetAllAccount from './component/account/GetAllAccount';
import AddAccount from './component/account/AddAccount'
import AddTransaction from './component/transaction/AddTransaction';
import LandingPage from './component/pages/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   {/* { <GetAllbank/>
   <AddBank/> }
   <Register/> */
   }
   {/* <AddBank/> */}
   {/* <NewLogin/>  */}
      <App/> 
   {/* <GetAllCustomer/> */}
   {/* <AddCustomer/> */}
   {/* <AdminDashboard/>  */}
    {/* <GetAllAccount/>   */}
    {/* <AddAccount/> */}
    {/* <AddTransaction/> */}
    {/* <LandingPage/> */}
    
   
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
