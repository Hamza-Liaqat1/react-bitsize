import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import pic from "../assets/images/card.svg"
const Home = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="card-wrapper">
          <div className="content">
            <h1>
              Learn how to apply psychology based tips and notions in your daily
              life to become a better version of yourself.
            </h1>
            <p>Over 300 cards with bite-sized tips to learn from</p>

            <Link to="/selection">
              <a>Start</a>
            </Link>
          </div>
          <div className="card-image-wrap">
            <img src={pic} alt="" className="home-card" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
