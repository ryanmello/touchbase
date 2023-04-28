import { firestore } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

let dbRef = collection(firestore, "posts");
export const postStatus = (status) => {
  let object = {
    status: status,
  };

  addDoc(dbRef, object)
    .then((res) => {
      console.log("Document added successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
