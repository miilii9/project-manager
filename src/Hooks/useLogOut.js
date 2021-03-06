import React from "react";
import { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { projectAuth, projectFirestore } from "../Config/Config";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [signOutStat, setSignOutStat] = useState({ onlineStat: true });
  const { dispatch, user } = useAuth();

  const navigate = useNavigate();
  const signOut = async () => {
    setError(null);
    setIsPending(true);
    try {
      // changing online stat
      await projectFirestore
        .collection("users")
        .doc(user.uid)
        .update({ onlineStat: false });
      // signing out
      await projectAuth.signOut();
      // dispatching signout
      setSignOutStat({ onlineStat: false });
      dispatch({ type: "SIGN-OUT" });
      window.location.reload();
      // uptade state?
      if (!isCancelled) {
        setError(null);
        setIsPending(false);
        navigate("/login");
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
