import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="row col-12 border bg-light m-3 p-3">
      <div className="col-5">
        <img src={props.image} alt="productImage"/>
      </div>
      <div className="col-7 bg-info text-white ">
        <p>{props.name}</p>
        <p>${props.price}</p>
        <p>{props.shortDescription}</p>
        <p>Quantity: {props.count}</p>
      </div>
    </div>
  );
}
export default CartSummaryItem;
