import React from 'react';

function CartSummaryItem(props) {
  // console.log('props in CartSummaryItem', props);
  const product = props;
  const productPrice = (props.price / 100).toFixed(2);
  if (props.count === 1) {
    return (
      <div>Are you sure you want to delete this item ?</div>
    );
  }

  return (
    <div className="container">
      <div className="row col-12 border bg-light m-3 p-3">
        <div className="col-5 imgStyle">
          <img src={props.image} alt="productImage" />
        </div>
        <div className="col-7 bg-secondary text-white">
          <h5 className="font-weight-bold mt-4">{props.name}</h5>
          <p>${productPrice}</p>
          <p>{props.shortDescription}</p>
          <p>Quantity:</p>
          <div className="d-flex">
            <div><i className="fas fa-plus-square p-2 mt-2" onClick={event => {
              props.addToCart(product);
            }}></i></div>
            <div className="bg-white text-secondary item_count p-2">{props.count}</div>
            <div><i className="fas fa-minus-square p-2 mt-2" onClick={event => {
              props.removeFromCart(product);
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
                  props.removeItemCompletelyFromCart(product);
                }}
              >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartSummaryItem;
