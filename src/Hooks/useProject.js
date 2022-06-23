import { useEffect, useState } from "react";
import { projectFirestore } from "../Config/Config";
export const useProject = (collection, id) => {
  const [doc, setDoc] = useState("");
  const [err, setErr] = useState(null);
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);
    console.log(collection, id);
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDoc({ ...snapshot.data(), id: snapshot.id });
          setErr(null);
        }
      },
      (err) => {
        console.log(err.message);
        setErr("could not fetch project");
      }
    );
    return () => unsubscribe();
  }, [collection, id]);
  return { doc, err };
};
