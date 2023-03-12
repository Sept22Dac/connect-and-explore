import React, { useState } from "react";
import Sport from "../models/sport";
import { useSelector } from "react-redux";
import SportService from "../services/sport.service";
import { useNavigate } from "react-router-dom";

export default function SportForm() {
  const [flag, setFlag] = useState(false);
  const [sport, setSport] = useState(new Sport());
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const currentUser = useSelector((state) => state.user);

  const navigate = useNavigate();

  const addSport = (e) => {
    e.preventDefault();

    setSubmitted(true);
    console.log(sport);

    if (
      !sport.stype ||
      !sport.location ||
      !sport.date ||
      !sport.name ||
      !sport.required
    ) {
      return;
    }

    setLoading(true);

    SportService.saveSport(sport, currentUser?.user_id)
      .then((_) => {
        navigate("/sport");
      })
      .catch((error) => {
        console.log(error);
        if (error?.response?.status === 409) {
          setErrorMessage("Event already exists");
        } else {
          setErrorMessage("Unexpected error occured");
        }
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(currentUser);

    setSport((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <>
      <h2>Enter the Sport Details here:</h2>
      <div className="container mt-3">
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form
          onSubmit={(e) => addSport(e)}
          noValidate
          className={submitted ? "was-validated" : ""}
        >
          <div class="form-group">
            <label for="stype">Sport :</label> &nbsp; &nbsp;&nbsp;
            <select
              required
              id="stype"
              name="stype"
              className="form-control"
              value={sport.stype}
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select Sport</option>

              <option value="BADMINTON">Badminton</option>
              <option value="CRICKET">Cricket</option>
              <option value="FOOTBALL">Football</option>
            </select>
            <div className="invalid-feedback">Sport Type is required.</div>
          </div>

          <div class="form-group">
            <label for="location">Location</label>
            <input
              type="text"
              value={sport.location}
              onChange={handleChange}
              class="form-control"
              id="location"
              name="location"
              required
            />
            <div className="invalid-feedback">Location is required.</div>
          </div>

          <div class="form-group">
            <label for="date">Date and time of the Sport :</label>
            &nbsp; &nbsp;
            <input
              type="datetime-local"
              value={sport.date}
              onChange={handleChange}
              id="date"
              name="date"
              required
            />
            <div className="invalid-feedback">Date & Time is required.</div>
          </div>

          <div class="form-group">
            <label for="capacity">Maximum number of participants</label>
            <input
              type="number"
              value={sport.required}
              onChange={handleChange}
              class="form-control"
              id="capacity"
              name="required"
              required
            />
            <div className="invalid-feedback">Capacity is required.</div>
          </div>

          <div class="form-group">
            <label for="description">Details :</label>
            <textarea
              rows={3}
              value={sport.name}
              onChange={handleChange}
              class="form-control"
              id="description"
              name="name"
              placeholder="Enter Details Like Name of Person, Contact details, price per person (if valid) etc"
              required
            />
            <div className="invalid-feedback">Details are required.</div>
          </div>

          <button type="submit" class="btn btn-success" disabled={loading}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
