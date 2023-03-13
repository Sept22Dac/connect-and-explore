import { useEffect, useState } from "react";
import SportService from "../services/sport.service";
import { useSelector } from "react-redux";

import "../components/styling.css";
import sportService from "../services/sport.service";
import { joinEvent } from "../services/base.service";

const SportList = (props) => {
  const [type, setType] = useState("");
  const [sportList, setSportList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const currentUser = useSelector((state) => state.user);
  //  const fixedImg="http://localhost:8080/sports/1/image"
  const BASE_URL = "http://localhost:8080/event/";
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

  useEffect(() => {
    console.log("use effect1");

    if (props.stype != null) {
      SportService.getParticularSports(props.stype).then((response) => {
        setSportList(response.data);
      });
    } else {
      sportService.getAllSports().then((response) => {
        setSportList(response.data);
      });
    }
  }, [props.stype]);
  // useEffect(() => {
  //     console.log("use effect2");
  //     console.log("pr list1 "+sportList);
  //     sportList.forEach(sport =>{
  //         showImage(sport);
  //     });
  // },[sportList]);

  // const purchase = (sport) => {
  //     if (!currentUser?.user_id) {
  //         setErrorMessage('You should login to buy a sport.');
  //         return;
  //     }

  //     const purchase = new Purchase(currentUser.id, sport.id, sport.price);

  //     PurchaseService.savePurchase(purchase).then(() => {
  //         setInfoMessage('Sport Purchased.');
  //     }).catch((err) => {
  //         setErrorMessage('Unexpected error occurred.');
  //         console.log(err);
  //     });
  // };

  const join = (sport) => {
    if (!currentUser?.user_id) {
      setErrorMessage("You should login to join a sport.");
      return;
    }

    joinEvent(sport.id)
      .then((response) => {
        setInfoMessage("joined successfully");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("unexpected error occured");
      });
  };

  return (
    <>
      {sportList.length === 0 ? (
        <h2 className="text-center">There are no Events</h2>
      ) : (
        <div className="container mx-5 my-3">
          <h2>Lists of Sports are as follows:</h2>

          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}

          {infoMessage && (
            <div className="alert alert-success">{infoMessage}</div>
          )}

          <div className="d-flex flex-wrap">
            {sportList.map((item, ind) => (
              <div key={item.id} className="card m-3 home-card">
                <div className="card-body">
                  <div className="card-title text-uppercase">
                    Sport: {item.stype}
                  </div>
                  <div className="card-subtitle text-muted">
                    Location: {item.location}
                  </div>
                  <div className="card-subtitle text-muted">
                    Date : {item.date.substring(0, 10)}
                  </div>
                  <div className="card-subtitle text-muted">
                    Time : {item.date.substring(11, 16)}
                  </div>
                  <div className="card-subtitle text-muted">
                    Maximum Capacity: {item.required}
                  </div>
                  <div className="card-subtitle text-muted">
                    Number of People Joined: {item.joined}
                  </div>
                  <br />
                  <div className="card-subtitle text-muted">
                    Details: <br />
                    {item.name}
                  </div>

                  {/* <div className="card-subtitle text-muted">{item.charges}</div> */}

                  {/* <img src={BASE_URL +item.id +'/image'} style={{'height':'100px','width':'100px'}} alt="No Image!!!"></img> */}
                </div>

                <div className="row mt-2 p-3">
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
      )}
    </>
  );
};

export default SportList;
