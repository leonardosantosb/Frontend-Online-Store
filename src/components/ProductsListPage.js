import React, { useState } from 'react';
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
    this.childToParent = this.childToParent.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      produto: value,
    });
  }

  async handleClick() {
    const { produto, categoryId } = this.state;
    const product = await getProductsFromCategoryAndQuery(categoryId, produto);
    if (produto.length === 0) {
      this.setState({
        didSearch: false,
      });
    }
    this.setState({
      productList: product.results,
      didSearch: true,
    });
    console.log(this.state);
  }

  childToParent = (childdata) => {
    const [setData] = useState('');
    setData(childdata);
  };

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
        <Categories childToParent={ childToParent } />
        { !didSearch
          ? <p>Nenhum produto foi encontrado</p>
          : productList.filter((product) => (
            product.title.toLowerCase().includes(produto.toLowerCase())
          ))
            .map(({ title, price, thumbnail, id }) => (
              <div key={ id }>
                <img src={ thumbnail } alt="imagem do produto" />
                <p>{ title }</p>
                <p>{ price }</p>
              </div>
            ))}
      </div>
    );
  }
}

export default ProductsListPage;
