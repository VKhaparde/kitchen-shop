import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import TermsAndConditions from './terms-and-conditions';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      view: {
        name: 'catalog',
        params: {}
      },
      termsAccepted: false,
      orderPlaced: false
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.removeItemCompletelyFromCart = this.removeItemCompletelyFromCart.bind(this);
    this.acceptTermsAndConditions = this.acceptTermsAndConditions.bind(this);
  }

  setView(name, params) {
    const newView = {
      name: name,
      params: params
    };
    this.setState({ view: newView });
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => this.setState({ cart: data }))
      .catch(error => console.error('Fetch Failed Error : ', error));
  }

  addToCart(product) {
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('/api/cart', init)
      .then(response => response.json())
      .then(data => {
        // const productsInCart = this.state.cart.concat(product);
        // this.setState({ cart: productsInCart });
        this.getCartItems();
      });
  }

  removeFromCart(product) {
    const init = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId: product.productId,
        cartItemId: product.cartItemIdArray[product.cartItemIdArray.length - 1]
      })
    };
    fetch('/api/cart', init)
      .then(response => this.getCartItems())
      .catch(error => console.error('There was an unexpected error:', error));
  }

  removeItemCompletelyFromCart(product) {
    const init = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId: product.productId
      })
    };
    fetch('/api/cart', init)
      .then(response => this.getCartItems())
      .catch(error => console.error('There was an unexpected error:', error));
  }

  placeOrder(orderDetails) {
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderDetails)
    };
    fetch('/api/orders', init)
      .then(data => {
        this.setState({
          view:
            { name: 'catalog', params: {} },
          cart: []
        });
      });
  }

  acceptTermsAndConditions() {
    this.setState({ termsAccepted: !this.state.termsAccepted });
  }

  render() {
    if (this.state.view.name === 'catalog' && this.state.termsAccepted) {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}
            params={this.state.view.params} />
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'catalog' && this.state.termsAccepted === false) {
      return (
        <div>
          <TermsAndConditions acceptTermsAndConditions={this.acceptTermsAndConditions}
            termsAccepted={this.state.termsAccepted} />
          <div>
            <Header cartItemCount={this.state.cart.length} setView={this.setView}
              params={this.state.view.params} />
            <ProductList setView={this.setView} />
          </div>
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}
            params={this.state.view.params} />
          <ProductDetails params={this.state.view.params}
            setView={this.setView} addToCart={this.addToCart} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}
            params={this.state.view.params} />
          <CartSummary cart={this.state.cart} setView={this.setView}
            removeFromCart={this.removeFromCart} addToCart={this.addToCart}
            removeItemCompletelyFromCart={this.removeItemCompletelyFromCart}/>
        </div>
      );
    } else if (this.state.view.name === 'checkout' && this.state.orderPlaced === false) {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}
            params={this.state.view.params} />
          <CheckoutForm setView={this.setView} placeOrder={this.placeOrder}
            cart={this.state.cart}/>
        </div>
      );
    }
    // else if (this.state.view.name === 'checkout' && this.state.orderPlaced === true){
    //   return (
    //     <div>
    //       <OrderConfirmation />
    //       <div>
    //         <Header cartItemCount={this.state.cart.length} setView={this.setView}
    //           params={this.state.view.params} />
    //         <CheckoutForm setView={this.setView} placeOrder={this.placeOrder}
    //           cart={this.state.cart} />
    //       </div>
    //     </div>
    //   );
    // }
  }
}
