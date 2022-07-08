import { useEffect, useState, useReducer } from "react";
import { projectFirestore } from "../Config/Config";
let initState = {
  document: null,
  err: null,
  isPending: null,
  success: null,
};
// const projReducer = (state, action) => {
//   switch (action.type) {
//     case "IS-PENDING":
//       return {
//         isPending: true,
//         document: null,
//         err: null,
//         success: false,
//       };
//     case "ADDED":
//       return {
//         isPending: false,
//         document: action.payload,
//         err: null,
//         success: true,
//       };
//     case "REMOVED":
//       return {
//         isPending: false,
//         document: action.payload,
//         err: null,
//         success: true,
//       };
//     case "ERROR":
//       return {
//         isPending: false,
//         document: null,
//         err: action.payload,
//         success: false,
//       };
//     default:
//       return state;
//   }
// };
export const useUsers = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  // connecting to firestore
  let res = projectFirestore.collection("users");

  const addUser = async (data) => {
    try {
      // adding date
      await res.doc(data.uid).add({ ...data });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    return setIsCancelled(true);
  }, []);
  return { addUser };
};
