import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Social.css";
const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorMsg;
  if (error) {
    errorMsg = <p>{error?.message}</p>;
  }
  if (user) {
    navigate("/");
  }
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
      <div className="social-icons w-75 ">
        <p className="text-danger">{errorMsg}</p>
        <button
          onClick={() => signInWithGoogle()}
          style={{ outline: "none" }}
          className="w-75  mb-3 py-2 rounded-pill border-primary"
        >
          <img height={30} src="https://i.ibb.co/wcDHzs7/google.png" alt="" />
          <span className="text-black ms-2">Continue With Google</span>
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
          <img height={30} src="https://i.ibb.co/zbXRRqj/github.png" alt="" />
          <span className="text-black ms-2">Continue With GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
