import { message, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterProducts from '../../components/FilterProducts';
import ListProducts from '../../components/ListProducts';
import Loading from '../../components/Loading';
import Title from '../../components/Title';
import { getProduct } from '../../redux/actions/productAction';
import './styles.scss';

const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 100000000]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (error) {
      return message.error(error);
    }

    dispatch(getProduct('', currentPage, price, category));
  }, [dispatch, currentPage, error, price, category]);

  const paginationChange = (page, pageSize) => {
    setCurrentPage(page);
  };
  return (
    <div className="products">
      <Title title="Miễn phí vận chuyển cho toàn bộ đơn hàng" />
      <FilterProducts setCategory={setCategory} setPrice={setPrice} />
      {loading ? <Loading /> : <ListProducts products={products} />}

      <div className="pagination mt-3 d-flex justify-content-center">
        <Pagination onChange={paginationChange} defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default Products;
