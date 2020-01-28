import React from 'react';
import DeleteModal from './delete-modal';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCount: null
    };
    this.showDeleteModal = this.showDeleteModal.bind(this);
  }

  showDeleteModal() {
    this.setState({ productCount: 0 });
  }

  render() {
    // console.log('this.props in CartSummaryItem', this.props);
    const product = this.props;
    const productPrice = (product.price / 100).toFixed(2);
    if (this.state.productCount === 0) {
      return (
        <div>
          <DeleteModal removeItemCompletelyFromCart = {this.props.removeItemCompletelyFromCart}/>
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
                <button className="btn btn-danger my-3" data-toggle="modal" data-target="#exampleModal"
                  onClick={event => {
                  }}>Remove</button>
              </div>
            </div>
            <div className="modal fade" tabIndex="-1" id="exampleModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModal"></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  Are you sure you want to remove this item ?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal"
                      onClick={() => {
                        this.props.removeItemCompletelyFromCart(product);
                      }}
                    >Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
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
            <button className="btn btn-danger my-3" data-toggle="modal" data-target="#exampleModal"
              onClick={event => {
              }}>Remove</button>
          </div>
        </div>
        <div className="modal fade" tabIndex="-1" id= "exampleModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModal"></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              Are you sure you want to remove this item ?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal"
                  onClick={() => {
                    this.props.removeItemCompletelyFromCart(product);
                  }}
                >Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CartSummaryItem;
