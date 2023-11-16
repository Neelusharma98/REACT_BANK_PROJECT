// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import GetAllBank from '../bank/GetAllBank';
// import AddCustomer from '../customer/AddCustomer';
// import GetAllCustomer from '../customer/GetAllCustomer';
// import AddAccount from '../account/AddAccount';
// import GetAllAccount from '../account/GetAllAccount';
// import AddBank from '../bank/AddBank';
// import './AdminDashboard.css';



// const AdminDashboard = () => {
//   return (
//     <Router>
//       <div className="admin-dashboard">
//         <nav className="admin-navbar">
//           <ul>
//             <li><Link to="/add-bank">Add Bank</Link></li>
//             <li><Link to="/view-bank">View Bank</Link></li>
//             <li><Link to="/add-customer">Add Customer</Link></li>
//             <li><Link to="/view-customer">View Customer</Link></li>
//             <li><Link to="/add-account">Add Account</Link></li>
//             <li><Link to="/view-account">View Account</Link></li>
//           </ul>
//         </nav>

//         <div className="admin-content">
//            <Routes>
          
//            <Route path="/admindashboard" element={<AddBank />} />
//             <Route path="/add-bank" element={<AddBank />} />
//             <Route path="/view-bank" element={<GetAllBank />} />
//             <Route path="/add-customer" element={<AddCustomer />} />
//             <Route path="/view-customer" element={<GetAllCustomer />} />
//             <Route path="/add-account" element={<AddAccount />} />
//             <Route path="/view-account" element={<GetAllAccount />} /> 
//           </Routes> 
//           <h1> in admin</h1>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default AdminDashboard;

// // import React from 'react'

// // const AdminDashboard = () => {
// //   return (
// //     <>
// //        <h1> in admin dashboard</h1>
// //     </>
// //   )
// // }

// // export default AdminDashboard

// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// import './AdminDashboard.css';
// import GetAllBank from '../bank/GetAllBank';
// import AddCustomer from '../customer/AddCustomer';
// import GetAllCustomer from '../customer/GetAllCustomer';
// import AddAccount from '../account/AddAccount';
// import GetAllAccount from '../account/GetAllAccount';
// import AddBank from '../bank/AddBank';

// const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard">
//       <nav className="admin-navbar">
//         <ul>
//           <li><Link to="/admindashboard">Admin Home</Link></li>
//           <li><Link to="/admindashboard/add-bank">Add Bank</Link></li>
//           <li><Link to="/admindashboard/view-bank">View Bank</Link></li>
//           <li><Link to="/admindashboard/add-customer">Add Customer</Link></li>
//           <li><Link to="/admindashboard/view-customer">View Customer</Link></li>
//           <li><Link to="/admindashboard/add-account">Add Account</Link></li>
//           <li><Link to="/admindashboard/view-account">View Account</Link></li>
//         </ul>
//       </nav>

//       <div className="admin-content">
//         <Routes>
//           <Route path="/admindashboard" element={<h1>Welcome to Admin Dashboard</h1>} />
//           <Route path="/admindashboard/add-bank" element={<AddBank />} />
//           <Route path="/admindashboard/view-bank" element={<GetAllBank />} />
//           <Route path="/admindashboard/add-customer" element={<AddCustomer />} />
//           <Route path="/admindashboard/view-customer" element={<GetAllCustomer />} />
//           <Route path="/admindashboard/add-account" element={<AddAccount />} />
//           <Route path="/admindashboard/view-account" element={<GetAllAccount />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard">
//       <nav className="admin-navbar">
//         <ul>
//           <li><Link to="/admindashboard">Admin Home</Link></li>
//           <li><Link to="/admindashboard/add-bank">Add Bank</Link></li>
//           <li><Link to="/admindashboard/view-bank">View Bank</Link></li>
//           <li><Link to="/admindashboard/add-customer">Add Customer</Link></li>
//           <li><Link to="/admindashboard/view-customer">View Customer</Link></li>
//           <li><Link to="/admindashboard/add-account">Add Account</Link></li>
//           <li><Link to="/admindashboard/view-account">View Account</Link></li>
//         </ul>
//       </nav>

//       <div className="admin-content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// const AdminDashboard = () => {
//   return (
//     <Routes>
//      <Route path="/admindashboard" element={<h1>Welcome to Admin Dashboard</h1>} />
//      {/* <li><Link to="/admindashboard">Admin Home</Link></li> */}
//      <Route path="/admindashboard/*" element={<h1>Welcome to Admin Dashboard</h1>} />
//       <Route path="/add-bank/*" element={<AddBank />} />
//       <Route path="/view-bank/*" element={<GetAllBank />} />
//       <Route path="/add-customer/*" element={<AddCustomer />} />
//       <Route path="/view-customer/*" element={<GetAllCustomer />} />
//       <Route path="/add-account/*" element={<AddAccount />} />
//       <Route path="/view-account/*" element={<GetAllAccount />} />
//     </Routes>
//   );
// };


// export default AdminDashboard;




import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

import GetAllBank from '../bank/GetAllBank';
import AddCustomer from '../customer/AddCustomer';
import GetAllCustomer from '../customer/GetAllCustomer';
import AddAccount from '../account/AddAccount';
import GetAllAccount from '../account/GetAllAccount';
import AddBank from '../bank/AddBank';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';


const AdminDashboard = () => {
  const navigate = useNavigate();
  // const handleLogout = () => {
  //   // Perform logout actions (clear authentication, etc.)
  //   // For now, let's just navigate to the landing page.
  //   navigate('/');
  // };

  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
        <ul>
          <li><Link to="/">Admin Home</Link></li>
          <li><Link to="add-bank">Add Bank</Link></li>
          <li><Link to="view-bank">View Bank</Link></li>
          <li><Link to="add-customer">Add Customer</Link></li>
          <li><Link to="view-customer">View Customer</Link></li>
          <li><Link to="add-account">Add Account</Link></li>
          <li><Link to="view-account">View Account</Link></li>
          {/* <li><button onClick={handleLogout}>Logout</button></li> */}
        </ul>
      </nav>
      <h1>welcom to admin dashboard</h1>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

const AddBankRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<h1>Welcome to Admin Dashboard</h1>} />
      <Route path="add-bank" element={<AddBank />} />
      <Route path="view-bank" element={<GetAllBank />} />
      <Route path="add-customer" element={<AddCustomer />} />
      <Route path="view-customer" element={<GetAllCustomer />} />
      <Route path="add-account" element={<AddAccount />} />
      <Route path="view-account" element={<GetAllAccount />} />
    </Routes>
  );
};

export { AddBankRoutes, AdminDashboard };