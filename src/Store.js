import React, { useState, useEffect } from "react";
import { auth } from "./firebase/firebase";

const initialState = {
  user: {
    username: "",
    email: "",
    uid: "",
    photoURL: "",
  },
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [user, setUser] = useState(initialState.user);
  const authUtils = {
    login: (email, password) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));
      //setLoginOpen(false);
    },

    logout: () => {
      auth.signOut().catch((error) => alert(error.message));
    },

    signUp: (email, password, username) => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          return authUser.user.updateProfile({
            displayName: username,
          });
        })
        .catch((error) => alert(error.message));
    },
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        // user has logged in
        setUser({
          ...user,

          username: authUser.displayName,
          email: authUser.email,
          uid: authUser.uid,
          photoURL: authUser.photoURL,
        });
      } else {
        // user has logged out
        setUser({ ...user, username: "", email: "" });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Context.Provider
      value={{ userState: [user, setUser], authUtils: authUtils }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
