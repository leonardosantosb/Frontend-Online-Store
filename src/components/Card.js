import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getProductById } from '../services/api';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      preço: 0,
      productId: 0,
      cart: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
    const { title, price, thumbnail } = product;
    console.log(product);
    this.setState({
      name: title,
      image: thumbnail,
      preço: price,
      productId: id,
    });
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { name, image, preço, productId, cart } = this.state;
    return (
      <div key={ productId }>
        <h1 data-testid="product-detail-name">{ name }</h1>
        <img data-testid="product-detail-image" alt="imagem do produto" src={ image } />
        <h2 data-testid="product-detail-price">{ `R$${preço}` }</h2>
        <h3>{`Quantidade: ${cart.length}`}</h3>
        <Link
          to={ {
            pathname: '/shoppingCart',
            state: {
              title: name,
              thumbnail: image,
              price: preço,
              id: productId,
              quantidade: cart.length,
            },
          } }
        >
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </button>
        </Link>

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
