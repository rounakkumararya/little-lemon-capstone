import React, { useState } from "react";

export default function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit} action="">
          <fieldset>
            <div className="">
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            <div className="">
              <label htmlFor="book-time">Choose Time</label>
              <select
                name=""
                value={time}
                onChange={(e) => setTime(e.target.value)}
                id="book-time"
              >
                <option value="">Select a time</option>
                {props.availableTime.availableTime.map((availableTime) => {
                  return <option key={availableTime}>{availableTime}</option>;
                })}
              </select>
            </div>

            <div className="">
              <label htmlFor="book-guests">Number of guests:</label>
              <input
                type="text"
                min="1"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
                id="book-guests"
              />
            </div>
            <div className="">
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                name=""
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="">Birthday</option>
                <option value="">Anniversary</option>
              </select>
            </div>
            <div className="btn-Receive">
              <input
                aria-label="On Click"
                type="submit"
                value={"Book your reservation"}
                name=""
                id=""
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
}
