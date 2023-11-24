// actions/notesActions.js
export const addNote = (note) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
      const firestore = getFirestore();
      const userId = getState().firebase.auth.uid;
  
      firestore
        .collection("notes")
        .add({
          ...note,
          userId: userId,
          favorite: false,
          createdAt: new Date(),
        })
        .then(() => {
          // You can dispatch an action if needed
          // dispatch({ type: "CREATE_NOTE_SUCCESS" });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  
  // Other actions remain unchanged
  
  
  export const deleteNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
      const firestore = getFirestore();
      const userId = getState().firebase.auth.uid;
  
      firestore
        .collection("notes")
        .doc(note.id)
        .delete()
        .then(() => {
          console.log("delete successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  
  // actions/notesActions.js
export const getFavNotes = () => {
    return (dispatch, getState, { getFirestore }) => {
      const firestore = getFirestore();
      const userId = getState().firebase.auth.uid;
  
      firestore
        .collection("notes")
        .where("userId", "==", userId)
        .get()
        .then((snapshot) => {
          const favNotes = [];
          snapshot.docs.forEach((doc) => {
            favNotes.push({ id: doc.id, ...doc.data() });
          });
          dispatch({ type: 'GET_FAV_NOTES', favNotes });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  
  // Other actions remain unchanged
  
  
  export const toggleFav = (note) => {
    return (dispatch, getState, { getFirestore }) => {
      const favstatus = !note.favorite;
      const firestore = getFirestore();
      const userId = getState().firebase.auth.uid;
  
      firestore
        .collection("notes")
        .doc(note.id)
        .update({
          favorite: favstatus,
        });
    };
  };
  
  export const updateNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
      const firestore = getFirestore();
      const userId = getState().firebase.auth.uid;
  
      firestore
        .collection("notes")
        .doc(note.id)
        .update({
          title: note.title,
          content: note.content,
        })
        .then(() => {
          console.log("update success");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  
  