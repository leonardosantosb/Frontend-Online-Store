import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import { addCart, getCartProducts } from '../services/addToCart';

class ProductsListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: '',
      productList: [],
      didSearch: false,
      cart: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getCategoryId = this.getCategoryId.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      produto: value,
    });
  }

  async handleClick() {
    const { produto } = this.state;
    const product = await getProductsFromCategoryAndQuery('', produto);
    const productList = product.results;
    this.setState({
      productList,
      didSearch: true,
    });
  }

  async getCategoryId({ target }) {
    const { value } = target;
    const product = await getProductsFromCategoryAndQuery(value, '');
    const productList = product.results;
    this.setState({
      productList,
      didSearch: true,
    });
  }

  addToCart = async (e, productId) => {
    const { productList } = this.state;
    const cartProduct = productList.find((product) => product.id === productId);
    await addCart(cartProduct);
    const prod = await this.readProductCart();
    this.setState({
      cart: prod,
    });
    console.log(this.state);
    console.log(prod);
  };

  readProductCart = async () => {
    const readSavedProducts = await getCartProducts();
    return readSavedProducts.map(({
      id,
    }) => id);
  };

  render() {
    const { produto, productList, didSearch, cart } = this.state;
    console.log(this.state);
    return (
      <div>
        <h3
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingCart"
          relative="path"
        >
          Cart
        </Link>
        <form>
          <input
            type="text"
            data-testid="query-input"
            placeholder="Qual produto você deseja?"
            onChange={ this.handleChange }
            value={ produto }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </form>
        <Categories getCategoryId={ this.getCategoryId } />
        { !didSearch
          ? <p>Nenhum produto foi encontrado</p>
          : productList.map(({ title, price, thumbnail, id, available_quantity }) => (
            <div key={ id }>
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: `/card/${id}`,
                  state: {
                    productId: id,
                  },
                } }
              >
                <img
                  src={ thumbnail }
                  alt="imagem do produto"
                  data-testid="product"
                />
              </Link>
              <p>{ title }</p>
              <p>{`Preço: ${price}`}</p>
              <p>{` Quantidade: ${available_quantity}`}</p>
              <Link
                data-testid="shopping-cart-button"
                to={ {
                  pathname: '/shoppingCart',
                  state: {
                    name: title,
                    image: thumbnail,
                    preço: price,
                    productId: id,
                    quantidade: available_quantity,
                    carrinho: cart,
                  },
                } }
              >
                <button
                  type="button"
                  onClick={ (e) => this.addToCart(e, id) }
                >
                  Adicionar ao carrinho
                </button>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}
ProductsListPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductsListPage;
