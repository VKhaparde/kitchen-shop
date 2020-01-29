import React from 'react';

function TermsAndConditions(props) {
  return (
    <div>
      <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
        style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="exampleModalLabel">Welcome to Kitchen Shop</h5>
            </div>
            <div className="modal-body">
              <p>Kitchen Shop is a LAMP stack content management app that was created
                strictly for demonstration purposes. By clicking the button below, you
                 accept that no purchases will be made, no payment processing will be done,
                 and that actual personal information should not be used in checkout, such as
                 real names, addresses, or credit card numbers.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal"
                onClick={() => {
                  props.acceptTermsAndConditions();
                }}>Accept</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TermsAndConditions;
