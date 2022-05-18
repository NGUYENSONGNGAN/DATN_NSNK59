import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { allProducts } from '../../assets/data/products';
import { getProduct } from '../../redux/actions/productAction';
import ItemProduct from '../ItemProduct';
import './styles.scss';

const ListProductsHome = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      return message.error(error);
    }

    dispatch(getProduct());
  }, [dispatch, error]);

  var settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="list-products container">
      <h2 className="my-3">XU HƯỚNG</h2>
      <Slider {...settings}>
        {products && products.map((item) => <ItemProduct item={item} key={item.name} />)}
      </Slider>
    </div>
  );
};

export default ListProductsHome;
