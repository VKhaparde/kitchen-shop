import React from 'react';

function DeleteModal(props) {
  return (
    <div className="">
      <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
        style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle"></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                onClick={() => {
                  props.hideModal();
                }}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete {props.product.name} from your cart?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary"
                onClick={() => {
                  props.hideModal();
                }}
              >Cancel</button>
              <button type="button" className="btn btn-primary"
                onClick={() => {
                  props.removeItemCompletelyFromCart(props.product);
                }}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeleteModal;
