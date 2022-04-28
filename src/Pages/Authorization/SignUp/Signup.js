import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTitle";
import SocialSignIn from "../SociaSignIn/SocialSignIn";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [errorMsg, setError] = useState("");
  if (user) {
    navigate("/");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirmPassword.value;
    if (password.length < 6) {
      return setError("Password Must have at least 6 Characters");
    }
    if (password === confirmPass) {
      createUserWithEmailAndPassword(email, password);
      updateProfile({ displayName: name });
      toast("Creating Account");
      event.target.reset();
    } else {
      setError("Sorry Password Did'nt Match");
    }
  };
  return (
    <div>
      <div className=" container bg-white w-50 mt-3 pt-3 pb-5">
        <PageTitle title="Sign Up"></PageTitle>
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
        <h4 className="text-primary my-3 text-center">Create an Account</h4>
        <Form onSubmit={handleCreateUser} className="w-75 mx-auto text-start">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Type Your Name"
            />

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Invaild Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Invaild Email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              type="password"
              placeholder="Password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Invaild Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              name="confirmPassword"
              type="password"
              placeholder="Re-type Your Password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Password Didnt Match.
            </Form.Control.Feedback>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={() => setChecked(!checked)}
                className={!checked ? "text-danger" : "text-success"}
                label="Accept the terms and conditions of Genius Car Service"
              />
            </Form.Group>
          </Form.Group>
          <p className="text-danger">{errorMsg}</p>
          <Button variant="primary" disabled={!checked} type="submit">
            Register Now
          </Button>
        </Form>
        <p className="py-3">
          Already have an account?{" "}
          <Link className="text-warning text-decoration-none" to="/login">
            Log In
          </Link>
        </p>
        <div>
          <SocialSignIn></SocialSignIn>
        </div>
      </div>
    </div>
  );
};

export default Signup;
