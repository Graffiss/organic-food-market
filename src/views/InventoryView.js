import React, { useContext } from "react";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import AppContext from "../context/AppContext";

const InventoryView = () => {
  const context = useContext(AppContext);
  const { products } = context;

  return (
    <div>
      <h1>INVENTORY</h1>
      {Object.keys(products).map((key) => (
        <EditProduct key={key} index={key} />
      ))}
      <AddProduct />
    </div>
  );
};

export default InventoryView;
