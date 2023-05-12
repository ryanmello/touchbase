import { firestore } from "../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  setDoc,
  updateDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");
let likesRef = collection(firestore, "likes");
let commentsRef = collection(firestore, "comments");

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

export const getAllUsers = (setAllUsers) => {
  onSnapshot(userRef, (response) => {
    setAllUsers(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

// get all posts from a user with all posts and the post id
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

// save the corresponding userId and postId to a liked post
export const likePost = (userId, postId, liked) => {
  try {
    let docToLike = doc(likesRef, `${userId}_${postId}`);

    if (liked) {
      deleteDoc(docToLike);
    } else {
      setDoc(docToLike, { userId, postId });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLikesByUser = (userId, postId, setLiked, setLikesCount) => {
  try {
    let likeQuery = query(likesRef, where("postId", "==", postId));

    onSnapshot(likeQuery, (response) => {
      let likes = response.docs.map((doc) => doc.data());
      let likesCount = likes.length;
      const isLiked = likes.some((like) => like.userId === userId);

      setLikesCount(likesCount);
      setLiked(isLiked);
    });
  } catch (error) {
    console.log(error);
  }
};

// add comment
export const commentPost = (object) => {
  addDoc(commentsRef, object)
    .then((res) => {
      toast.success("Success!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editPost = (postId, status) => {
  let postToEdit = doc(postsRef, postId);
  try {
    updateDoc(postToEdit, { status });
    toast.success("Success!");
  } catch (error) {
    console.log(error);
  }
};

// get all comments for each post from the database
export const getComments = (setAllComments, postId) => {
  const commentQuery = query(commentsRef, where("postId", "==", postId));
  onSnapshot(commentQuery, (response) => {
    const comments = response.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setAllComments(comments);
  });
};
