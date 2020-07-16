import React, { useReducer } from "react";
import styled from "styled-components";
import { auth } from "../../../firebase";

const LoginButton = styled.button`
  background: #ff7352;
  border: 0.2rem solid #ff7352;

  &:hover {
    background: transparent;
    border: 0.2rem soid #ff7352;
    color: black;
  }
`;

const LoginForm = () => {
  const [inputsContent, setInputsContent] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
    }
  );

  const { email, password } = inputsContent;

  const handleInputChange = (e) => {
    setInputsContent({
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) =>
        alert(
          `Your email or password is incorrect, please check your data, ${error}`
        )
      );
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) =>
        alert(`Email is already in use, sign in or use other email, ${error}`)
      );
  };
  return (
    <div className="login contact">
      <h2>Login or register in our store</h2>
      <input
        onChange={handleInputChange}
        placeholder="client@email.com"
        id="email-input"
        type="email"
        name="email"
        required
      />
      <input
        onChange={handleInputChange}
        placeholder="********"
        id="password-input"
        type="password"
        name="password"
        required
      />
      <div>
        <button type="submit" name="login" onClick={handleSignIn}>
          Login
        </button>
        <LoginButton type="submit" name="register" onClick={handleSignUp}>
          Register
        </LoginButton>
      </div>
    </div>
  );
};

export default LoginForm;
