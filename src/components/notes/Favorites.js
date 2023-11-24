import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NotesList from '../notes/NotesList';

const Favorites = () => {
  // Access the authenticated user's ID from the Redux state
  const userId = useSelector((state) => state.firebase.auth?.uid);

  // Connect to the 'notes' collection, filter where 'favorite' is true and 'userId' is the authenticated user's ID
  useFirestoreConnect([
    {
      collection: 'notes',
      where: [
        ['favorite', '==', true],
        ['userId', '==', userId],
      ],
      orderBy: ['createdAt', 'desc'],
      storeAs: 'favnotes',
    },
  ])
  // Access the favorite notes from the Redux store
  const favnotes = useSelector((state) => state.firestore.data['favnotes']);

  // Convert the object of notes into an array
  const fav_array = Object.entries(favnotes || {}).map(([id, note]) => ({ id, ...note }));

  return <NotesList notes={fav_array} />;
};

export default Favorites;
