import { BASE_API_URL } from '../common/constants';
import axios from 'axios';
import { getUserRole } from './base.service';

const API_URL = BASE_API_URL + '/travels';

class TravelService {
  saveTravel(travel) {
    return axios.post(API_URL, travel, { headers: getUserRole() });
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
    return axios.delete(API_URL + '/' + travel.id, { headers: getUserRole() });
  }

  getAllTravels() {
    return axios.get(API_URL);
  }
  // getTravelImage(id) {
  //   return axios.get(`http://localhost:8080/travels/${id}/image`, {
  //     responseType: 'blob',
  //   }); //.then(res=>{setPic(URL.createObjectURL(res.data));//console.log(res.data)
  // }
}

export default new TravelService();
