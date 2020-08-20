import { Dispatch } from "redux";

export const createProduct = (product) => {
  return (dispatch: Dispatch, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    /*  const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid; */

    firestore
      .collection("products")
      .add({
        ...product,
      })
      .then(() => {
        dispatch({ type: "CREATE_PRODUCT_SUCCESS" });
      })
      .catch((err: string) => {
        dispatch({ type: "CREATE_PRODUCT_ERROR" }, err);
      });
  };
};
