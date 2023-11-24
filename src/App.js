import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Favorites from './components/notes/Favorites';
import EditForm from './components/notes/EditForm';
import './App.css';
import NoteDetail from './components/notes/NoteDetail';
import Signin from './components/home/SignIn';
import Login from './components/home/login';
import { auth } from './config/fbconfig';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = userAuth
        ? {
            uid: userAuth?.uid,
            email: userAuth?.email,
          }
        : null;

      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/signin" />}
        </Route>
        <Route exact path="/signin">
          {user ? <Redirect to="/" /> : <Signin />}
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        {user && (
          <>
            <Route path="/favorites" component={Favorites} />
            <Route path="/editform/:id" component={EditForm} />
            <Route path="/note/:id" component={NoteDetail} />
          </>
        )}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
