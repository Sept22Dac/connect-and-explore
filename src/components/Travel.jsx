import { useEffect, useState } from 'react';
import TravelService from '../services/travel.service';
import { useSelector } from 'react-redux';
import travel from '../models/travel';
import './styling.css';

const Travel = () => {
  const [travelList, setTravelList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [infoMessage, setInfoMessage] = useState('');
    
    const [pics, setPics] = useState({});

    const currentUser = useSelector(state => state.user);
  //  const fixedImg="http://localhost:8080/travels/1/image"
    const BASE_URL="http://localhost:8080/travels/";
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
    //     if (!currentUser?.id) {
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

    return (
        <div className="container p-3">

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
                            <div className="card-title text-uppercase">{item.name}</div>
                            <div className="card-subtitle text-muted">{item.description}</div>
                       
                         <img src={BASE_URL +item.id +'/image'} style={{'height':'100px','width':'100px'}} alt="No Image!!!"></img>
                         </div>
                        

                        <div className="row mt-2 p-3">
                            <div className="col-6 mt-2 ps-4">
                                {`Rs. ${item.price}`}
                            </div>
                            <div className="col-6">
                                <button
                                    className="btn btn-outline-success w-100" onClick={() => purchase(item)}>
                                    Buy
                                </button>
                            </div>
                        </div>

                    </div>
                )}

            </div>

        </div>
  );
};

export default Travel;
