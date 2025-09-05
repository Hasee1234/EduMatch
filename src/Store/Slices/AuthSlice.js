import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../../Config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ email, password, name, role, skills, photoURL }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update Firebase Auth profile
      await updateProfile(user, { displayName: name, photoURL });

      // Save in Firestore (peers collection)
      await setDoc(doc(db, "peers", user.uid), {
        uid: user.uid,
        name,
        email,
        role,
        skills,
        photoURL,
        createdAt: new Date(),
      });

      return {
        uid: user.uid,
        email: user.email,
        displayName: name,
        photoURL,
        role,
        skills,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
