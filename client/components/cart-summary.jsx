import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const uniqueItems = [...new Set(props.cart.map(x => x.productId))];
  const resultArray = [];
  var duplicateItem = { count: 0 };
  for (let uniqueIndex = 0; uniqueIndex < uniqueItems.length; uniqueIndex++) {
    for (let i = 0; i < props.cart.length; i++) {
      if (uniqueItems[uniqueIndex] === props.cart[i].productId) {
        duplicateItem.productId = props.cart[i].productId;
        duplicateItem.price = props.cart[i].price;
        duplicateItem.image = props.cart[i].image;
        duplicateItem.shortDescription = props.cart[i].shortDescription;
        duplicateItem.count = duplicateItem.count + 1;
      }
    }
    resultArray.push(duplicateItem);
    duplicateItem = { count: 0 };
  }
  const totalPrice = props.cart.reduce((accumulator, currentVal) => {
    return (accumulator + currentVal.price);
  }, 0);
  return (
    <div className="outerDiv">
      <p className="back-to-catalog btn btn-link" onClick={() => {
        props.setView('catalog', {});
      }
      }>Back to Catalog</p>
      <h3 className="heading navbar navbar-light">My Cart</h3>
      {
        resultArray.map((currentVal, index) => {
          return (
            <CartSummaryItem
              key={index}
              name={currentVal.name}
              price={((currentVal.price) / 100).toFixed(2)}
              image={currentVal.image}
              shortDescription={currentVal.shortDescription}
              count={currentVal.count} />
          );
        })
      }
      <div className="totalprice">Item Total = ${(totalPrice / 100).toFixed(2)}</div>
      <button className="btn btn-primary mx-5 my-2" onClick={() => {
        if (props.cart.length) {
          props.setView('checkout', {});
        }
      }}>checkout</button>
    </div>
  );
}

export default CartSummary;
