import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
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
        const productsInCart = this.state.cart.concat(product);
        this.setState({ cart: productsInCart });
      });
  }

  removeFromCart(product) {
    const init = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId: product.productId
      })
    };
    fetch('/api/cart', init)
      .then(response => response.json())
      .then(data => {
        const productsInCart = this.state.cart.filter(item => {
          return item.productId !== product.productId;
        });
        this.setState({ cart: productsInCart });
      });
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

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}
            params={this.state.view.params} />
          <ProductList setView={this.setView} />
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
            removeFromCart={this.removeFromCart}/>
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}
            params={this.state.view.params} />
          <CheckoutForm setView={this.setView} placeOrder={this.placeOrder}
            cart={this.state.cart}/>
        </div>
      );
    }
  }
}
