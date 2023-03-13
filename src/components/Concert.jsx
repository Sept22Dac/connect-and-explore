import { useEffect, useState } from "react";
import ConcertService from "../services/concert.service";
import { useSelector } from "react-redux";
import concert from "../models/concert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styling.css";
import ConcertList from "../list/ConcertList";
import ConcertForm from "../eventform/ConcertForm";

const Concert = () => {
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

  return (
    <div className="my-2">
      <h1 className="text-center border bg-dark text-warning">
        Concert Events
      </h1>

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
              to="/concert/viewConcert"
              class="list-group-item list-group-item-action"
            >
              View All Concert Events
            </Link>
            <Link
              tag="a"
              to="/concert/addConcert"
              class="list-group-item list-group-item-action"
            >
              Create a Concert Event
            </Link>
          </div>
          <div class="col-9">
            <Routes>
              <Route path="/" element={<ConcertList />} />
              <Route path="/viewConcert" element={<ConcertList />} />
              <Route path="/addConcert" element={<ConcertForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concert;
