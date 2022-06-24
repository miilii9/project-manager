import { useEffect, useState } from "react";
import { projectFirestore } from "../Config/Config";

export const useComment = (collection) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const addComment = async (comment) => {
    setIsPending(true);
    setError(null);
    let ref = projectFirestore.collection(collection);
    try {
      if (!isCancelled) {
        await ref.add({
          userName: comment.userName,
          comment: `${comment.comment}`,
          date: comment.date,
          pageId: comment.pageId,
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
  return { addComment, error, isPending };
};
