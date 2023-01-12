import React from 'react';
import getCategories from '../services/api';

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
    // this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.setState({
      categories: getCategories.name,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={ category.id }>
              <button type="button" data-testid="category">{category.name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

console.log(getCategories());

export default Categories;
