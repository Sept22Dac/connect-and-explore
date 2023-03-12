import { BASE_API_URL } from "../common/constants";
import axios from "axios";
import { clearCurrentUser, setCurrentUser } from "../store/actions/user";
import { useSelector } from "react-redux";
import { authHeader, getUserRole } from "./base.service";

const API_URL = BASE_API_URL + "/event";

class TravelService {
  //const currentUser = useSelector((state) => state.user);
  saveTravel(travel, id) {
    console.log(id);
    return axios.post(API_URL + `/add/travel?id=${id}`, travel, {
      headers: authHeader(),
    });
  }

  getAllJoinedTravels(id) {
    return axios.get(API_URL + `/travelevents/${id}`, {
      headers: authHeader(),
    });
  }

  getAllCreatedTravels(id) {
    return axios.get(API_URL + `/mytravelevents/${id}`, {
      headers: authHeader(),
    });
  }

  //upload travel image
  // uploadTravelImage(image, travelId) {
  //   let formData = new FormData();
  //   formData.append('imageFile', image);
  //   console.log('in upload img ' + formData + ' ' + travelId);
  //   return axios
  //     .post(`${API_URL}/${travelId}/image`, formData, {
  //       headers: authImageHeader(),
  //     })
  //     .then((response) => response.data);
  // }

  deleteTravel(travel) {
    return axios.delete(API_URL + "/" + travel.id, { headers: getUserRole() });
  }

  getAllTravels() {
    return axios.get(API_URL + "/travels");
  }
  // getTravelImage(id) {
  //   return axios.get(`http://localhost:8080/travels/${id}/image`, {
  //     responseType: 'blob',
  //   }); //.then(res=>{setPic(URL.createObjectURL(res.data));//console.log(res.data)
  // }
}

export default new TravelService();
