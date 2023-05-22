import { create } from "zustand";
import { shallow } from "zustand/shallow";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase.config.js";
import { useEffect, useState } from "react";

export const useAuthStore = create(
  (set) => ({
    currentUser: [null],
    loading: true,
    signUp: (email, password) => {
      console.log(email, password);
      createUserWithEmailAndPassword(auth, email, password);
    },
    logIn: (email, password) => {
      signInWithEmailAndPassword(auth, email, password);
    },
    logOut: () => {
      signOut(auth);
    },
    loginWithGoogle: () => {
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider);
    },
    resetPassword: (email) => {
      sendPasswordResetEmail(auth, email);
    },
    handleSession: () => {
      useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
          set({ currentUser: currentUser });
          set({ loading: false });
          console.log("Funcionando");
          console.log(currentUser);
        });
      }, []);
    },
  }),
  shallow
);
