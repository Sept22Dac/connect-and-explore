import { BASE_API_URL } from "../common/constants";
import axios from "axios";
import { clearCurrentUser, setCurrentUser } from "../store/actions/user";
import { useSelector } from "react-redux";
import { authHeader, getUserRole } from "./base.service";

const API_URL = BASE_API_URL + "/event";

class SportService {
  //const currentUser = useSelector((state) => state.user);
  saveSport(sport, id) {
    console.log(id);
    return axios.post(API_URL + `/add/sport?id=${id}`, sport, {
      headers: authHeader(),
    });
  }

  //upload sport image
  // uploadSportImage(image, sportId) {
  //   let formData = new FormData();
  //   formData.append('imageFile', image);
  //   console.log('in upload img ' + formData + ' ' + sportId);
  //   return axios
  //     .post(`${API_URL}/${sportId}/image`, formData, {
  //       headers: authImageHeader(),
  //     })
  //     .then((response) => response.data);
  // }

  deleteSport(sport) {
    return axios.delete(API_URL + "/" + sport.id, { headers: getUserRole() });
  }

  getParticularSports(stype) {
    return axios.get(API_URL + `/sports/${stype}`);
  }

  getAllJoinedSports(id) {
    return axios.get(API_URL + `/sportsevents/${id}`, {
      headers: authHeader(),
    });
  }

  getAllCreatedSports(id) {
    return axios.get(API_URL + `/mysportsevents/${id}`, {
      headers: authHeader(),
    });
  }
  getAllSports() {
    return axios.get(API_URL + `/sports`);
  }
  // getSportImage(id) {
  //   return axios.get(`http://localhost:8080/sports/${id}/image`, {
  //     responseType: 'blob',
  //   }); //.then(res=>{setPic(URL.createObjectURL(res.data));//console.log(res.data)
  // }
}

export default new SportService();
