import React from 'react';
function Header(props) {
  return (
    <div className="navbar navbar-light bg-dark">
      <h1 className="text-white">Wicked Sales</h1>
      <div className='d-inline-flex justify-content-start'>
        <p className=" mytext text-white" >{props.cartItemCount} Items</p>
        <i className=" text-white fas fa-shopping-cart"></i>
      </div>
    </div>
  );
}
export default Header;
