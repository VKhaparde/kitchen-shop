import React from 'react';

function ProductListItem(props) {
  return (
    <div className="col-md-4" params = {props.params}
      onClick={() => {
        props.setView('details', { productId: props.productId });
      }}>
      <div className="card showcard my-3">
        <img src={props.image} className="card-img-top imgstyle" alt="product-image" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-subtitle">${(props.price / 100).toFixed(2)}</p>
          <p className="card-text">{props.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
