import React from 'react';

function DeleteModal(props) {
  // console.log('Delete Modal props',props);
  return (
    <div className="container">
      <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
        style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel"></h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="text-center">Are you sure you want to delete this item?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
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
