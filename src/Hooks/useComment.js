import { useEffect, useState } from "react";
import { projectFirestore } from "../Config/Config";

export const useComment = (collection) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const addComment = async (data) => {
    setIsPending(true);
    setError(null);
    setIsCancelled(false);
    // connecting to collection
    let res = projectFirestore.collection(collection);

    try {
      const addedDoc = await res.add({ ...data });
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  useEffect(() => {
    return setIsCancelled(true);
  }, []);
  return { addComment, error, isPending };
};
