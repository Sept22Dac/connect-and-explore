import { useState } from "react";
import UserDetails from "../../list/UserDetails";
import AdminService from "../../services/admin.service";
import AdminDetails from "../../list/AdminDetails";
import { Link, Routes, Route } from "react-router-dom";
import UsersList from "../../list/UsersList";

const Admin = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  return (
    <div className="my-2">
      <h1 className="text-center border bg-dark text-warning">Admin Page</h1>

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
              to="/admin"
              class="list-group-item list-group-item-action"
            >
              Admin Details
            </Link>
            <Link
              tag="a"
              to="/admin/users"
              class="list-group-item list-group-item-action"
            >
              All users
            </Link>
          </div>
          <div class="col-9">
            <Routes>
              <Route path="/" element={<AdminDetails />} />
              <Route path="/users" element={<UsersList />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
