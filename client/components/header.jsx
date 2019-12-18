import React from 'react';
function Header(props) {
  return (
    <div className="navbar navbar-light bg-dark d-flex justify-content-between">
      <h2 className="text-white">Kitchen Shop</h2>
      <div className='d-inline-flex justify-content-start'>
        <p className="mytext text-white" >{props.cartItemCount} Items</p>
        <div onClick={() => {
          props.setView('cart', {});
        }}>
          <i className=" text-white fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
}
export default Header;
