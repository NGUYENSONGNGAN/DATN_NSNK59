import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { dataProducts } from './data';
import './styles.scss';

const ListProductsHome = () => {
  var settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="list-products">
      <h2 className="my-3">XU HƯỚNG</h2>
      <Slider {...settings}>
        {dataProducts.map((val) => (
          <Link to="/" className="item-slider" key={val.id}>
            <div className="item-slider-img">
              <img src={val.img} alt="Mom Daisy Heart Charm" />
            </div>
            <div className="item-slider-content">
              <span className="new-product-loop-label"></span>
              <span className="item-slider-content-tit">{val.name}</span>
              <span className="item-slider-content-price">{val.price}</span>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ListProductsHome;
