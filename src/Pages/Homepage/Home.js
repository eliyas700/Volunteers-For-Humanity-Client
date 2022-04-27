import React from "react";
import Events from "../Events/Events";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="row py-3  align-items-center justify-content-between">
        <div className="col-12 col-lg-5 ">
          <div className="w-75 mx-auto text-center ">
            <h1
              style={{ color: "rgba(25, 42, 86,1.0)" }}
              className="fw-bold my-3 text-center "
            >
              Grow Up By Helping People In Need
            </h1>
            <p
              style={{ color: "rgba(25, 42, 86,1.0)", fontWeight: "500" }}
              className=" fs-6"
            >
              You may not have saved a lot of money in your life, but if you
              have saved a lot of heartaches for other folks, you are a pretty
              rich man.”
            </p>
            <button className="btn btn-primary px-3">Explore Now</button>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <img
            className="w-100"
            src="https://i.ibb.co/8j8RbD6/6660-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <Events></Events>
      </div>
    </div>
  );
};

export default Home;
