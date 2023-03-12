import { useEffect, useState } from 'react';
import SportService from '../services/sport.service';
import { useSelector } from 'react-redux';
import sport from '../models/sport';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import './styling.css';
import SportList from '../list/SportList';
import SportForm from '../eventform/SportForm';

const Sport = () => {

  const [sportList, setSportList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [infoMessage, setInfoMessage] = useState('');
    
 

    const currentUser = useSelector(state => state.user);
  //  const fixedImg="http://localhost:8080/sports/1/image"
    const BASE_URL="http://localhost:8080/event/";
    // const showImage=(sport)=>{
    //     console.log("in show image "+sport.id);
    //     SportService.getSportImage(sport.id).
    //     then((res) =>
    //      {
    //          sport.url=URL.createObjectURL(res.data);
    //  //   console.log("url "+sport.url);        
    //     setPics(URL.createObjectURL(res.data));
    //    // console.log("pics "+pics);
    // }
    //      ).
    //     catch((err) => console.log("err "+err));        
             
    // }



  

    return (
        <div className='my-2'>
            

        <h1 className="text-center border bg-dark text-warning">Sport Page</h1>
        
        <div className="container mx-5 my-3">
            
            

            {errorMessage &&
            <div className="alert alert-danger">
                {errorMessage}
            </div>
            }

            {infoMessage &&
            <div className="alert alert-success">
                {infoMessage}
            </div>
            }
            <div class="row">
                <div class="col-3">
                
                    <Link to="#" class="list-group-item list-group-item-action active">Menu</Link>
                    <Link tag='a'  to="/sport/viewFootball" class="list-group-item list-group-item-action">View All Football Events</Link>
                    <Link tag='a'  to="/sport/ViewCricket" class="list-group-item list-group-item-action">View All Cricket Events</Link>
                    <Link tag='a'  to="/sport/viewBadminton" class="list-group-item list-group-item-action">View All Badminton Events</Link>
                    <Link tag='a' to="/sport/addSport" class="list-group-item list-group-item-action">Create a Sport Event</Link>
                    
                
                </div>
            <div class="col-9">
                <Routes>
                <Route path="/" element={<SportList stype=""/>}/>
                <Route path='/viewFootball' element={<SportList stype="FOOTBALL"/>} />
                <Route path='/viewCricket' element={<SportList stype="CRICKET"/>} />
                <Route path='/viewBadminton' element={<SportList stype="BADMINTON"/>} />
                <Route path='/addSport' element={<SportForm/>} />      
                </Routes>
            </div>
            
            </div>

                      
        </div>
        
        </div>
        
        
        
  );
};

export default Sport;
