import React from "react";
import Product from "../components/Product";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import products from "../products-database";

type Props = {
  products: Array<T>;
};

const StoreView: React.FC<Props> = (props) => {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            status={product.status}
            desc={product.desc}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("State from redux", state);
  return {
    products: state.firestore.ordered.products || products,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["products"])
)(StoreView);
