import store from "../store";
import axios from "axios";
import { clearCurrentUser } from "../store/actions/user";
import { useHistory } from "react-router-dom";
import { BASE_API_URL } from "../common/constants";

export const getUserRole = () => {
  const currentUser = store.getState().user;
  return currentUser.role;
};

export const authHeader = () => {
  const currentUser = store.getState().user;

  return {
    "Content-Type": "application/json",
    authorization: "Bearer " + currentUser?.token,
  };
};

export const joinEvent = (eventid) => {
  const currentUser = store.getState().user;

  return axios.put(
    BASE_API_URL +
      `/event/joinEvent?user_id=${currentUser?.user_id}&event_id=${eventid}`,
    { headers: authHeader() }
  );
};

export const optOutEvent = (event_id) => {
  const currentUser = store.getState().user;
  return axios.delete(
    BASE_API_URL +
      `/event/optOut?user_id=${currentUser?.user_id}&event_id=${event_id}`,
    {
      headers: authHeader(),
    }
  );
};

export const removeEventById = (event_id) => {
  return axios.delete(BASE_API_URL + `/event/delete/${event_id}`, {
    headers: authHeader(),
  });
};
