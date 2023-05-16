import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { db } from "../firebase.config.js";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

export const useDbStore = create(
  (set) => ({
    save: (doc = {}) => {
      addDoc(collection(db, "usuarios"), doc);
    },
    read: () => {
    },
  }),
  shallow
);
