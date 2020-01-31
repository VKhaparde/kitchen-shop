import React from 'react';

function OrderConfirmation(props) {
  // console.log('props in order confirmation',props)
  return (
    <div>
      <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
        style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle"></h5>
              {/* <button type="button" className="close" aria-label="Close"
              onClick={() => {
                props.hideModal();
              }}>
              <span aria-hidden="true">&times;</span>
            </button> */}
            </div>
            <div className="modal-body">
              <p>Your Order has been placed!! Thank you.</p>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary"
              onClick={() => {
                props.placeOrder(props.orderDetails);
                props.hideModal();
              }}
            >Ok</button> */}
              <button type="button" className="btn btn-secondary btn-block"
                onClick={() => {
                  // props.setView('catalog',{});
                  props.placeOrder(props.orderDetails);
                  props.hideModal();
                }}>Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
