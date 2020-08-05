import React from "react";
import Store from "./StoreView";
import Nav from "../components/organisms/Nav/Nav";
import Home from "./HomeView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFoundView";
import Contact from "./ContactView";
import About from "./AboutView";
import Login from "./LoginView";
import MainTemplate from "../template/MainTemplate";
import ContentTemplate from "../template/ContentTemplate";
import GlobalState from "../store/GlobalState";
import { rrfProps, store } from "../store/store";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

const Root = () => (
  /* state = {
    products: productsDatabase,
    order: {},
    cartVisible: false,
  };

  cartRef = React.createRef();

  componentDidMount() {
    const localStorageRef = localStorage.getItem("Order");
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("Order", JSON.stringify(this.state.order));
  }

  saveProductsList = () => {
    this.setState({ products: productsDatabase });
  };

  addToCart = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order: order });
  };

  addProductToList = (product) => {
    const products = { ...this.state.products };
    products[`product${Date.now()}`] = product;
    this.setState({
      products: products,
    });
  };

  updateProduct = (key, updateProduct) => {
    const products = { ...this.state.products };
    products[key] = updateProduct;
    this.setState({ products: products });
  };

  removeProductFromInventory = (key) => {
    const products = { ...this.state.products };
    delete products[key];
    this.setState({ products: products });
  };

  removeProductFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order: order });
  };

  cartOpen = () => {
    this.setState({
      cartVisible: !this.state.cartVisible,
    });
  };

  handleClickOutsideCart = () => {
    if (!this.state.cartVisible) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState({
      cartVisible: !this.state.cartVisible,
    });
  };

  handleOutsideClick = (e) => {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClickOutsideCart();
  };

  sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0); */
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <GlobalState>
        <MainTemplate>
          <Nav />
          <ContentTemplate>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/store" component={Store} />
              <Route path="/login" component={Login} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </ContentTemplate>
        </MainTemplate>
      </GlobalState>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default Root;
