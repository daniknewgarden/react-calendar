import "./App.scss";
import React, { useState, useEffect } from "react";

//components
import { RangeDatePicker } from "./components/DatePicker/DatePicker";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { Button } from "./components/Button/Button";

import { VERTICAL_ORIENTATION } from "react-dates/constants";
import moment from "moment";

function App() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const changeDates = ({ startDate, endDate }) => {
    setDate({ startDate, endDate });
  };

  const resetDate = () => {
    setDate({ startDate: null, endDate: null });
  };

  const focusStartDate = () => {
    setFocusedInput("startDate");
  };

  const keyboardClick = (event) => {
    if (event.keyCode === 13) {
      focusStartDate();
    }
  };

  return (
    <div className="App">
      <div
        className="controls"
        onClick={focusStartDate}
        onKeyDown={keyboardClick}
        tabIndex="0"
      >
        <div className="text">
          <p className="title">Choose your date</p>
          <p className="subtitle">
            {date.startDate ? date.startDate.format("D-MM-Y") : "Start date"} -{" "}
            {date.endDate ? date.endDate.format("D-MM-Y") : "End date"}
          </p>
        </div>
        {date.startDate && <Button label="Reset" onClick={resetDate} />}
      </div>
      <DateRangePicker
        startDate={date.startDate}
        startDateId="start_date_id"
        endDate={date.endDate}
        endDateId="end_date_id"
        onDatesChange={changeDates}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => {
          setFocusedInput(focusedInput);
        }}
        block={true}
        small={true}
        orientation={VERTICAL_ORIENTATION}
        keepOpenOnDateSelect={true}
      />
    </div>
  );
}

export default App;
