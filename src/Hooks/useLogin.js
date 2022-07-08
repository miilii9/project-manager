import React from "react";

import { useState, useEffect } from "react";
import { projectAuth, projectFirestore } from "../Config/Config";
import { useAuth } from "./useAuth";
export const useLogin = () => {
  const [isPending, setIsPending] = useState("");
  const [error, setError] = useState("");
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch, user } = useAuth();
  const login = async (email, password) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      await projectFirestore
        .collection("users")
        .doc(user.uid)
        .update({ onlineStat: true });
      if (res) {
        dispatch({ type: "LOGIN", payload: res.user });

        if (!isCancelled) {
          setIsPending(false);
          setError(null);
        }
      } else {
        throw new Error("no account with entered details");
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
  return { login, error, isPending };
};
