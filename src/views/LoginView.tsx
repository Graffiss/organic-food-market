import React, { useState, useEffect } from "react";
import LoginForm from "../components/organisms/LoginForm/LoginForm";
import Inventory from "./InventoryView";
import { auth } from "../config/firebaseConfig/firebase";

const Login = () => {
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
          <Inventory />
          <button onClick={handleSignOut}>Wyloguj</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Login;
