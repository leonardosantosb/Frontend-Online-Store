import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [],
    };
  }

  async componentDidMount() {
    const { location } = this.props;
    const { state } = location;
    const { id } = state;
    const details = await getProductById(id);
    this.setState({
      details,
    });
  }

  render() {
    const { history, location } = this.props;
    const { push } = history;
    const { state } = location;
    const { title, thumbnail } = state;
    const { details } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={ () => push('/') }
        >
          voltar
        </button>
        <div key={ id }>
          <img
            src={ `${thumbnail}` }
            alt={ `Imagem de ${title}` }
            data-testid="product-detail-image"
          />
          <p data-testid="product-detail-name">{ details.title }</p>
          <p data-testid="product-detail-price">{ `Preço: ${details.price}` }</p>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.string.isRequired,
  history: PropTypes.bool.isRequired,
  push: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default Details;
