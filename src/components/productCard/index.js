import PropTypes from 'prop-types';
import "./index.scss";

function ProductCard(props) {
  const { product } = props;

  const { brand, color, name, discount, photo, price } = product;
  const productPhotoUrl = photo[0].url;
  const discountedPrice = price - price * discount;

  return (
    <div className="product-cart-container">
      <div className="img-wrapper">
        <img className="product-img" src={productPhotoUrl}></img>
      </div>
      <div className="product-info-wrapper">
        <div className="product-name">
          <p>{name}</p>
        </div>

        <div className="product-color-brand">
          <p>
            <span>Marka:</span>
            {brand}
          </p>
          <p>
            <span>Renk:</span>
            {color}
          </p>
        </div>
        <div className="product-price">
          <p className="discounted-price">{discountedPrice.toFixed(2)} TL</p>
          <p className="price-discount">
           <span className="price">{price}</span>  <span className="discount">{discount}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};