import { useEffect, useState } from "react";
import ConcertService from "../services/concert.service";
import { useSelector } from "react-redux";

import "../components/styling.css";

const ConcertList = () => {
  const [concertList, setConcertList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const currentUser = useSelector((state) => state.user);
  //  const fixedImg="http://localhost:8080/concerts/1/image"
  const BASE_URL = "http://localhost:8080/event/";
  // const showImage=(concert)=>{
  //     console.log("in show image "+concert.id);
  //     ConcertService.getConcertImage(concert.id).
  //     then((res) =>
  //      {
  //          concert.url=URL.createObjectURL(res.data);
  //  //   console.log("url "+concert.url);
  //     setPics(URL.createObjectURL(res.data));
  //    // console.log("pics "+pics);
  // }
  //      ).
  //     catch((err) => console.log("err "+err));

  // }

  useEffect(() => {
    console.log("use effect1");
    ConcertService.getAllConcerts().then((response) => {
      setConcertList(response.data);
    });
  }, []);
  // useEffect(() => {
  //     console.log("use effect2");
  //     console.log("pr list1 "+concertList);
  //     concertList.forEach(concert =>{
  //         showImage(concert);
  //     });
  // },[concertList]);

  // const purchase = (concert) => {
  //     if (!currentUser?.id) {
  //         setErrorMessage('You should login to buy a concert.');
  //         return;
  //     }

  //     const purchase = new Purchase(currentUser.id, concert.id, concert.price);

  //     PurchaseService.savePurchase(purchase).then(() => {
  //         setInfoMessage('Concert Purchased.');
  //     }).catch((err) => {
  //         setErrorMessage('Unexpected error occurred.');
  //         console.log(err);
  //     });
  // };

  const join = (concert) => {
    if (!currentUser?.user_id) {
      setErrorMessage("You should login to join a concert.");
      return;
    }
  };

  return (
    <div className="container mx-5 my-3">
      <h2>Lists of Concerts are as follows:</h2>

      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      {infoMessage && <div className="alert alert-success">{infoMessage}</div>}

      <div className="d-flex flex-wrap">
        {concertList.map((item, ind) => (
          <div key={item.id} className="card m-3 home-card">
            <div className="card-body">
              <div className="card-title text-uppercase">Name: {item.name}</div>
              <div className="card-subtitle text-muted">
                Location: {item.location}
              </div>
              <div className="card-subtitle text-muted">Date: {item.date}</div>
              <div className="card-subtitle text-muted">
                Maximum Capacity: {item.required}
              </div>
              <div className="card-subtitle text-muted">
                Number of People Joined: {item.joined}
              </div>
              <div className="card-subtitle text-muted">Entry: {item.paid}</div>
              {/* <div className="card-subtitle text-muted">{item.charges}</div> */}

              {/* <img src={BASE_URL +item.id +'/image'} style={{'height':'100px','width':'100px'}} alt="No Image!!!"></img> */}
            </div>

            <div className="row mt-2 p-3">
              <div className="col-6 mt-2 ps-4">{`Rs. ${item.charges}`}</div>
              <div className="col-6">
                <button
                  className="btn btn-outline-success w-100"
                  onClick={() => join(item)}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcertList;
