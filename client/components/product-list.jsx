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
      <div className="container-fluid">
        <div className="cooking"><h1 className="text-secondary text-right p-2">&quot;Build your Kitchen&quot;</h1></div>
        <div className="row">
          {
            this.state.products.map(currentVal => {
              return (
                <ProductListItem
                  key={currentVal.productId}
                  productId={currentVal.productId}
                  name={currentVal.name}
                  price={currentVal.price}
                  image={currentVal.image}
                  shortDescription={currentVal.shortDescription}
                  longDescription={currentVal.longDescription}
                  setView={this.props.setView}
                  params={this.props.params}
                  addToCart={this.props.addToCart}
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
