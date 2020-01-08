import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  // console.log('props in CartSummary',props);
  const uniqueItems = [...new Set(props.cart.map(x => x.productId))];
  const resultArray = [];
  var duplicateItem = { count: 0 };
  for (let uniqueIndex = 0; uniqueIndex < uniqueItems.length; uniqueIndex++) {
    for (let i = 0; i < props.cart.length; i++) {
      if (uniqueItems[uniqueIndex] === props.cart[i].productId) {
        duplicateItem.productId = props.cart[i].productId;
        duplicateItem.price = props.cart[i].price;
        duplicateItem.image = props.cart[i].image;
        duplicateItem.name = props.cart[i].name;
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
      <div className="d-flex navbar navbar-light w-100">
        <h3 className="">My Cart</h3>
        <div className="d-flex justify-content-between">
          <div className="totalpriceCart">Item Total : ${(totalPrice / 100).toFixed(2)}</div>
          <button className="btn btn-primary m-1" onClick={() => {
            if (props.cart.length) {
              props.setView('checkout', {});
            }
          }}>Checkout</button>
        </div>
      </div>
      {
        resultArray.map((currentVal, index) => {
          return (
            <CartSummaryItem
              key={currentVal.productId}
              productId={currentVal.productId}
              name={currentVal.name}
              price={((currentVal.price) / 100).toFixed(2)}
              image={currentVal.image}
              shortDescription={currentVal.shortDescription}
              count={currentVal.count}
              removeFromCart={props.removeFromCart} />
          );
        })
      }
      {/* <div className="totalprice">Item Total = ${(totalPrice / 100).toFixed(2)}</div>
      <button className="btn btn-primary mx-5 my-2" onClick={() => {
        if (props.cart.length) {
          props.setView('checkout', {});
        }
      }}>checkout</button> */}
    </div>
  );
}

export default CartSummary;
