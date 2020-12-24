import { useState, useEffect } from "react";
//React-dates
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { VERTICAL_SCROLLABLE } from "react-dates/constants";
//Components
import { Button } from "../Button/Button";
//Styles
import styled from "styled-components";

//Component
const DatePickerWrapper = styled.div`
  --color-body: #ffffff;
  --color-accent: #943fa1;
  --color-accent-secondary: #efe2f1;
  --color-hover: #c465d3;
  --color-border: #dbdbdb;
  --color-text-main: #353535;
  --color-text-subtitle: #80797e;

  .controls {
    display: flex;
    justify-content: space-between;

    padding: 20px;

    .text {
      display: flex;
      flex-direction: column;

      font-size: 18px;
      text-align: left;
      font-family: "Rubik", sans-serif, Helvetica, Arial;

      .title {
        margin: 0;

        color: var(--color-text-main);
      }

      .subtitle {
        margin: 0;
        margin-top: 10px;

        color: var(--color-text-subtitle);
      }
    }
  }

  .DateRangePicker {
    .DateInput {
      display: none;
    }

    .DateRangePickerInput__withBorder {
      border: none;
    }

    .DateRangePickerInput_arrow {
      display: none;
    }

    .DayPickerNavigation_button__verticalDefault {
      display: none;
    }
  }

  .DateRangePicker {
    &_picker {
      height: 500px;
      width: 100%;
      border: none;
      top: 0 !important;
    }

    .DayPicker__withBorder {
      width: 100%;
      box-shadow: none;
    }

    .DayPicker_weekHeader {
      top: 0;
      padding-bottom: 5px !important;
      background-color: var(--color-body);
      border-bottom: 1px solid var(--color-border);
    }

    .DayPicker_focusRegion {
      padding-top: 25px;
    }

    .CalendarDay__default {
      border-radius: 10px;
      border: none;

      &:hover {
        border: none;
        color: var(--color-text-main);
        background: var(--color-hover);
      }
    }

    .CalendarDay__selected {
      background: var(--color-accent);

      &:focus,
      &:active {
        background: var(--color-accent);
        color: #fff !important;
      }
    }

    .CalendarDay__selected_span {
      background: var(--color-accent-secondary);
      color: var(--color-text-main);
      border-radius: 0;
    }
  }
`;

export const RangeDatePickerStyled = () => {
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
    <DatePickerWrapper>
      <div
        className="controls"
        onClick={toggleOpened}
        onKeyDown={keyboardClick}
        tabIndex="0"
      >
        <div className="text">
          <p className="title">Choose your date (styled component)</p>
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
    </DatePickerWrapper>
  );
};
