import React from 'react';
import './styles.scss';
import { SearchOutlined } from '@ant-design/icons';
import { BiMap, BiUser, BiShoppingBag } from 'react-icons/bi';
import { Badge, Button } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);

  const mainNav = [
    {
      display: 'Trang chủ',
      path: '/',
    },
    {
      display: 'Sản phẩm',
      path: '/products',
    },
    {
      display: 'Giới thiệu',
      path: '/accessories',
    },
    {
      display: 'Liên hệ',
      path: '/contact',
    },
  ];
  return (
    <div className="header">
      <div className="header_container container">
        <Link to="/" className="Header_logo">
          <img src={logo} width="150" height="50" alt="logo" />
        </Link>
        <div className="header_action">
          <div className="action_search">
            <div className="form_group search-input-wrap">
              <input type="text" className="form-control" placeholder="Tìm sản phẩm..." />
              <Button
                className="btn_search"
                type="primary"
                shape="circle"
                icon={<SearchOutlined />}
              />
            </div>
            <div className="iconRightHeaderContainer">
              <div className="iconRightHeader icon_mapHeader">
                <BiMap className="iconRightHeaderitem" />
              </div>
              <Link
                to={`${isAuthenticated ? 'account' : 'login'}`}
                className="iconRightHeader icon_userHeader"
              >
                <BiUser className="iconRightHeaderitem" />
              </Link>
              <Link to="/cart" className="iconRightHeader icon_shopingbagHeader">
                <Badge count={cartItems.length}>
                  <BiShoppingBag className="iconRightHeaderitem" />
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex list-menu container">
        {mainNav.map((item, index) => (
          <Link to={item.path} key={index} className="menu-item">
            {item.display}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
