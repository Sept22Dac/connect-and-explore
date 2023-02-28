import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Header.css";
import { Link } from "react-router-dom";
// import logo from "../images/Ce.png";
// import $ from "jquery";

const Header = () => {
  // const showText = () => {
  //   $(document).ready(function () {
  //     $(".logo-text").fadeIn("slow");
  //   });
  // };

  // const hideText = () => {
  //   $(".logo-text").css({
  //     display: "none",
  //   });
  // };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-4 col-md-6 my-header">
          <span className="logo">Ce</span>
          <span className="logo-text">Connect & Explore</span>
        </div>
        <div className="col-lg-6 my-navbar d-flex justify-content-center">
          <Link className="active" to="/home">
            Home
          </Link>
          <Link to="/sports">Sports</Link>
          <Link to="/travel">Travel</Link>
          <Link to="/concert">Concerts</Link>
          <Link to="/business">Business</Link>
        </div>

        <div className="col-lg-2 register d-flex justify-content-end">
          <Link to="login">Login</Link>
          <Link to="signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
