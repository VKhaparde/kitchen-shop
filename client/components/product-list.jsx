// Define a stateful`ProductList` component in `client/components/product-list.jsx`
//  that will render a grid of`ProductListItems`.
// Give it an initial state of`products` set to an empty`Array`.
// Define a method in `ProductList` named`getProducts`
//  that retrieves all products by sending a`GET` request to`/api/products`.
import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(error => console.error('Fetch Fail Error :', error));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {
            this.state.products.map(currentVal => {
              return (
                <ProductListItem
                  key = {currentVal.productId}
                  productId = {currentVal.productId}
                  name = {currentVal.name}
                  price={currentVal.price }
                  image = {currentVal.image}
                  shortDescription ={currentVal.shortDescription}
                />
              );
            })

          }

        </div>
      </div>
    );
  }
}

export default ProductList;
