import React from 'react';
import DeleteModal from './delete-modal';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCount: null,
      isRemovingAll: false
    };
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showDeleteModal() {
    this.setState({ isRemovingAll: true });
  }

  hideModal() {
    this.setState({ isRemovingAll: false });
  }

  render() {
    const product = this.props;
    const productPrice = (product.price / 100).toFixed(2);
    return (
      <div>
        {this.state.isRemovingAll &&
          <DeleteModal removeItemCompletelyFromCart={this.props.removeItemCompletelyFromCart}
            product={this.props} hideModal={this.hideModal} />
        }
        <div className="container">
          <div className="row col-12 border bg-light m-3 p-3">
            <div className="col-5 imgStyle">
              <img src={this.props.image} alt="productImage" />
            </div>
            <div className="col-7 bg-secondary text-white">
              <h5 className="font-weight-bold mt-4">{this.props.name}</h5>
              <p>${productPrice}</p>
              <p>{this.props.shortDescription}</p>
              <p>Quantity:</p>
              <div className="d-flex">
                <div><i className="fas fa-plus-square p-2 mt-2" onClick={event => {
                  this.props.addToCart(product);
                }}></i></div>
                <div className="bg-white text-secondary item_count p-2">{this.props.count}</div>
                <div><i className="fas fa-minus-square p-2 mt-2" onClick={event => {
                  if (this.props.count > 1) {
                    this.props.removeFromCart(product);
                  } else if (this.props.count === 1) {
                    this.showDeleteModal();
                  }
                }}></i></div>
              </div>
              <button className="btn btn-danger my-3" data-toggle="modal"
                onClick={event => {
                  this.showDeleteModal();
                }}>Remove</button>
            </div>

          </div>
        </div>
      </div>
    );

  }
}
export default CartSummaryItem;
