import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  handleImportProps = ({ target }) => {
    const { id, title, price, thumbnail, router } = this.props;
    const { innerText } = target;
    if (innerText === 'Adicionar ao Carrinho') return;
    router.push({
      pathname: `/details/${id}`,
      state: { title, price, thumbnail, id },
    });
  };

  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <div key={ id }>
        <h1>{title}</h1>
        <img
          src={ thumbnail }
          alt={ title }
        />
        <p>{price}</p>
        <button
          type="button"
          onClick={ this.handleImportProps }
        >
          Ver
        </button>
        <button
          type="button"
          data-testid="product-add-to-cart"
          // onClick={ () => updateCart(id) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ProductCard;
