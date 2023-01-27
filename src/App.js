import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from './Component/SignIn';
import OTPpage from './Component/OTPpage';
import Songs from './Component/List/Songs';


function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/otp' element={<OTPpage />} />
        <Route path='/songs' element={<Songs />} />
      </Routes>
    </>
  );
}

export default App;
