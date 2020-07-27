import React, { useContext } from "react";
import Product from "../components/Product";
import AppContext from "../store/AppContext";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const StoreView = () => {
  // const {products} = props;
  const context = useContext(AppContext);
  const { products } = context;
  return (
    <div>
      <ul>
        {Object.keys(products).map((key) => (
          <Product key={key} index={key} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("State from redux", state);
  return {
    products: state.firestore.ordered.products,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(StoreView);
