import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="row border bg-light m-3 p-3">
      <div className="col-5">
        <img src={props.image} alt="productImage"/>
      </div>
      <div className="col-7">
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.shortDescription}</p>
      </div>
    </div>
  );
}
export default CartSummaryItem;
