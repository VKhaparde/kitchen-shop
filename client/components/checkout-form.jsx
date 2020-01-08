import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.updateField = this.updateField.bind(this);
  }

  updateField(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    const totalPrice = this.props.cart.reduce((accumulator, currentVal) => {
      return (accumulator + currentVal.price);
    }, 0);
    return (
      <div className="d-flex flex-column m-2 checkoutForm">
        <h3 className="text-center ">My Cart</h3>
        <div className="totalprice">Order Total: ${(totalPrice / 100).toFixed(2)}</div>
        <form action="" className="m-2 d-flex flex-column"
          onSubmit={() =>
            this.props.placeOrder(this.state)
          }>

          <label className="p-2">Name:
            <input type="text" name="name" value={this.state.name}
              onChange={this.updateField} required />
          </label>

          <label className="p-2">Credit Card number:
            <input type="text" name="creditCard" value={this.state.creditCard}
              onChange={this.updateField} required />
          </label>

          <div className="d-flex justify-content-start">
            <div className="p-2">Shipping Address:</div>
            <textarea className="" name="shippingAddress" value={this.state.shippingAddress}
              onChange={this.updateField} required />
          </div>
          <button className="btn btn-primary m-4" onClick={() => {
            this.props.setView('catalog', {});
          }}>Continue Shopping</button>
          <button className="btn btn-primary m-4">Place Order</button>
        </form >
      </div>
    );
  }
}

export default CheckoutForm;
