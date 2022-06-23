import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("you are out of context's domain ");
  }
  return context;
};
