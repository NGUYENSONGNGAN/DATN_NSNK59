import { useEffect, useState } from "react";

import SignIn from "../src/component/login/SignIn";
import Header from "../src/component/header/Header";
import Footer from "../src/component/footer/Footer";

import Login from "../src/component/login/Login";

import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";
import Home from "./component/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {
  return <h1>Đây là trang admin sau khi đã đăng nhập</h1>;
}

function App() {
  return (
    <div>
      <div style={{ marginBottom: "200px" }}>
        <Header />
      </div>

      {/* render component theo route */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route
            path="admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
