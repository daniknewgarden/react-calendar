import { useState, useEffect } from "react";
//React-dates
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { VERTICAL_SCROLLABLE } from "react-dates/constants";
//Components
import { Button } from "../Button/Button";
//Styles
import "./DatePicker.scss";

export const RangeDatePicker = () => {
  const [opened, setOpened] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  //Toggle date picker
  const toggleOpened = () => {
    setOpened(!opened);
  };

  //When user select date (start or end)
  const changeDates = ({ startDate, endDate }) => {
    setDate({ startDate, endDate });
  };

  //Cleaning (call from reset button)
  const resetDate = () => {
    setDate({ startDate: null, endDate: null });
  };

  //Open or close Range component (payload = "startDate": opened, null: closed)
  const focusStartDate = (payload) => {
    setFocusedInput(payload);
  };

  useEffect(() => {
    opened ? focusStartDate("startDate") : focusStartDate(null);
  }, [opened]);

  //Click from focus on controls div
  const keyboardClick = (event) => {
    switch (event.keyCode) {
      case 13:
        toggleOpened();
        break;
      case 32:
        toggleOpened();
        break;
      default:
        break;
    }
  };

  return (
    <div className="date-picker">
      <div
        className="controls"
        onClick={toggleOpened}
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
        orientation={VERTICAL_SCROLLABLE}
        numberOfMonths={6}
      />
    </div>
  );
};
