import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./Helpers/Firebase";
import { login, logout, selectUser } from "./Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //loggedin
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        console.log(userAuth);
      } else {
        //logout
        dispatch(logout());
        console.log(userAuth);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
