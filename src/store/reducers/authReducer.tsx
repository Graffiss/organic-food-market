const initState = {
  authError: null,
};

type Error = {
  message: string;
};

type Action = {
  type: string;
  err: Error;
};

const authReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };

    case "SIGNOUT_SUCCESS":
      return state;

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err.message,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
