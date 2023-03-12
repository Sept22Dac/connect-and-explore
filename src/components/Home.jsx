import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import travel from "../asset/images/travel2.jpg";
import sports from "../asset/images/sports.jpg";
import concert from "../asset/images/concerts.jpg";
import "../asset/style.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleIndicators"
        class="carousel slide row"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active card ">
            <img class="d-block w-100" src={sports} alt="First slide" />
            {/* <a className="caption-text" href="#">
              Explore Sports Events near you !
            </a> */}
            <div class="card-img-overlay">
              <h2>Explore Sports Events near you !</h2>
              <NavLink className="btn-primary" to="/sport">
                Lets Go!
              </NavLink>
            </div>
          </div>
          <div class="carousel-item card">
            <img class="d-block w-100" src={travel} alt="Second slide" />
            <div class="card-img-overlay">
              <h2 className="travel-cap">Find Travel mates near you!</h2>
              <NavLink className="btn-primary" to="/travel">
                Lets Go!
              </NavLink>
            </div>
          </div>
          <div class="carousel-item card">
            <img class="d-block w-100" src={concert} alt="Third slide" />
            <div class="card-img-overlay">
              <h2 className="concert-cap">
                Explore Clubs , Concerts Events near you !
              </h2>
              <NavLink className="btn-primary" to="/concert">
                Lets Go!
              </NavLink>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
