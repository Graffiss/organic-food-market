import React, { useContext } from "react";
import Product from "../components/Product";
import AppContext from "../context/AppContext";

const StoreView = () => {
  const context = useContext(AppContext);
  const { products } = context;
  return (
    <div>
      <ul>
        {Object.keys(products).map((key) => (
          <Product key={key} index={key} info={this.props.products[key]} />
        ))}
      </ul>
    </div>
  );
};

export default StoreView;
