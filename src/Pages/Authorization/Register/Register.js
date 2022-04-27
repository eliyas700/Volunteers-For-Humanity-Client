import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle";

const Register = () => {
  return (
    <div className="mb-4">
      <PageTitle title="Register"></PageTitle>
      <div className="container mb-5">
        <div className="login d-flex justify-content-center">
          <div className="row">
            <div className="mt-5">
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
        <br />
        <div className="row d-flex justify-content-center">
          <div className="card w-50 mt-5">
            <div className="card-body px-lg-5">
              <h4 className="mb-2">Register as a Volunteer</h4>
              <form
                // onSubmit={handleFormSubmit}
                className="text-center"
                action=""
              >
                <div className="md-form mt-3">
                  <input
                    name="name"
                    type="text "
                    // onBlur={handleOnChange}
                    placeholder="Full Name"
                    // defaultValue={displayName}
                    className="form-control mb-3"
                  />
                </div>
                <div className="md-form">
                  <input
                    name="email"
                    type="email"
                    // onBlur={handleOnChange}
                    placeholder="Email"
                    // defaultValue={email}
                    className="form-control"
                  />
                </div>
                <div className="md-form mt-3">
                  <input
                    name="date"
                    type="text"
                    // onBlur={handleOnChange}
                    placeholder="mm-dd-yyy"
                    // defaultValue={item.date}
                    className="form-control"
                  />
                </div>
                <div className="md-form mt-3">
                  <input
                    name="description"
                    type="text"
                    // onBlur={handleOnChange}
                    placeholder="Description"
                    // defaultValue={item.description}
                    className="form-control"
                  />
                </div>
                <div className="md-form mt-3">
                  <input
                    name="title"
                    type="text"
                    // onBlur={handleOnChange}
                    placeholder="Title"
                    // defaultValue={item.title}
                    className="form-control"
                  />
                </div>
                <button className="btn btn-success mt-3" type="submit">
                  Registration
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
