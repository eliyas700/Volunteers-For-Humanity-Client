import React, { useEffect, useState } from "react";
import Event from "./Event/Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="row">
      {events.map((event) => (
        <Event key={event.id} event={event}></Event>
      ))}
    </div>
  );
};

export default Events;
