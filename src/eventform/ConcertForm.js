import React, { useState } from "react";
import Concert from "../models/concert";
import { useSelector } from "react-redux";
import ConcertService from "../services/concert.service";
import { useNavigate } from "react-router-dom";

export default function ConcertForm() {
  const [flag, setFlag] = useState(false);
  const [concert, setConcert] = useState(new Concert());
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const currentUser = useSelector((state) => state.user);

  const navigate = useNavigate();

  const charged = (e) => {
    if (e.target.value === "PAID") {
      setFlag(true);
    }
    if (e.target.value === "FREE") {
      setFlag(false);
    }
  };
  const addConcert = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(concert);

    if (
      !concert.name ||
      !concert.location ||
      !concert.date ||
      !concert.required ||
      !concert.paid ||
      !concert.charges
    ) {
      return;
    }

    setLoading(true);

    setConcert((prevState) => {
      return {
        ...prevState,
        [joined]: 0,
      };
    });
    ConcertService.saveConcert(concert, currentUser?.user_id)
      .then((_) => {
        navigate("/concert/viewConcert");
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

    setConcert((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <>
      <h2>Enter the Concert Details here:</h2>
      <div className="container mt-3">
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form
          onSubmit={(e) => addConcert(e)}
          noValidate
          className={submitted ? "was-validated" : ""}
        >
          <div class="form-group">
            <label for="name">Name of Event</label>
            <input
              type="text"
              value={concert.name}
              onChange={handleChange}
              class="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              required
            />
            <div className="invalid-feedback">Name is required.</div>
          </div>

          <div class="form-group">
            <label for="location">Location of Event</label>
            <input
              type="text"
              value={concert.location}
              onChange={handleChange}
              class="form-control"
              id="location"
              name="location"
              placeholder="Enter Location"
              required
            />
            <div className="invalid-feedback">Location is required.</div>
          </div>
          <div class="form-group">
            <label for="date">Date and time of the Concert :</label>
            &nbsp; &nbsp;
            <input
              type="datetime-local"
              value={concert.date}
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
              value={concert.required}
              onChange={handleChange}
              class="form-control"
              id="capacity"
              name="required"
              required
            />
            <div className="invalid-feedback">Capacity is required.</div>
          </div>
          <div className="form-group">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="paid"
                onChange={handleChange}
                value="PAID"
                name="paid"
                onClick={charged}
              />
              <label class="form-check-label" for="ipaid">
                Paid
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="free"
                onChange={handleChange}
                value="FREE"
                name="paid"
                onClick={charged}
              />
              <label class="form-check-label" for="free">
                Free
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="charges">Charges in rupees</label>
            <input
              type="number"
              class="form-control"
              value={concert.charges}
              onChange={handleChange}
              id="charges"
              name="charges"
              required={flag}
              disabled={!flag}
            />
            <div className="invalid-feedback">Charges is required.</div>
          </div>

          <button type="submit" class="btn btn-success" disabled={loading}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
