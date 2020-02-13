import React from 'react';
import OrderConfirmation from './order-confirmation';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: '',
      orderPlaced: false
    };
    this.updateField = this.updateField.bind(this);
    this.updateOrderPlacedValue = this.updateOrderPlacedValue.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  updateField(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  updateOrderPlacedValue() {
    this.setState({
      orderPlaced: true
    });
  }

  hideModal() {
    this.setState({
      orderPlaced: false,
      name: '',
      creditCard: '',
      shippingAddress: ''
    });
  }

  render() {
    const totalPrice = this.props.cart.reduce((accumulator, currentVal) => {
      return (accumulator + currentVal.price);
    }, 0);

    return (
      <div>
        {
          this.state.orderPlaced && <OrderConfirmation cart={this.props.cart}
            placeOrder={this.props.placeOrder} setView={this.props.setView}
            hideModal={this.hideModal} orderDetails={this.state} />
        }
        <div className="mx-2 p-2 checkoutForm">
          <h3 className="text-center">Check Out</h3>
          <h6 className="text-center text-primary">This checkout form is only for demo purposes only. No real transaction will be made.</h6>
          <div className="totalprice">Order Total: ${(totalPrice / 100).toFixed(2)}</div>
          <form
            onSubmit={event => {
              event.preventDefault();
              this.updateOrderPlacedValue();
            }}>
            <div>
              <label htmlFor="nameValidation">Name:</label>
              <input type="text" name="name" className="form-control" value={this.state.name}
                onChange={this.updateField} required autoComplete="off" minLength="5" maxLength="40"
                pattern= "\s*([A-Za-z]\s*){5,}" title="Please enter a valid name of atleast 5 characters" />
            </div>

            <div className="form-group">
              <label>Credit Card number:</label>
              <input type="text" name="creditCard" className="form-control" value={this.state.creditCard}
                onChange={this.updateField} required autoComplete="off" maxLength="16"
                pattern= "[0-9]{16}" placeholder="0000000000000000" title="Provide only numbers upto 16 digits"/>
            </div>

            <div className="form-group">
              <label>Shipping Address:</label>
              <input name="shippingAddress" type ="text" className="form-control" value={this.state.shippingAddress}
                onChange={this.updateField} required autoComplete="off" minLength="10" maxLength="100"
                pattern="\s*([A-Za-z0-9_@./#-,]\s*){10,}" title="Please enter valid address of atleast 10 characters"/>
            </div>
            <button className="btn btn-secondary m-2" onClick={() => {
              this.props.setView('catalog', {});
            }}>Continue Shopping</button>

            <button className="btn btn-primary m-2" onClick={() => {
            }}>Place Order</button>

          </form >
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
