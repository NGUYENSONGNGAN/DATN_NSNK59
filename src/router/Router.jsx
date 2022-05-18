import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Register from '../pages/Register';
import PrivateRoute from '../router/PrivateRoute';
import Admin from '../pages/Admin';
import DetailProducts from '../pages/DetailProducts';
import Account from '../pages/Account';
// import Cart from '../pages/Cart';

import { useLocation } from 'react-router';
import Cart from '../pages/Cart';
import { useSelector } from 'react-redux';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
const Router = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {/* {location.pathname !== '/cart' && <Header />} */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        {user && <Route path="/account/*" element={<Account />} />}
        <Route path="/detailProduct/:id" element={<DetailProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
