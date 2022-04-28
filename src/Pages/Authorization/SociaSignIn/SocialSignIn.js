import React from "react";
import "./Social.css";
const SocialSignIn = () => {
  return (
    <div>
      <div className="d-flex align-items-center mx-5 px-2">
        <div
          style={{ height: "1px", width: "43%" }}
          className="ms-3 bg-primary"
        ></div>
        <p className="mt-2 px-2">OR</p>
        <div
          style={{ height: "1px", width: "43%" }}
          className="bg-primary"
        ></div>
      </div>
      <div className="social-icons">
        {/* <p className="text-danger">{errorElement}</p> */}
        <button
          style={{ outline: "none" }}
          className="w-75 mb-3 py-2 rounded-pill border-primary"
        >
          <img height={30} src="https://i.ibb.co/wcDHzs7/google.png" alt="" />{" "}
        </button>
        <button
          style={{ background: "#384F81" }}
          className="w-75 mb-3 py-2 rounded-pill border-0"
        >
          <img height={30} src="https://i.ibb.co/W3TbKNF/facebook.png" alt="" />
          <span className="text-white ms-2">Continue With Facebook </span>
        </button>
        <button
          style={{ outline: "none" }}
          className="w-75 py-2 rounded-pill border-secondary"
        >
          <img height={30} src="https://i.ibb.co/zbXRRqj/github.png" alt="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
