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
      <div className="mx-2 p-4 checkoutForm">
        <h3 className="text-center">My Cart</h3>
        <div className="totalprice">Order Total: ${(totalPrice / 100).toFixed(2)}</div>
        <form action="" onSubmit={() =>
          this.props.placeOrder(this.state)}>

          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" className="form-control" value={this.state.name}
              onChange={this.updateField} required autoComplete="off" />
          </div>

          <div className="form-group">
            <label>Credit Card number:</label>
            <input type="text" name="creditCard" className="form-control" value={this.state.creditCard}
              onChange={this.updateField} required autoComplete="off"/>
          </div>

          <div className="form-group">
            <label>Shipping Address:</label>
            <textarea name="shippingAddress" className="form-control" value={this.state.shippingAddress}
              onChange={this.updateField} required autoComplete="off"/>
          </div>

          <button className="btn btn-primary m-2" onClick={() => {
            this.props.setView('catalog', {});
          }}>Continue Shopping</button>

          <button className="btn btn-primary m-2">Place Order</button>

        </form >
      </div>
    );
  }
}

export default CheckoutForm;
