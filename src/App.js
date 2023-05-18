
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import Layout from "./component/layout/Layout";
import Profile from './component/profile/Profile';
import ApplyForm from './component/applyform/ApplyForm';
import GetOtp from "./component/getotp/GetOtp";


function App() {
  return (
  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signup/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/get-otp" element={<GetOtp />} />
    <Route path= "/home" element={<Layout />} />    {/* application form */}
    <Route path="/profile" element={<Profile />} />
    <Route path="/form" element={<ApplyForm />} />
    </Routes>
   
    </BrowserRouter>
  
    
  );
}

export default App;
