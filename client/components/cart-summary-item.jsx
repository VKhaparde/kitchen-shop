import React from 'react';

function CartSummaryItem(props) {
  // console.log('props in CartSummaryItem',props);
  const product = props;
  return (
    <div className="row col-12 border bg-light m-3 p-3">
      <div className="col-5">
        <img src={props.image} alt="productImage"/>
      </div>
      <div className="col-7 bg-secondary text-white">
        <h5 className="font-weight-bold">{props.name}</h5>
        <p>${props.price}</p>
        <p>{props.shortDescription}</p>
        <p>Quantity: {props.count}</p>
        <button className="btn btn-danger mb-3"
          onClick={event => {
            props.removeFromCart(product);
          } }>Remove</button>
      </div>
    </div>
  );
}
export default CartSummaryItem;
