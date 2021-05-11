import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../Components/Nav/Nav";
import { selectUser } from "../../Redux/userSlice";
import { auth } from "../../Helpers/Firebase";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://i.pinimg.com/736x/d2/b0/bf/d2b0bf0b5b31b1d36c7edfcaa93ff98c.jpg"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button
                onClick={() => auth.signOut()}
                class="profileScreen__signOut"
              >
                SignOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
