import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';
import './styles.scss';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, login } from '../../redux/actions/userAction';
import Loading from '../../components/Loading';

const Login = () => {
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate, dispatch, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="login">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-around">
              <div className="customer-login">
                <div id="login">
                  <div className="login-tit">
                    <h1>Đăng nhập</h1>
                  </div>
                  <form action="" id="customer_login">
                    <Input
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      size="large"
                      placeholder="Email"
                      prefix={<MailOutlined />}
                    />
                    <Input.Password
                      className="mt-3"
                      size="large"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Mật khẩu"
                      prefix={<LockOutlined />}
                    />
                    <div className="d-flex req_pass">
                      <Link to="/password/forgot">Quên mật khẩu?</Link>
                      <span className="fw-lighter">hoặc</span>
                      <Link to="/register">Đăng ký</Link>
                    </div>
                    <Button onClick={loginSubmit} className="mt-3 fw-bold" size="large" block>
                      ĐĂNG NHẬP
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
