import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../store/actions/user";
import { Role } from "../models/role";

function Header() {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(clearCurrentUser());
    navigate("/login");
  };
  return (
    <div>
      <nav
        class="navbar navbar-light navbar-expand-lg "
        style={{ backgroundColor: "rgb(203, 195, 227)" }}
      >
        <Link className="navbar-brand" to="/home">
          Ce | Connect & Explore
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/sport">
                Sports
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/travel">
                Travel
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/concert">
                Concert
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/business">
                Business
              </Link>
            </li>
          </ul>

          {currentUser?.role === Role.USER && (
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item">
                <Link className="nav-link" to="/profile">
                  {currentUser.fname}
                </Link>
              </li>
            </ul>
          )}
          {currentUser?.role === Role.ADMIN && (
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          )}
          {currentUser && (
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item">
                <Link className="nav-link" onClick={() => logout()}>
                  Sign Out
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
