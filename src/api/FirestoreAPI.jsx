import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");

// creating a post
export const postStatus = (object) => {
  addDoc(postsRef, object)
    .then((res) => {
      toast.success("Success!");
    })
    .catch((error) => {
      console.log(error);
    });
};

// getting all posts
export const getStatus = (setAllPosts) => {
  onSnapshot(postsRef, (response) => {
    setAllPosts(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};
