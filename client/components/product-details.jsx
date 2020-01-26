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
    // console.log('props in product details', this.props);
    const product = this.state.product;
    if (product === null) {
      return null;
    }
    if (product.productId) {
      return (
        <div>
          <div className="back-to-catalog btn btn-link" onClick={
            () => {
              this.props.setView('catalog', {});
            }}>
            Back to catalog</div>
          <div className="container">
            <div className="product">
              <div className="image-details">
                <img src={product.image} alt="product-image" />
              </div>
              <div className="product-details m-2">
                <h4 className="font-weight-bold">{product.name}</h4>
                <p>${((product.price) / 100).toFixed(2)}</p>
                <p>{product.shortDescription}</p>
                <div className="row">
                  <button className="btn btn-primary m-2" data-toggle="modal" data-target="#ModalCenter"
                    onClick={event => {
                      this.props.addToCart(product);
                    }}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="description">{product.longDescription}</div>
          </div>
          <div className="modal fade" id="ModalCenter" tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">New Item Added</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  You have added {product.name} to your cart.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal"
                    onClick={
                      () => {
                        this.props.setView('catalog', {});
                      }}>Keep Shopping</button>
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                    this.props.setView('cart', {});
                  }}>View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default ProductDetails;
