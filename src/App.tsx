import "./App.css";
import InputField from "./components/input-field/InputField.tsx";
import DateDetail from "./components/date-detail/DateDetail.tsx";

function App() {
  return (
    <div className="bg-offWhite min-h-screen pt-32">
      <div
        className="w-[325px] bg-white m-auto pt-8 pr-5 pl-5 pb-10 rounded-xl rounded-br-xxl
        "
      >
        <div className="flex gap-2  mb-6">
          <InputField
            label="Day"
            id="day"
            type="text"
            name="day"
            value=""
            placeholder="DD"
            maxLength={2}
          />
          <InputField
            label="Month"
            id="day"
            type="text"
            name="day"
            value=""
            placeholder="MM"
            maxLength={2}
          />
          <InputField
            label="Year"
            id="day"
            type="text"
            name="day"
            value=""
            placeholder="YYYY"
            maxLength={4}
          />
        </div>

        <div className="relative flex justify-center items-center  mb-6">
          <div
            role="button"
            className="relative cursor-pointer z-10 bg-purple hover:bg-black w-16 h-16 rounded-full flex justify-center items-center"
          >
            <img
              className="w-auto h-8 "
              alt="age caluclator divider image"
              src="../src/assets/icon-arrow.svg"
            />
          </div>
          <div className="absolute right-0 left-0 border-b-2 border-lightGray border-solid"></div>
        </div>

        <div className="flex flex-col direction gap-2">
          <DateDetail day={38} label="years" />
          <DateDetail day={3} label="months" />
          <DateDetail day={26} label="days" />
        </div>
      </div>
    </div>
  );
}

export default App;
