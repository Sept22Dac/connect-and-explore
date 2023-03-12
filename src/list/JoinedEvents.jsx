import { useEffect, useState } from "react";
import ConcertService from "../services/concert.service";
import TravelService from "../services/travel.service";
import SportService from "../services/sport.service";
import { useSelector } from "react-redux";
const JoinedEvents = () => {
  const [sportsList, setSportsList] = useState([]);
  const [travelList, setTravelList] = useState([]);
  const [concertList, setConcertList] = useState([]);

  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    console.log("use effect1");
    ConcertService.getAllJoinedConcerts(currentUser?.user_id).then(
      (response) => {
        setConcertList(response.data);
      }
    );
    SportService.getAllJoinedSports(currentUser?.user_id).then((response) => {
      setSportsList(response.data);
    });
    TravelService.getAllJoinedTravels(currentUser?.user_id).then((response) => {
      setTravelList(response.data);
    });
  }, []);

  const optOut = (item) => {};

  return (
    <div>
      <div className="d-flex flex-wrap">
        {travelList.map((item, ind) => (
          <div key={item.id} className="card m-3 home-card">
            <div className="card-body">
              {/* <div className="card-title text-uppercase">Name: {item.name}</div> */}
              <div className="card-title text-uppercase">
                Source : {item.fromLocation}
              </div>
              <div className="card-title text-uppercase">
                Destination : {item.toLocation}
              </div>
              <div className="card-subtitle text-muted">
                Date : {item.onDate.substring(0, 10)}
              </div>
              <div className="card-subtitle text-muted">
                Time : {item.onDate.substring(11, 16)}
              </div>
              <div className="card-subtitle text-muted">
                Vehicle Type/Medium : {item.mediumType}
              </div>
              <div className="card-subtitle text-muted">
                Maximum Capacity : {item.required}
              </div>
              <div className="card-subtitle text-muted">
                Number of People Joined : {item.joined}
              </div>
              <br />
              <div className="card-subtitle text-muted">
                Description :<br /> {item.description}
              </div>
              {/* <div className="card-subtitle text-muted">{item.charges}</div> */}

              {/* <img src={BASE_URL +item.id +'/image'} style={{'height':'100px','width':'100px'}} alt="No Image!!!"></img> */}

              <div className="row mt-2 p-3">
                <div className="col-6 mt-2 ps-4">{}</div>
                <div className="col-6">
                  <button
                    className="btn btn-outline-success w-100"
                    onClick={() => optOut(item)}
                  >
                    OptOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <hr></hr> */}

        {concertList.map((item, ind) => (
          <div key={item.id} className="card m-3 home-card">
            <div className="card-body">
              <div className="card-title text-uppercase">Name: {item.name}</div>
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
              <div className="card-subtitle text-muted">Entry: {item.paid}</div>
              {/* <div className="card-subtitle text-muted">{item.charges}</div> */}

              {/* <img src={BASE_URL +item.id +'/image'} style={{'height':'100px','width':'100px'}} alt="No Image!!!"></img> */}
            </div>

            <div className="row mt-2 p-3">
              <div className="col-6 mt-2 ps-4">{`Rs. ${item.charges}`}</div>
              <div className="col-6">
                <button
                  className="btn btn-outline-success w-100"
                  onClick={() => optOut(item)}
                >
                  OptOut
                </button>
              </div>
            </div>
          </div>
        ))}

        {sportsList.map((item, ind) => (
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
                  onClick={() => optOut(item)}
                >
                  OptOut
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinedEvents;
