import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export const RangeDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const dateChange = (start, end) => {
    console.log(startDate, endDate);
  };

  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="start_date_id"
      endDate={endDate}
      endDateId="end_date_id"
      onDatesChange={({ startDate, endDate }) => dateChange(startDate, endDate)}
      focusedInput={focusedInput}
      onFocusChange={(focusedInput) => console.log(focusedInput)}
    />
  );
};
