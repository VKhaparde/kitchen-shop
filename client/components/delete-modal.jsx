import React from 'react';

function DeleteModal(props) {
  return (
    <div className="container">
      <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
        style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-header">
            <h3 className="modal-title text-center" id="exampleModalLabel"></h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-content">
            <div className="modal-body">
              <p>Are you sure you want to delete this item?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal"
                onClick={() => {
                  // props.removeItemCompletelyFromCart(props);
                }}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeleteModal;
