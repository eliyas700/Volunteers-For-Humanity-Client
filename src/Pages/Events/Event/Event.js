import React from "react";
import "./Event.css";
const Event = ({ event }) => {
  const { title, img, description } = event;

  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div style={{ backgroundImage: `url(${img})` }} className="single-post">
        <div
          className="show-title"
          style={{
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16
            )}`,
          }}
        >
          <p className="text-center">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
