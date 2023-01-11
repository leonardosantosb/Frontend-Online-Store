import React from 'react';

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
      </div>
    );
  }
}

export default ProductsListPage;
