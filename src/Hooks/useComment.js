import { useEffect, useState } from "react";
import { projectFirestore } from "../Config/Config";
export const useComment = async () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const addComment = async (comment) => {
    setIsPending(true);
    setError(null);
    let ref = projectFirestore.collection("comments");
    try {
      if (!isCancelled) {
        const addedComment = await ref.add({
          userName: document.Name,
          comment: `${comment.comment}`,
          date: comment.date,
        });
        setIsPending(false);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };
  useEffect(() => {
    return setIsCancelled(true);
  }, []);
  return { addComment };
};
