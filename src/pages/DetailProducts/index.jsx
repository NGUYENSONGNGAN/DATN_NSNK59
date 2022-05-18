import { InputNumber, message } from 'antd';
import React, { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { addItemsToCart } from '../../redux/actions/cartAction';
import { getProductDetails } from '../../redux/actions/productAction';
import { formatPrice } from '../../utils/products';
import './styles.scss';

const DetailProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, loading, error } = useSelector((state) => state.productDetails);

  const [quantity, setQuantity] = useState(1);

  const onChangeAmount = (value) => {
    setQuantity(value);
  };

  const addProduct = () => {
    dispatch(addItemsToCart(id, quantity));
    message.success('Sản phẩm đã được thêm vào giỏ hàng');
  };
  useEffect(() => {
    if (error) {
      return message.error(error);
    }

    dispatch(getProductDetails(id));
  }, [dispatch, error, id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="detailProduct">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="detailProduct-img">
                  {product.images &&
                    product.images.map((img) => (
                      <InnerImageZoom src={img.url} zoomSrc={img.url} key={img._id} />
                    ))}
                </div>
              </div>

              <div className="col-md-4">
                <div className="detailProduct-info">
                  <div className="detailProduct-info-lable">
                    <span></span>
                  </div>

                  <h1 className="detailProduct-info-title">{product.name}</h1>

                  <div className="detailProduct-info-price text-center">
                    <b>{formatPrice(product.price)}</b>
                  </div>

                  <div className="text-center mt-3">
                    <InputNumber
                      min={1}
                      max={product.Stock}
                      defaultValue={1}
                      onChange={onChangeAmount}
                    />
                  </div>

                  <div className="detailProduct-info-action">
                    <button onClick={addProduct} id="addcart">
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="detailProduct-body">
              <div className="detailProduct-content">
                <h3>Thông tin sản phẩm</h3>

                <div className="detailProduct-content-wrap">
                  <p>
                    <b>
                      <u>Thông tin sản phẩm:</u>
                    </b>
                    <br />
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProducts;
