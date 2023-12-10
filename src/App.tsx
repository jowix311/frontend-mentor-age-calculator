import "./App.css";
import InputField from "./components/input-field/InputField.tsx";
import DateDetail from "./components/date-detail/DateDetail.tsx";
import { SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  day: string;
  month?: string;
  year?: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="min-h-screen bg-offWhite pt-32">
      <div
        className="m-auto w-[325px] rounded-xl rounded-br-xxl bg-white pb-10 pl-5 pr-5 pt-8
        "
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
          <div className="a mb-6 flex basis-[90px] flex-row gap-2 align-top ">
            <InputField
              label="Day"
              errors={errors}
              id="day"
              type="text"
              name="day"
              placeholder="DD"
              maxLength={2}
              register={{
                ...register("day", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a number",
                  },
                }),
              }}
            />
            <InputField
              label="Month"
              errors={errors}
              id="month"
              type="text"
              name="month"
              placeholder="MM"
              maxLength={4}
              register={{
                ...register("month", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a number",
                  },
                }),
              }}
            />
            <InputField
              label="Year"
              errors={errors}
              id="year"
              type="text"
              name="year"
              placeholder="YYYY"
              maxLength={4}
              register={{
                ...register("year", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a number",
                  },
                }),
              }}
            />
          </div>

          <div className="relative mb-6 flex items-center  justify-center">
            <button
              role="button"
              className="relative z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-purple hover:bg-black"
            >
              <img
                className="h-8 w-auto "
                alt="age caluclator divider image"
                src="../src/assets/icon-arrow.svg"
              />
            </button>
            <div className="absolute left-0 right-0 border-b-2 border-solid border-lightGray"></div>
          </div>
        </form>
        <div className="direction flex flex-col gap-2">
          <DateDetail day={38} label="years" />
          <DateDetail day={3} label="months" />
          <DateDetail day={26} label="days" />
        </div>
      </div>
    </div>
  );
}

export default App;
