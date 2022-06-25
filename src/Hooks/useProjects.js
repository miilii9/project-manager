import { useEffect, useReducer, useState } from "react";
import { projectFirestore } from "../Config/Config";
let initState = {
  document: null,
  err: null,
  isPending: null,
  success: null,
};
const projReducer = (state, action) => {
  switch (action.type) {
    case "IS-PENDING":
      return {
        isPending: true,
        document: null,
        err: null,
        success: false,
      };
    case "ADDED":
      return {
        isPending: false,
        document: action.payload,
        err: null,
        success: true,
      };
    case "REMOVED":
      return {
        isPending: false,
        document: action.payload,
        err: null,
        success: true,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        err: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
export const useProjects = (collection) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [state, dispatch] = useReducer(projReducer, initState);
  let res = projectFirestore.collection(collection);
  const ifNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch({ action });
    }
  };
  const addProject = async (data) => {
    dispatch({ type: "IS-PENDING" });
    try {
      const addedDoc = await res.add({ ...data });

      ifNotCancelled({ type: "ADDED", payload: addedDoc });
    } catch (err) {
      ifNotCancelled({ type: "ERROR", payload: err.message });
      console.log(err.message);
    }
  };

  const removeProject = async (id) => {
    dispatch({ type: "IS-PENDING" });
    try {
      await ReferenceError.doc(id).delete();
      ifNotCancelled({ type: "REMOVED" });
    } catch (err) {
      ifNotCancelled({ type: "ERROR", action: err.message });
    }
  };

  useEffect(() => {
    return setIsCancelled(true);
  }, []);
  return { addProject, removeProject };
};
