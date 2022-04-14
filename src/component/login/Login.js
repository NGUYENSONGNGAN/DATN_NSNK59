import React, { useState } from 'react'
import './login.css'
import 'antd/dist/antd.css';

import { Button } from 'antd';
const Login = () => {

    const [taikhoan, setTaiKhoan] = useState("")
    const [matkhau, setMatKhau] = useState("")
    

  return (
    <div>
        <div className="container_login">
            <h1>Login</h1>
            <input type="text" className="UserName" onChange={(e) => setTaiKhoan(e.target.value)}/>
            <input type='password' className="password" onChange={(e) => setMatKhau(e.target.value)}/>
            <Button  onClick={()=> console.log(taikhoan,matkhau)} type="primary">Primary Button</Button>
        </div>
    </div>
  )
}

export default Login