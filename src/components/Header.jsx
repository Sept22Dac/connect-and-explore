import "bootstrap/dist/css/bootstrap.min.css";
import "../asset/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-4 col-md-12 my-header">
          <span className="logo">Ce</span>
          <span className="logo-text">Connect & Explore</span>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12  my-navbar ">
          <Link className="active" to="/home">
            Home
          </Link>
          <Link to="/sports">Sports</Link>
          <Link to="/travel">Travel</Link>
          <Link to="/concert">Concerts</Link>
          <Link to="/business">Business</Link>
        </div>

        <div className="col-lg-2 col-md-6 register d-flex justify-content-end">
          <Link to="login">Login</Link>
          <Link to="signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
