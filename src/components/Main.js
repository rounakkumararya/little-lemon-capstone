import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";

export default function Main() {
  const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;

    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i < 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { availableTime: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTime, initialState);
  function updateTime(state, date) {
    return { availableTime: fetchAPI(new Date()) };
  }
  const navigate = useNavigate();
  function SubmitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }
  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTime={state}
              dispatch={dispatch}
              SubmitForm={SubmitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
