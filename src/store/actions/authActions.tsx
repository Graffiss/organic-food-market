import { Dispatch } from "redux";

type Creds = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

type Auth = {
  signInWithEmailAndPassword: (email: string, pass: string) => Promise<string>;
  signOut: () => Promise<string>;
  createUserWithEmailAndPassword: (email: string, pass: string) => Promise<any>;
};

type FirebaseObj = {
  auth: () => Auth;
};

/* type Set = {
  firstName: string;
  lastName: string;
  initials: string;
}; */

type Document = {
  doc: (id: number) => any;
};

type FirestoreObj = {
  collection: (user: string) => Document;
};

type FirebaseFunc = {
  getFirebase: () => FirebaseObj;
  getFirestore: () => FirestoreObj;
};

export const signIn = (credentials: Creds) => {
  return (dispatch: Dispatch, { getFirebase }: FirebaseFunc) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err: string) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch: Dispatch, { getFirebase }: FirebaseFunc) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser: Creds) => {
  return (dispatch: Dispatch, { getFirebase, getFirestore }: FirebaseFunc) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err: string) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
