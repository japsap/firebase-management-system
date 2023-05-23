import React, { useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmftzwSfpFUie2s4eC1SxvtLoWkAJ66o4",
  authDomain: "blank-ba04b.firebaseapp.com",
  databaseURL:
    "https://blank-ba04b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blank-ba04b",
  storageBucket: "blank-ba04b.appspot.com",
  messagingSenderId: "311084115066",
  appId: "1:311084115066:web:7ea8247e416ebc881907c3",
  measurementId: "G-WFY2RZ1Q6Y",
};

const fire = initializeApp(firebaseConfig);

export const auth = getAuth(fire);

export async function createAccount(email, password, username) {
  await createUserWithEmailAndPassword(auth, email, password).then((res) => {
    return (res.user.displayName = username);
  });
}

export async function logAccount(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

export async function logOut() {
  if (window.confirm("Are you sure you want to log out?")) {
    await signOut(auth);
  }
}

export default fire;
