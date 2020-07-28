import React, { useContext } from "react";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import AppContext from "../store/AppContext";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const InventoryView = () => {
  // const { products } = props;
  const context = useContext(AppContext);

  const { products } = context;

  return (
    <div>
      <h1>INVENTORY</h1>
      {products.map((product) => (
        <EditProduct key={product.id} />
      ))}
      <AddProduct />
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    products: state.firestore.ordered.products,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(InventoryView);
