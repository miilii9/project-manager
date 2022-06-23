import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { projectAuth } from "../Config/Config";
import { projectStorage } from "../Config/Config";
import { projectFirestore } from "../Config/Config";
// import { useUsers } from "./useUsers";

export const useSignin = () => {
  const [isPending, setIsPending] = useState("false");
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuth();
  // const { addUser } = useUsers();

  const signin = async (mail, password, displayName, thumbnail) => {
    setIsPending(true);
    setError(null);
    try {
      // sign-up
      const res = await projectAuth.createUserWithEmailAndPassword(
        mail,
        password
      );
      if (!res) {
        throw new Error("could not sign up");
      }
      // const uploadPAth = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      // creating path and url for profile pic
      // const prof = await projectStorage.ref(uploadPAth).put(thumbnail);
      // const profPath = await prof.ref.getDownloadURL();
      // add username and photoURL to user
      // await res.user.updateProfile({ displayName, photoURL: profPath });
      await res.user.updateProfile({ displayName });

      // creating a doc for pic and online status and chats
      // const userDoc = { profPath, displayName, onlineStat: true };
      const userDoc = { displayName, onlineStat: true, uid: res.user.uid };
      console.log(userDoc);
      await projectFirestore.collection("users").doc(res.user.uid).set(userDoc);

      dispatch({ type: "LOGIN", payload: res.user });
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { signin, isPending, error };
};
