export const createProduct = (product) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("products")
      .add({
        ...product,
        desc: "Some description",
        id: 12345,
        image: "photo url",
        name: "Some name",
        price: 5,
        status: "available",
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};
