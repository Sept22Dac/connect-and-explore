import React, { useState } from "react";
//import { User } from "../../Models/User";
import { Link, Route, Routes } from "react-router-dom";
import MyEvents from "../../list/MyEvents";
import JoinedEvents from "../../list/JoinedEvents";
import UserDetails from "../../list/UserDetails";

function ProfilePage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  return (
    <div className="my-2">
      <h1 className="text-center border bg-dark text-warning">Profile Page</h1>

      <div className="container mx-5 my-3">
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}

        {infoMessage && (
          <div className="alert alert-success">{infoMessage}</div>
        )}
        <div class="row">
          <div class="col-3">
            <Link to="#" class="list-group-item list-group-item-action active">
              Menu
            </Link>
            <Link
              tag="a"
              to="/profile"
              class="list-group-item list-group-item-action"
            >
              User Details
            </Link>
            <Link
              tag="a"
              to="/profile/myevents"
              class="list-group-item list-group-item-action"
            >
              My Events
            </Link>
            <Link
              tag="a"
              to="/profile/joinedevents"
              class="list-group-item list-group-item-action"
            >
              Joined Events
            </Link>
          </div>
          <div class="col-9">
            <Routes>
              <Route path="/" element={<UserDetails />} />
              <Route path="/myevents" element={<MyEvents />} />
              <Route path="/joinedevents" element={<JoinedEvents />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
