import React from 'react';

function CartSummaryItem(props) {
  // console.log('props in CartSummaryItem',props);
  const product = props;
  return (
    <div className="container">
      <div className="row col-12 border bg-light m-3 p-3">
        <div className="col-5 imgStyle">
          <img src={props.image} alt="productImage" />
        </div>
        <div className="col-7 bg-secondary text-white">
          <h5 className="font-weight-bold mt-4">{props.name}</h5>
          <p>${props.price}</p>
          <p>{props.shortDescription}</p>
          <p>Quantity:</p>
          <p className=""><i className="fas fa-plus-square p-2"></i> <span className="bg-white text-secondary item_count">{props.count}</span> <i className="fas fa-minus-square p-2"></i></p>
          <button className="btn btn-danger my-3"
            onClick={event => {
              props.removeFromCart(product);
            }}>Remove</button>
        </div>
      </div>
    </div>
  );
}
export default CartSummaryItem;
