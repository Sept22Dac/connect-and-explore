import { useEffect, useState } from 'react';
import TravelService from '../services/travel.service';
import { useSelector } from 'react-redux';


import '../components/styling.css';

const TravelList = () => {
  const [travelList, setTravelList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [infoMessage, setInfoMessage] = useState('');
    
 

    const currentUser = useSelector(state => state.user);
  //  const fixedImg="http://localhost:8080/travels/1/image"
    const BASE_URL="http://localhost:8080/event/";
    // const showImage=(travel)=>{
    //     console.log("in show image "+travel.id);
    //     TravelService.getTravelImage(travel.id).
    //     then((res) =>
    //      {
    //          travel.url=URL.createObjectURL(res.data);
    //  //   console.log("url "+travel.url);        
    //     setPics(URL.createObjectURL(res.data));
    //    // console.log("pics "+pics);
    // }
    //      ).
    //     catch((err) => console.log("err "+err));        
             
    // }



    useEffect(() => {
        console.log("use effect1");
        TravelService.getAllTravels().then((response) => {
            setTravelList(response.data);

        });
        
        
    }, 
    []);
    // useEffect(() => {
    //     console.log("use effect2");
    //     console.log("pr list1 "+travelList);
    //     travelList.forEach(travel =>{             
    //         showImage(travel);
    //     });
    // },[travelList]);

    // const purchase = (travel) => {
    //     if (!currentUser?.user_id) {
    //         setErrorMessage('You should login to buy a travel.');
    //         return;
    //     }

    //     const purchase = new Purchase(currentUser.id, travel.id, travel.price);

    //     PurchaseService.savePurchase(purchase).then(() => {
    //         setInfoMessage('Travel Purchased.');
    //     }).catch((err) => {
    //         setErrorMessage('Unexpected error occurred.');
    //         console.log(err);
    //     });
    // };


    const join = (travel) =>{
        if(!currentUser?.user_id){
            setErrorMessage('You should login to join a travel.');
            return;
        }
        
    }

    return (

        
        
        <div className="container mx-5 my-3">
            
            <h2 >Lists of Travels are as follows:</h2>

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
            

            <div className="d-flex flex-wrap">
                {travelList.map((item, ind) =>
                    <div key={item.id} className="card m-3 home-card">

                        <div className="card-body">
                            {/* <div className="card-title text-uppercase">Name: {item.name}</div> */}
                            <div className="card-title text-uppercase">Source : {item.fromLocation}</div>
                            <div className="card-title text-uppercase">Destination : {item.toLocation}</div>
                            <div className="card-subtitle text-muted">Date : {item.onDate.substring(0, 10)}</div>
                            <div className="card-subtitle text-muted">Time : {item.onDate.substring(11,16)}</div>
                            <div className="card-subtitle text-muted">Vehicle Type/Medium : {item.mediumType}</div>
                            <div className="card-subtitle text-muted">Maximum Capacity : {item.required}</div>
                            <div className="card-subtitle text-muted">Number of People Joined : {item.joined}</div>
                            <br/>
                            <div className="card-subtitle text-muted">Description :<br/> {item.description}</div>
                            {/* <div className="card-subtitle text-muted">{item.charges}</div> */}
                       
                         {/* <img src={BASE_URL +item.id +'/image'} style={{'height':'100px','width':'100px'}} alt="No Image!!!"></img> */}
                         </div>
                        

                        <div className="row mt-2 p-3">
                            
                            <div className="col-6">
                                <button
                                    className="btn btn-outline-success w-100" onClick={() => join(item)}>
                                    Join
                                </button>
                            </div>
                        </div>

                    </div>
                )}

            </div>
            

                      
        </div>
        
        
        
  );
};

export default TravelList;
