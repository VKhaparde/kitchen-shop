import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const uniqueItems = [...new Set(props.cart.map(x => x.productId))];
  const resultArray = [];
  var duplicateItem = { count: 0, cartItemIdArray: [] };
  for (let uniqueIndex = 0; uniqueIndex < uniqueItems.length; uniqueIndex++) {
    for (let i = 0; i < props.cart.length; i++) {
      if (uniqueItems[uniqueIndex] === props.cart[i].productId) {
        duplicateItem.productId = props.cart[i].productId;
        duplicateItem.price = props.cart[i].price;
        duplicateItem.image = props.cart[i].image;
        duplicateItem.name = props.cart[i].name;
        duplicateItem.shortDescription = props.cart[i].shortDescription;
        duplicateItem.count = duplicateItem.count + 1;
        duplicateItem.cartItemIdArray.push(props.cart[i].cartItemId);
      }
    }
    resultArray.push(duplicateItem);
    duplicateItem = { count: 0, cartItemIdArray: [] };
  }
  const totalPrice = props.cart.reduce((accumulator, currentVal) => {
    return (accumulator + currentVal.price);
  }, 0);
  if (resultArray.length === 0) {
    return (
      <div className="outerDiv">
        <p className="btn btn-secondary m-2" onClick={() => {
          props.setView('catalog', {});
        }
        }>Continue Shopping</p>
        <div className="d-flex navbar navbar-light pl-2 w-100">
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
        <div className=" emptyCart text-white text-center p-5 m-4 align-self-center rounded">Your cart is empty!</div>
      </div>
    );
  }
  return (
    <div className="outerDiv">
      <p className="btn btn-secondary m-2" onClick={() => {
        props.setView('catalog', {});
      }
      }>Continue Shopping</p>
      <div className="d-flex navbar navbar-light pl-2 w-100">
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
              price={currentVal.price}
              image={currentVal.image}
              shortDescription={currentVal.shortDescription}
              count={currentVal.count}
              cartItemIdArray={currentVal.cartItemIdArray}
              cartId={currentVal.cartId}
              removeFromCart={props.removeFromCart}
              addToCart={props.addToCart}
              removeItemCompletelyFromCart={props.removeItemCompletelyFromCart} />
          );
        })
      }
    </div>
  );
}

export default CartSummary;
