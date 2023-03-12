import { useEffect, useState } from "react";
import User from "../models/user";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationService from "../services/authentication.service";
import "../asset/login.css";
import { PersonCircle } from "react-bootstrap-icons";

const Signup = () => {
  const [user, setUser] = useState(new User());
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentUser = useSelector((state) => state.user);

  const navigate = useNavigate();

  //mounted
  useEffect(() => {
    if (currentUser?.user_id) {
      //navigate
      navigate("/profile");
    }
  }, []);

  //<input name="x" value="y" onChange=(event) => handleChange(event)>
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => {
      //e.g: prevState ({user: x, pass: x}) + newKeyValue ({user: xy}) => ({user: xy, pass: x})
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSubmitted(true);
    console.log(user);

    if (!user.fname || !user.lname || !user.password || !user.email) {
      return;
    }

    setLoading(true);

    AuthenticationService.register(user)
      .then((_) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        if (error?.response?.status === 409) {
          setErrorMessage("Email already exists!!!");
        } else {
          setErrorMessage("Unexpected error occurred!!");
        }
        setLoading(false);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card ml-auto mr-auto p-3 shadow-lg custom-card">
        <PersonCircle className="ml-auto mr-auto user-icon" />

        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}

        <form
          onSubmit={(e) => handleRegister(e)}
          noValidate
          className={submitted ? "was-validated" : ""}
        >
          <div className="form-group">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              name="fname"
              className="form-control"
              placeholder="firstName"
              value={user.firstName}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">First name is required.</div>
          </div>

          <div className="form-group">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              name="lname"
              className="form-control"
              placeholder="lastName"
              value={user.lastName}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">Last name is required.</div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">Email is required.</div>
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              placeholder="dob"
              value={user.dob}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">dob is required.</div>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              required
              name="gender"
              className="form-control"
              value={user.gender}
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="TRANSGENDER">Transgender</option>
              <option value="OTHER">Other</option>
            </select>

            <div className="invalid-feedback">Please select a gender.</div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">Password is required.</div>
          </div>

          <div className="form-group">
            <label htmlFor="city">city:</label>
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="city"
              value={user.city}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">city is required.</div>
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">Zipcode:</label>
            <input
              type="text"
              name="zipCode"
              className="form-control"
              placeholder="zipcode"
              value={user.zipCode}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">Password is required.</div>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="test"
              name="contact"
              className="form-control"
              placeholder="contact"
              value={user.contact}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">contact is required.</div>
          </div>

          <button className="btn btn-info w-100 mt-3" disabled={loading}>
            Sign Up
          </button>
        </form>

        <Link
          to="/login"
          className="btn btn-link"
          style={{ color: "darkgray" }}
        >
          I have an Account!
        </Link>
      </div>
    </div>
  );
};

export default Signup;
