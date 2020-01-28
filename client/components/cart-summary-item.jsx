import React from 'react';
// import DeleteModal from './delete-modal';

function CartSummaryItem(props) {
  // console.log('props in CartSummaryItem', props);
  const product = props;
  const productPrice = (props.price / 100).toFixed(2);
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
              // console.log('product added', props);
            }}></i></div>
            <div className="bg-white text-secondary item_count p-2">{props.count}</div>
            <div><i className="fas fa-minus-square p-2 mt-2" onClick={event => {
              props.removeFromCart(product);
              // console.log('cartItemArraylength', product.cartItemIdArray.length);
            }}></i></div>
          </div>
          <button className="btn btn-danger my-3" data-toggle="modal" data-target="#exampleModal"
            onClick={event => {
              props.removeItemCompletelyFromCart(product);
            }}>Remove</button>
        </div>
      </div>
    </div>
  );
}
export default CartSummaryItem;
