// Define a stateful`ProductList` component in `client/components/product-list.jsx`
//  that will render a grid of`ProductListItems`.
// Give it an initial state of`products` set to an empty`Array`.
// Define a method in `ProductList` named`getProducts`
//  that retrieves all products by sending a`GET` request to`/api/products`.
import React from 'react';
import ProductListItem from './product-list-item';
// import ProductDetails from './product-details';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(error => console.error('Fetch Fail Error :', error));
  }

  render() {
    return (
      <div className="container-fluid">
        {/* <div className="cooking"><h1 className="text-white text-right p-2">"Build your Kitchen"</h1></div> */}
        <div id="carouselPortfolio" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselPortfolio" data-slide-to="0" className="active" ></li>
            <li data-target="#carouselPortfolio" data-slide-to="1"></li>
            <li data-target="#carouselPortfolio" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img className="carouselImg d-block w-100" src="images/cooking.jpg" alt="First slide" />
              {/* <div className="carousel-caption">
                <h2>Love to Cook</h2>
              </div> */}
            </div>
            <div className="carousel-item">
              <img className="carouselImg d-block w-100" src="images/chili.jpg" alt="Second slide" />
              {/* <div className="carousel-caption">
                <h2>Relish every dish</h2>
              </div> */}
            </div>
            <div className="carousel-item active">
              <img className="carouselImg d-block w-100" src="images/appliances.jpg" alt="Third slide" />
              {/* <div className="carousel-caption">
                <h2>Build your kitchen</h2>
              </div> */}
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselPortfolio" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselPortfolio" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="row">
          {
            this.state.products.map(currentVal => {
              return (
                <ProductListItem
                  key={currentVal.productId}
                  productId={currentVal.productId}
                  name={currentVal.name}
                  price={currentVal.price}
                  image={currentVal.image}
                  shortDescription={currentVal.shortDescription}
                  longDescription={currentVal.longDescription}
                  setView={this.props.setView}
                  params={this.props.params}
                  addToCart={this.props.addToCart}
                />
              );
            })

          }
        </div>
      </div>
    );
  }
}

export default ProductList;
