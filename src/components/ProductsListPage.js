import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';

class ProductsListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: '',
      categoryId: '',
      productList: [],
      didSearch: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidUpdate() {
    const { produto, categoryId } = this.state;
    const product = await getProductsFromCategoryAndQuery(categoryId, produto);
    const productList = product.results;
    this.setState({
      productList,
      didSearch: true,
    });
    console.log(product.results);
    console.log(this.state);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      produto: value,
    });
  }

  async handleClick() {
  }

  render() {
    const { produto, productList, didSearch } = this.state;
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
        <Categories />
        { !didSearch
          ? <p>Nenhum produto foi encontrado</p>
          : productList.map(({ title, price, thumbnail, id }) => (
            <div key={ id }>
              <img src={ thumbnail } alt="imagem do produto" data-testid="product" />
              <p data-testid="product">{ title }</p>
              <p data-testid="product">{ price }</p>
            </div>
          ))}
      </div>
    );
  }
}

export default ProductsListPage;
