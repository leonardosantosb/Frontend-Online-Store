import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      preço: 0,

    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
    const { title, price, thumbnail } = product;
    this.setState({
      name: title,
      image: thumbnail,
      preço: price,
    });
  }

  render() {
    const { name, image, preço } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ name }</h1>
        <img data-testid="product-detail-image" alt="imagem do produto" src={ image } />
        <h2 data-testid="product-detail-price">{ `R$${preço}` }</h2>
        <button type="button">
          <Link data-testid="shopping-cart-button" to="/shoppingCart">Carrinho</Link>
        </button>
      </div>

    );
  }
}

Card.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Card;
