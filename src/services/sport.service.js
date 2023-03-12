import { BASE_API_URL } from '../common/constants';
import axios from 'axios';
import { getUserRole } from './base.service';

const API_URL = BASE_API_URL + '/sports';

class SportService {
  saveSport(sport) {
    return axios.post(API_URL, sport, { headers: getUserRole() });
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
    return axios.delete(API_URL + '/' + sport.id, { headers: getUserRole() });
  }

  getAllSports() {
    return axios.get(API_URL);
  }
  // getSportImage(id) {
  //   return axios.get(`http://localhost:8080/sports/${id}/image`, {
  //     responseType: 'blob',
  //   }); //.then(res=>{setPic(URL.createObjectURL(res.data));//console.log(res.data)
  // }
}

export default new SportService();
