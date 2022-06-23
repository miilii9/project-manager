import { useEffect, useState } from "react";
import { projectFirestore } from "../Config/Config";

export const useDocs = (collection) => {
  const [documents, setDocuments] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError(error);
      }
    );
    return () => unsubscribe();
  }, [collection]);
  return { documents, error };
};
