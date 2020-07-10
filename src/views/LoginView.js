import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import Inventory from "../components/Inventory";
import { auth } from "../firebase";

const Login = (props) => {
  const {
    addProductToList,
    products,
    updateProduct,
    removeProductFromInventory,
  } = props;
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignOut = () => auth.signOut();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem("currentUser", user.uid);
      } else {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
      }
    });
  }, []);

  return (
    <div>
      {currentUser ? (
        <div>
          <Inventory
            {...props}
            addProductToList={addProductToList}
            products={products}
            updateProduct={updateProduct}
            removeProductFromInventory={removeProductFromInventory}
          />
          <button onClick={handleSignOut}>Wyloguj</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Login;
