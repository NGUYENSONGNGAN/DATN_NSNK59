import React, { useEffect, useState } from 'react';
import { Input, Button, Avatar, message } from 'antd';
import {
  LockOutlined,
  MailOutlined,
  PlusOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, register } from '../../redux/actions/userAction';
import Loading from '../../components/Loading';

const Register = () => {
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = user;

  const registerDataChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set('name', name);
    myForm.set('email', email);
    myForm.set('password', password);
    myForm.set('avatar', avatar);
    dispatch(register(myForm));
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
                    <h1>????ng k??</h1>
                  </div>
                  <form id="customer_login">
                    <Input
                      size="large"
                      placeholder="Email"
                      name="email"
                      value={email}
                      prefix={<MailOutlined />}
                      onChange={registerDataChange}
                    />
                    <Input
                      className="mt-3"
                      size="large"
                      placeholder="T??n c???a b???n"
                      name="name"
                      value={name}
                      prefix={<UserOutlined />}
                      onChange={registerDataChange}
                    />
                    <Input.Password
                      className="mt-3"
                      size="large"
                      placeholder="M???t kh???u"
                      name="password"
                      value={password}
                      prefix={<LockOutlined />}
                      onChange={registerDataChange}
                    />
                    <div className="d-flex mt-3" id="registerImage">
                      <Avatar src={avatarPreview} size="large" icon={<UserOutlined />} />
                      <input
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="d-flex req_pass justify-content-end">
                      <Link to="/login">????ng nh???p</Link>
                    </div>
                    <Button onClick={registerSubmit} className="mt-3 fw-bold" size="large" block>
                      ????NG K??
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

export default Register;
