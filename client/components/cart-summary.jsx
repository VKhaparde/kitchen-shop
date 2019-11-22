import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  // console.log('Props of CartSummary', props);

  return (
    <div className="outerDiv">
      <div className="heading">My Cart</div>
      {
        props.cart.map((currentVal, index) => {
          return (
            <CartSummaryItem
              key={index}
              name={currentVal.name}
              price={currentVal.price}
              image={currentVal.image}
              shortDescription={currentVal.shortDescription} />
          );
        })
      }
      <div className="totalprice">Item Total</div>
    </div>
  );
}

export default CartSummary;
