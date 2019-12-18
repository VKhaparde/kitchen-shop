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
      <div className="d-flex flex-column m-4 border border-dark">
        <div className="font-weight-bold text-center">My Cart</div>
        <div className="totalprice">Order Total:${(totalPrice / 100).toFixed(2)}</div>
        <form action="" className="m-2 text-center"
          onSubmit={() => {
            this.props.placeOrder(this.state);
          }}>
          <div className="d-flex flex-column">
            <label>Name:
              <br></br>
              <input type="text" name="name" value={this.state.name}
                onChange={this.updateField} required/>
            </label>
          </div>
          <div className="d-flex flex-column">
            <label>CreditCard Number:
              <input type="text" name="creditCard" value={this.state.creditCard}
                onChange={this.updateField} required/>
            </label>
          </div>
          <div className="d-flex flex-column">
            <label>Shipping Address:
              <textarea className="" name="shippingAddress" value={this.state.shippingAddress}
                onChange={this.updateField} required/>
            </label>
          </div>
          <button className="btn btn-primary ml-4" onClick={() => {
            this.props.setView('catalog', {});
          }}>Continue Shopping</button>
          <button className="btn btn-primary ml-4 mt-2">Place Order</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
