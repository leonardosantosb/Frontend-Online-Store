import React from 'react';
// import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

// class Categories extends React.Component {
//   searchCategories = async () => {
//     const xablau = await getCategories();
//     console.log(xablau);
//     return xablau;
//   };

//   render() {
//     const xablau = getCategories;
//     const values = xablau.map((m) => `${m.name}`);
//     console.log(values);
//     return (<button type="button">
//       {this.searchCategories.map(({ name }) => (name))}
//     </button>
//     );
//   }
// }

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.getCategoryId = this.getCategoryId.bind(this);
  }

  async componentDidMount() {
    const categoria = await getCategories();
    this.setState({
      categories: categoria,
    });
  }

  async getCategoryId({ target }) {
    const { value } = target;
    console.log(value);
    return value;
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={ category.id }
            >
              <button
                type="button"
                data-testid="category"
                value={ category.id }
              >
                { category.name }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Categories.propTypes = {
//   childToParent: PropTypes.func.isRequired,
// };

export default Categories;
