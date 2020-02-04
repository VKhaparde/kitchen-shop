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
    // console.log('props in checkout form', this.props);
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
              // this.props.placeOrder(this.state);
            }}>
            <div>
              <label htmlFor="nameValidation">Name:</label>
              <input type="text" name="name" className="form-control" value={this.state.name}
                onChange={this.updateField} required autoComplete="off" minLength="5" maxLength="20"
                pattern="[a-zA-Z ]*$" title="Please enter a valid name"/>
            </div>

            <div className="form-group">
              <label>Credit Card number:</label>
              <input type="text" name="creditCard" className="form-control" value={this.state.creditCard}
                onChange={this.updateField} required autoComplete="off" maxLength="16"
                pattern= "[0-9]{16}" placeholder="0000000000000000" title="Provide only numbers"/>
            </div>

            <div className="form-group">
              <label>Shipping Address:</label>
              <textarea name="shippingAddress" className="form-control" value={this.state.shippingAddress}
                onChange={this.updateField} required autoComplete="off" maxLength="50" />
            </div>
            {/* <div className="form-group">
              <label for="inputAddress">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
              <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                  </div>
                    <div className="form-group col-md-4">
                      <label for="inputState">State</label>
                      <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option value="CA">California</option>
                        <option value="TX">Texas</option>
                        <option value="GA">Georgia</option>
                        <option value="CO">Colorado</option>
                        <option value="OH">Ohio</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label for="inputZip">Zip</label>
                      <input type="number" className="form-control" id="inputZip" />
                    </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                          <label className="form-check-label" for="gridCheck">
                            This app is just for demonstration purposes only.Information provided in the checkout will not be used.
                          </label>
                      </div>
                      </div> */}

            <button className="btn btn-secondary m-2" onClick={() => {
              this.props.setView('catalog', {});
            }}>Continue Shopping</button>

            <button className="btn btn-primary m-2" onClick={() => {
              // this.updateOrderPlacedValue();
            }}>Place Order</button>

          </form >
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
