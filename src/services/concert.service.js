import { BASE_API_URL } from '../common/constants';
import axios from 'axios';
import { clearCurrentUser, setCurrentUser } from "../store/actions/user";
import { useSelector } from 'react-redux';
import { authHeader, getUserRole } from './base.service';

const API_URL = BASE_API_URL + '/event';

class ConcertService {
  //const currentUser = useSelector((state) => state.user);
  saveConcert(concert,id) {
    console.log(id);
  return axios.post(API_URL+ `/add/concert?id=${id}`,concert, { headers: authHeader() });
  }

  //upload concert image
  // uploadConcertImage(image, concertId) {
  //   let formData = new FormData();
  //   formData.append('imageFile', image);
  //   console.log('in upload img ' + formData + ' ' + concertId);
  //   return axios
  //     .post(`${API_URL}/${concertId}/image`, formData, {
  //       headers: authImageHeader(),
  //     })
  //     .then((response) => response.data);
  // }

  deleteConcert(concert) {
    return axios.delete(API_URL + '/' + concert.id, { headers: getUserRole() });
  }

  getAllConcerts() {
    return axios.get(API_URL + '/concerts');
  }
  // getConcertImage(id) {
  //   return axios.get(`http://localhost:8080/concerts/${id}/image`, {
  //     responseType: 'blob',
  //   }); //.then(res=>{setPic(URL.createObjectURL(res.data));//console.log(res.data)
  // }
}

export default new ConcertService();
