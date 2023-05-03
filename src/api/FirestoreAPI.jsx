import { firestore } from "../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
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

// save user to firestore
export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

// get the current user
export const getCurrentUser = (setCurrentUser) => {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), userId: docs.id };
        })
        .filter((item) => {
          return item.email === localStorage.getItem("userEmail");
        })[0]
    );
  });
};

// get all posts with all posts and the post id
export const getSingleStatus = (setAllStatus, id) => {
  const singlePostQuery = query(postsRef, where("userId", "==", id));
  onSnapshot(singlePostQuery, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

// get single user
export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(userRef, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })[0]
    );
  });
};

// update the profile document
export const editProfile = (userId, data) => {
  let userToEdit = doc(userRef, userId);
  updateDoc(userToEdit, data)
    .then(() => {
      toast.success("Success!");
    })
    .catch((error) => {
      console.log(error);
    });
};
