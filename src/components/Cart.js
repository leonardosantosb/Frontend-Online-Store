import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// "/shoppingCart"
function Cart() {
  // const { title, thumbnail, price, id, quantidade } = props;
  const title = useLocation().state.name;
  const thumbnail = useLocation().state.image;
  const price = useLocation().state.preço;
  const id = useLocation().state.productId;
  const quantity = useLocation().state.quantidade;
  return (
    <div>

      <h3
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </h3>
      <div key={ id }>
        <img
          src={ `${thumbnail}` }
          alt={ `Imagem de ${title}` }
        />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ `Preço: ${price}` }</p>
        <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${quantity}`}</p>
      </div>
    </div>
  );
}

// Cart.propTypes = {
//   title: PropTypes.string.isRequired,
//   thumbnail: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   id: PropTypes.string.isRequired,
//   quantidade: PropTypes.number.isRequired,
// };

export default Cart;
