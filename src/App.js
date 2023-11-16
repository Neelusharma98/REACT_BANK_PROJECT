// // import logo from './logo.svg';
// // import './App.css';

// // import LandingPage from './component/pages/LandingPage';
// // import AdminDashboard from './component/pages/AdminDashboard';
// // import CustomerDashboard from './component/pages/CustomerDashboard';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/admindashboard" element={<AdminDashboard />} />
// //         <Route path="/customerdashboard" element={<CustomerDashboard />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// // App.js or your main entry point
// // import LandingPage from './component/pages/LandingPage';
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// // import CustomerDashboard from './component/pages/CustomerDashboard';

// // const App = () => {
// //   return (
// //     // <Router>
// //     //   <Routes>
// //     //     {/* <Route path="/admin" element={<AdminDashboard />} /> */}
// //     //     <Route path="/admindashboard" element={<AdminDashboard />} />

// //     //   </Routes>
// //     // </Router>
// //     // <LandingPage/>
// //     <Router>
// //       <Routes>
// //          <Route path="/customerdashboard" element={<CustomerDashboard/>} />
// //       </Routes>

// //     </Router>
// //   );
// //   // <LandingPage/>
// // };

// // export default App;
// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/customerdashboard" element={<CustomerDashboard />} />
// //         {/* <Route path="/admindashboard" element={<AdminDashboard />} /> */}
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LandingPage from './component/pages/LandingPage';
// //import AdminDashboard from './component/pages/AdminDashboard';
// import CustomerDashboard from './component/pages/CustomerDashboard';
// import AdminDashboard from './component/pages/AdminDashboard';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/customerdashboard" element={<CustomerDashboard/>} /> 
//         <Route path="/admindashboard" element={<AdminDashboard/>} /> 
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// App.js
// 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/pages/LandingPage';

import { AdminDashboard } from './component/pages/AdminDashboard';
import AddBank from './component/bank/AddBank';
import CustomerDashboard from './component/pages/CustomerDashboard';
import GetAllbank from './component/bank/GetAllBank';
import AddCustomer from './component/customer/AddCustomer';
import GetAllCustomer from './component/customer/GetAllCustomer';
import AddAccount from './component/account/AddAccount';
import GetAllAccount from './component/account/GetAllAccount';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admindashboard/*" element={<AdminDashboard />} />
        <Route path="/admindashboard/add-bank/*" element={<AddBank />} />
        <Route path="/admindashboard/view-bank/*" element={<GetAllbank/>} />
        <Route path="/admindashboard/add-customer/*" element={<AddCustomer/>} />
        <Route path="/admindashboard/view-customer/*" element={<GetAllCustomer/>} />
        <Route path="/admindashboard/add-account/*" element={<AddAccount/>} />
        <Route path="/admindashboard/view-account/*" element={<GetAllAccount/>} />
        <Route path="/customerdashboard/*" element={<CustomerDashboard />} />
        <Route path="/customerdashboard/passbook/*" element={<passbook />} />
      </Routes>
    </Router>
  );
};

export default App;