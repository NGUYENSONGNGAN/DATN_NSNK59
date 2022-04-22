import { useEffect, useState} from 'react'

import SignIn from '../src/component/login/SignIn'
import Header from '../src/component/header/Header'
import Footer from '../src/component/footer/Footer'

import Login from '../src/component/login/Login'

import {
  Routes,
  Route,
} from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute"

function Admin() {
  return (<h1>
    Đây là trang admin sau khi đã đăng nhập
  </h1>)
}

function HienthiDanhSachSP() {
  return (<h1>
    Danh sach san pham cho user coi
  </h1>)
}


function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
      let username = localStorage.getItem('username');
      let password = localStorage.getItem('password');
    
      if(username == "123" && password == "123"){
        setIsLoggedIn(true);
        console.log("isLoggedInisLoggedInisLoggedIn", isLoggedIn)
      }
  
  },[])

  return (
    <div> 
      <div style={{ marginBottom: "200px" }}>
        <Header/>
      </div>

      {/* render component theo route */}
      <div>
        <Routes>
          <Route path="/" element={<HienthiDanhSachSP />} />
          <Route path="login" element={<Login />} />


          <Route path="admin" element={
            <PrivateRoute isLoggedIn={isLoggedIn} >
              <Admin />
            </PrivateRoute>
          }/>
        </Routes>
      </div>

      <Footer/>
    </div>


  );
}

export default App;
