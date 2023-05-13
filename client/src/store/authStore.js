import { create } from 'zustand';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import {useState} from 'react';

export const useAuthStore = create((set) => ({
    user: {
        login: true,
    },
    signUp: (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password);
    },
    logIn: (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    },
    handleSession: () => {
        const [user, setUser] = useState(null);

        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Funcionando");
        });
    }
}));