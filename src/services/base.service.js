import store from "../store";
import axios from "axios";
import { clearCurrentUser } from "../store/actions/user";
import { useHistory } from "react-router-dom";

export const getUserRole = () => {
  const currentUser = store.getState().user;
  return currentUser.role;
};

export const authHeader = () => {
  const currentUser = store.getState().user;

  return {
    'Content-Type': 'application/json',
    authorization: 'Bearer ' + currentUser?.token,
  };
};
