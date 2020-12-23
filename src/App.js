import "./App.scss";
import React, { useState, useEffect } from "react";

//components
import { RangeDatePicker } from "./components/DatePicker/DatePicker";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { Button } from "./components/Button/Button";

import { VERTICAL_SCROLLABLE } from "react-dates/constants";
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

  const resetDate = () => {};

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div className="App">
      <div className="controls">
        <div className="text">
          <p className="title">Choose your date</p>
          <p className="subtitle">
            {date.startDate ? date.startDate.format("D-MM-Y") : "Start date"} -{" "}
            {date.endDate ? date.endDate.format("D-MM-Y") : "End date"}
          </p>
        </div>
        <Button
          label="Reset"
          onClick={() => setDate({ startDate: null, endDate: null })}
        />
      </div>
      <DateRangePicker
        startDate={date.startDate}
        startDateId="start_date_id"
        endDate={date.endDate}
        endDateId="end_date_id"
        onDatesChange={changeDates}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => {
          if (!focusedInput) return;
          setFocusedInput(focusedInput);
        }}
        block={true}
        small={true}
        // orientation={VERTICAL_SCROLLABLE}
        keepOpenOnDateSelect={true}
        initialVisibleMonth={() => moment().add(0, "months")}
        enableScroll={true}
      />
    </div>
  );
}

export default App;
