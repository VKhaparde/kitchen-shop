// Define a stateful`ProductDetails` component in `client/components/product-details.jsx`
//  with an initial state that includes a`product` set to`null` and an initial render
//  method that returns`null`.
// Add a`componentDidMount` method to`ProductDetails` that retrieves the details of a
// specific product by`productId` from the server with
//  a`GET` request._e.g._`"/api/products?productId=1"`

import React from 'react';
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails(this.props.params.productId);
  }

  getProductDetails(id) {
    fetch(`/api/products?productId=${id}`)
      .then(response => response.json())
      .then(data => this.setState({ product: data }))
      .catch(error => console.error('Fetch Fail Error : ', error));

  }

  render() {
    const product = this.state.product;
    if (product === null) {
      return null;
    }
    if (product.productId) {
      return (
        <div>
          <div className="back-to-catalog" onClick = {
            () => {
              this.props.setView('catalog', {});
            }}>
          Back to catalog</div>
          <div className="container">
            <div className="product">
              <div className="image-details">
                <img src={product.image} alt="product-image"/>
              </div>
              <div className="product-details">
                <p>{product.name}</p>
                <p>${((product.price) / 100).toFixed(2)}</p>
                <p>{product.shortDescription}</p>
              </div>
            </div>
            <div className="description">{product.longDescription}</div>
          </div>
        </div>
      );
    }
  }
}
export default ProductDetails;
