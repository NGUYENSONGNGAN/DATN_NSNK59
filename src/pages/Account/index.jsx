import { AuditOutlined, PhoneOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import Profile from '../../components/Profile';
import UpdatePassword from '../../components/UpdatePassword';
import UpdateProfile from '../../components/UpdateProfile';
import { logout } from '../../redux/actions/userAction';
import './styles.scss';

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    message.success('Đã đăng xuất!');
    navigate('/login');
  };
  return (
    <div className="account">
      <div className="container">
        <div className="account-title">
          <h1>Thông tin địa chỉ</h1>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="account-sidebar">
              <h3 className="account-sidebar-title">TÀI KHOẢN</h3>
              <div className="account-sidebar-content">
                <ul className="list-content">
                  <li>
                    <Link to="/account">Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to="/account/update">Cập nhật thông tin cá nhân</Link>
                  </li>
                  <li>
                    <Link to="/account/update/password">Đổi mật khẩu</Link>
                  </li>
                  <li>
                    <Link to="/account/order">Danh sách đơn hàng</Link>
                  </li>
                  <li>
                    <a href="#" onClick={handleLogout}>
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/update" element={<UpdateProfile />} />
              <Route path="/update/password" element={<UpdatePassword />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
