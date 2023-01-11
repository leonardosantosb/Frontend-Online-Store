import React from 'react';
import { Link } from 'react-router-dom';

class ProductsListPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchText: '',
  //     products: [],
  //   };
  //   this.handleSearch = this.handleSearch.bind(this);
  // }
  // handleSearch = (searchText) => {
  // };

  render() {
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
      </div>
    );
  }
}

export default ProductsListPage;
