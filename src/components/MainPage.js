// route: "/"
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      fetchResult: [],
      product: '',
      didSearch: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getCategoryId = this.getCategoryId.bind(this);
  }

  async componentDidMount() {
    const categoriesList = await getCategories();
    this.setState({
      categories: categoriesList,
    });
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      product: value,
    });
  }

  async handleClick() {
    const { product } = this.state;
    const fetchQueryItems = await getProductsFromCategoryAndQuery('', product);
    const fetchResult = fetchQueryItems.results;
    this.setState({
      fetchResult,
      didSearch: true,
    });
  }

  async getCategoryId({ target }) {
    const { value } = target;
    const fetchCategoryItems = await getProductsFromCategoryAndQuery(value, '');
    const fetchResult = fetchCategoryItems.results;
    this.setState({
      fetchResult,
      didSearch: true,
    });
  }

  render() {
    const { categories, product, fetchResult, didSearch } = this.state;
    return (
      <div>
        <h3
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link data-testid="shopping-cart-button" to="/cart">
          <button type="button">
            carrinho
          </button>
        </Link>
        <label htmlFor="search-input">
          <input
            id="search-input"
            data-testid="query-input"
            type="text"
            defaultValue={ product }
            onChange={ this.handleChange }
            placeholder="Digite o produto que deseja"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </label>
        <ul>
          {categories.map(({ id, name }) => (
            <li key={ id }>
              <button
                data-testid="category"
                type="button"
                id="button"
                onClick={ this.getCategoryId }
                value={ id }
              >
                { name }
              </button>

            </li>
          ))}
        </ul>
        {didSearch ? fetchResult.map((
          {
            title,
            price,
            thumbnail,
            id },
        ) => (
          <div key={ id }>
            <img
              src={ thumbnail }
              alt="product"
              data-testid="product"
            />
            <p>{ title }</p>
            <p>{`Preço: R$ ${price}`}</p>
          </div>
        )) : <h1>Nenhum produto foi encontrado</h1>}
      </div>
    );
  }
}

export default MainPage;
