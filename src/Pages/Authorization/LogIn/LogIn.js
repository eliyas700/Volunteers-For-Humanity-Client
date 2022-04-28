import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle";

const LogIn = () => {
  return (
    <div>
      <PageTitle title="LogIn"></PageTitle>
      <div className="login d-flex justify-content-center">
        <div className="row">
          <div className="custom-logo">
            <Link to="/">
              <img
                src="https://i.ibb.co/nPQWDtk/pngwing-com.png"
                height="70"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center py-5 pt-2"
        style={{ minHeight: "400px" }}
      >
        <div className="card-section card w-50 mt-5 d-flex justify-content-center align-items-center">
          <div className="card-body ">
            <h3>Welcome Back</h3> <br />
          </div>
          <Form className="mb-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <p>
              Forget Password?
              <small className="btn btn-link text-warning ">
                Reset Password
              </small>
            </p>

            <Button className="btn  btn-primary px-4" type="submit">
              Log In
            </Button>
          </Form>
          <div className="">
            <button className="login-button ">
              <img
                className="google-button"
                src="https://www.freepngimg.com/thumb/google/66903-google-pay-gboard-platform-logo-cloud.png"
                height="30"
                alt=""
              />
              Continue with Google
            </button>
          </div>
          <br />
          <p>
            Don't have an account? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
