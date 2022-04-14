import "./Header.css";
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';

import { Button } from 'antd';
const Header = () => {
    const theloai = [
        {
            id: 1,
            name: "sound",
        },
        {
            id: 2,
            name: "mixer",
        },
        {
            id: 3,
            name: "enhancement",
        },
        {
            id: 4,
            name: "eq",
        },
        {
            id: 5,
            name: "mic",
        },
        {
            id: 6,
            name: "lighting",
        },
        {
            id: 7,
            name: "power",
        },
    ];
    return (
        <div className="header">
            <div className="header_container container">
                <div className="Header_logo">
                    <img src=".../img_ui/logo.svg" />
                </div>
                <div className="header_action">
                    <div className="action_search">
                        <div class="form-group search-input-wrap">
                            <input type="text" class="form-control" placeholder="Tìm sản phẩm..." />
                            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                        </div>

                    </div>
                </div>
            </div>

            <div className="nav-tabs flex container">
               
                <div className="nav arrow forward disabled"></div>
                {theloai.map(({ name, id }) => (
                    <a className="nav" href="#" key={id}>
                        {name}
                    </a>
                ))}
                <div className="user">
                    <div className="avatar">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
