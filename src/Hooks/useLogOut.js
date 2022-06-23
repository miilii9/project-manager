import React from "react";
import { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { projectAuth } from "../Config/Config";
import { useAuth } from "./useAuth";

export const useLogOut = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuth();
  const signOut = async () => {
    setError(null);
    setIsPending(true);
    try {
      // sign user out
      await projectAuth.signOut();
      // dispatching signout
      dispatch({ type: "SIGN-OUT" });
      window.location.reload();
      // uptade state?
      if (!isCancelled) {
        setError(null);
        setIsPending(false);
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
  return { signOut, isPending, error };
};
