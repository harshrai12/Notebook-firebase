import React, { useEffect } from 'react';
import Form from './Form';
import NotesList from '../notes/NotesList';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

const Home = () => {
  const userId = useSelector((state) => state.firebase.auth.uid);

  // Conditionally call useFirestoreConnect based on userId
  useFirestoreConnect(
    userId
      ? [
          {
            collection: 'notes',
            where: ['userId', '==', userId],
            orderBy: ['createdAt', 'desc'],
            storeAs: 'filteredNotes',
          },
        ]
      : []
  );

  const notes = useSelector((state) => state.firestore.ordered.filteredNotes);

  return (
    <div className="container ">
      <div className="row center-align">
        <div className="col s7">
          <Form />
        </div>
        <div className="col s5">
          <NotesList notes={notes} />
        </div>
      </div>
    </div>
  );
};

export default Home;





