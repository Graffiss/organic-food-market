import React, { useContext } from "react";
import Product from "../components/Product";
import AppContext from "../store/AppContext";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import products from "../products-database";

const StoreView = (props) => {
  const { products2 } = props;
  const context = useContext(AppContext);
  const { products } = context;
  return (
    <div>
      <ul>
        {products2.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            {...props}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("State from redux", state);
  return {
    products2: state.firestore.ordered.products || products,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["products"])
)(StoreView);
