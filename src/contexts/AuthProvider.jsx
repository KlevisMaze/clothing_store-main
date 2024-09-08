/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import app from "../firebase/firebase.config"
import{GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"


export const AuthContext =createContext();
const auth = getAuth();
const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  //create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }


  //create user usin gmail
  const signUpWithGmail =(auth, googleProvider) =>{
    setLoading(true);
    return signInWithPopup()
  }


//login
const login = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
}


//logout function
const logOut =() => {
  const auth = getAuth();
  signOut(auth)
      .then(() => {
          console.log("User signed out successfully");
      })
      .catch((error) => {
          console.error("Error during sign out:", error);
      });
};



//user is avaiable or not
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentuser =>{
    setUser(currentuser);
    setLoading(false);
  });
  return () => {
    return unsubscribe()
  }
})

    const authInfo = {
              user, 
              loading,
              createUser,
              signUpWithGmail,
              login,
              logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider