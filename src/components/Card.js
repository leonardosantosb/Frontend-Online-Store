import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     product: [],
  //   };
  // }

  render() {
    const { name, image, price, showDetail } = this.props;
    return (
      <div data-testid="product-detail-link">
        <h1 data-testid="product-detail-name">{ name }</h1>
        <img data-testid="product-detail-image" alt="imagem do produto" src={ image } />
        <h2 data-testid="product-detail-price">{ price }</h2>
        <button type="button">
          <Link data-testid="shopping-cart-button" to="/shoppingCart">Carrinho</Link>
        </button>
      </div>

    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  showDetail: PropTypes.func.isRequired,
};

export default Card;
