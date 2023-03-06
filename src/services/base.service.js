import store from "../store";
import axios from "axios";
import { clearCurrentUser } from "../store/actions/user";
import { useHistory } from "react-router-dom";

export const getUserRole = () => {
  const currentUser = store.getState().user;
  return currentUser.role;
};
