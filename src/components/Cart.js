import React from 'react';
import PropTypes from 'prop-types';
import { addCart, removeProduct, getCartProducts } from '../services/addToCart';

class Cart extends React.Component {
  state = {
    cart: [],
  };

  addToCart = async (e, productId) => {
    const { productList } = this.state;
    const cartProduct = productList.find((product) => product.id === productId);
    await addCart(cartProduct);
    const cart = await this.readProductCart();
    this.setState({
      cart,
    });
  };

  readProductCart = async () => {
    const readSavedProducts = await getCartProducts();
    return readSavedProducts.map(({ id }) => id);
  };

  render() {
    const { title, thumbnail, price, id, quantidade } = this.props;
    const { cart } = this.state;
    return (
      <div>
        <h3
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </h3>
        <div
          key={ id }
        >
          <img
            src={ thumbnail }
            alt="Imagem do produto"
          />
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p>{ price }</p>
          <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
          <button
            type="button"
            onClick={ (e) => this.addToCart(e, id) }
          >
            {' '}
            Adicionar ao carrinho

          </button>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
};

export default Cart;
