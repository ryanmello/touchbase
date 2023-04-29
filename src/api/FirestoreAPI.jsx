import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

let dbRef = collection(firestore, "posts");

// creating a post
export const postStatus = (object) => {
  addDoc(dbRef, object)
    .then((res) => {
      toast.success("Success!");
    })
    .catch((error) => {
      console.log(error);
    });
};

// getting all posts
export const getStatus = (setAllPosts) => {
  onSnapshot(dbRef, (response) => {
    setAllPosts(response.docs.map((docs) => {
        return {...docs.data(), id: docs.id }
    }));
  });
};
