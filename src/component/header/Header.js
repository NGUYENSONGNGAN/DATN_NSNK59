import "../header/Header.css";
import 'antd/dist/antd.css';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { BiMap, BiUser, BiShoppingBag } from "react-icons/bi";
import { Menu, Dropdown, Button, Space } from 'antd';
import logo from "../img/logo.svg";

const Header = () => {
    const theloai = [
        {
            id: 1,
            name: "Trang sức",
            /* Loaisanpham:[
                {
                    id:1,
                    tenLoai:''
                    
                }
            ] */
        },
        {
            id: 2,
            name: "Charm và vòng",
        },
        {
            id: 3,
            name: "Bộ sưu tập",
        },
        {
            id: 4,
            name: "Quà tặng ngày lễ",
        },
        {
            id: 5,
            name: "Reflexions ",
        },
        {
            id: 6,
            name: "Khuyễn mãi",
        },
        
    ];

    const menu = (
        <Menu>
             {theloai.map(({ name, id }) => (
                     <Menu.Item key={id}>
                     <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" >
                     {name}
                     </a>
                   </Menu.Item>
                ))}
         
       {/*    <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          </Menu.Item> */}
        </Menu>
      );
    return (
        <div className="header">
            <div className="header_container container">
                <div className="Header_logo">
                    <img src={logo} width="150" height='50' />
                </div>
                <div className="header_action">
                    <div className="action_search">
                        <div className="form_group search-input-wrap">
                            <input type="text" className="form-control" placeholder="Tìm sản phẩm..." />
                            <Button className="btn_search" type="primary" shape="circle" icon={<SearchOutlined />} />
                        </div>
                        <div className="iconRightHeaderContainer">
                            <div className='iconRightHeader icon_mapHeader'>
                                <BiMap className='iconRightHeaderitem'/> </div>
                                <div className='iconRightHeader icon_userHeader'>
                                <BiUser className='iconRightHeaderitem' /> </div>
                                <div className='iconRightHeader icon_shopingbagHeader'>
                                <BiShoppingBag className='iconRightHeaderitem'/> </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-tabs flex container">
                {theloai.map(({ name, id }) => (
                    <Dropdown overlay={menu} placement="bottomLeft" key={id}>
                    <Button> {name}</Button>
                    </Dropdown>
                ))}

            </div>
        </div>
    );
};

export default Header;
