import { useEffect, useState } from "react";
import TravelService from "../services/travel.service";
import { useSelector } from "react-redux";
import travel from "../models/travel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styling.css";
import TravelList from "../list/TravelList";
import TravelForm from "../eventform/TravelForm";

const Travel = () => {
  const [travelList, setTravelList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const currentUser = useSelector((state) => state.user);
  //  const fixedImg="http://localhost:8080/travels/1/image"
  const BASE_URL = "http://localhost:8080/event/";
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

  return (
    <div className="my-2">
      <h1 className="text-center border bg-dark text-warning">Travel Events</h1>

      <div className="container mx-5 my-3">
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}

        {infoMessage && (
          <div className="alert alert-success">{infoMessage}</div>
        )}
        <div class="row">
          <div class="col-3">
            <Link to="#" class="list-group-item list-group-item-action active">
              Menu
            </Link>
            <Link
              tag="a"
              to="/travel/viewTravel"
              class="list-group-item list-group-item-action"
            >
              View All Travel Events
            </Link>
            <Link
              tag="a"
              to="/travel/addTravel"
              class="list-group-item list-group-item-action"
            >
              Create a Travel Event
            </Link>
          </div>
          <div class="col-9">
            <Routes>
              <Route path="/" element={<TravelList />} />
              <Route path="/viewTravel" element={<TravelList />} />
              <Route path="/addTravel" element={<TravelForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
