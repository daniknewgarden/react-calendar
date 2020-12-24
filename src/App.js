import "./App.scss";
//Components
import { RangeDatePicker } from "./components/DatePicker/DatePicker";
import { RangeDatePickerStyled } from "./components/DatePickerStyled/DatePickerStyled";

function App() {
  return (
    <div className="App">
      {/* With scss */}
      <RangeDatePicker />
      {/* With styled-components */}
      <RangeDatePickerStyled />
    </div>
  );
}

export default App;
