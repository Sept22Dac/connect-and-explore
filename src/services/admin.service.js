import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader, getUserRole } from "./base.service";

const API_URL = BASE_API_URL + "/user";
class AdminService {
  showUsers() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  deleteUser(user_id) {
    return axios.delete(API_URL + `/${user_id}`, { headers: authHeader() });
  }
}

export default new AdminService();
