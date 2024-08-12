import React from "react";
import BookingForm from "./BookingForm";

export default function Booking(props) {
  return (
    <BookingForm
      availableTime={props.availableTime}
      dispatch={props.dispatch}
      SubmitForm={props.SubmitForm}
    />
  );
}
