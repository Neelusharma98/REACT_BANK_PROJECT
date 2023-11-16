
// import React from 'react';
// import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
// import './LandingPage.css';
// import NewLogin from '../Login/NewLogin';
// import Register from '../Login/Register';

// const LandingPage = () => {
//   return (
//     <Router>
//       <div className="landing-container">
//         <div className="sidebar">
//           <h1>Monobank</h1>
//           <nav>
//             <ul>
//               <li><Link to="/register">Registration</Link></li>
//               <li><Link to="/login">Login</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </nav>
//         </div>
//         <div className="content">
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<NewLogin />} />
//         </Routes>
          
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default LandingPage;


// LandingPage.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './LandingPage.css';

// const LandingPage = () => {
//   return (
//     <div className="landing-container">
//       <div className="sidebar">
//         <h1>Monobank</h1>
//         <nav>
//           <ul>
//             {/* Update links to use relative paths */}
//             <li><Link to="/admindashboard/register">Registration</Link></li>
//             <li><Link to="/admindashboard/login">Login</Link></li>
//             <li><Link to="/admindashboard/contact">Contact</Link></li>
//           </ul>
//         </nav>
//       </div>
//       <div className="content">
//         {/* Content for LandingPage goes here */}
//         <h2>Welcome to Monobank Landing Page</h2>
//         {/* Add other content as needed */}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// LandingPage.js
import React from 'react';
import './LandingPage.css';
import NewLogin from '../Login/NewLogin';
import Register from '../Login/Register';
import { BrowserRouter as Routes,Route ,Link} from 'react-router-dom';

// const LandingPage = ({ navigate }) => {
//   const handleNavigation = (path) => {
//     navigate(`/${path}`);
//   };

//   return (
//     <div className="landing-container">
//       <div className="sidebar">
//         <h1>Monobank</h1>
//         <nav>
//           <ul>
//             {/* Use onClick to handle navigation */}
//             <li onClick={() => handleNavigation('register')}>Register</li>
//             <li onClick={() => handleNavigation('login')}>Login</li>
//             <li onClick={() => handleNavigation('contact')}>Contact</li>
//           </ul>
//         </nav>
//       </div>
//       <div className="content">
//         {/* Routes for Registration and Login */}
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<NewLogin />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="sidebar">
        <h1>Monobank</h1>
        <nav>
          <ul>
            <li><Link to="/admindashboard/register">Register</Link></li>
            <li><Link to="/admindashboard/login">Login</Link></li>
            <li><Link to="/admindashboard/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <h2>Welcome to Monobank </h2>
      </div>
    </div>
  );
};
export default LandingPage;