import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  // console.log('Props of CartSummary', props);
  const totalPrice = props.cart.reduce((accumulator, currentVal) => {
    return (accumulator + currentVal.price);
  }, 0);
  return (
    <div className="outerDiv">
      <p className= "back-to-catalog" onClick={() => {
        props.setView('catalog', {});
      }
      }>Back to Catalog</p>
      <h3 className="heading navbar navbar-light">My Cart</h3>
      {
        props.cart.map((currentVal, index) => {
          return (
            <CartSummaryItem
              key={index}
              name={currentVal.name}
              price={((currentVal.price) / 100).toFixed(2)}
              image={currentVal.image}
              shortDescription={currentVal.shortDescription} />
          );
        })
      }
      <div className="totalprice">Item Total = ${(totalPrice / 100).toFixed(2)}</div>
    </div>
  );
}

export default CartSummary;
