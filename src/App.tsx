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
    <div className="bg-offWhite min-h-screen pt-32">
      <div
        className="w-[325px] bg-white m-auto pt-8 pr-5 pl-5 pb-10 rounded-xl rounded-br-xxl
        "
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
          <div className="flex gap-2  mb-6">
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
                    message: "This field is required!",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a number",
                  },
                }),
              }}
            />
            {/*/!*<InputField*!/*/}
            {/*  label="Month"*/}
            {/*  id="day"*/}
            {/*  type="text"*/}
            {/*  name="day"*/}
            {/*  value=""*/}
            {/*  placeholder="MM"*/}
            {/*  maxLength={2}*/}
            {/*/>*/}
            {/*<InputField*/}
            {/*  label="Year"*/}
            {/*  id="day"*/}
            {/*  type="text"*/}
            {/*  name="day"*/}
            {/*  value=""*/}
            {/*  placeholder="YYYY"*/}
            {/*  maxLength={4}*/}
            {/*/>*/}
          </div>

          <div className="relative flex justify-center items-center  mb-6">
            <button
              role="button"
              className="relative cursor-pointer z-10 bg-purple hover:bg-black w-16 h-16 rounded-full flex justify-center items-center"
            >
              <img
                className="w-auto h-8 "
                alt="age caluclator divider image"
                src="../src/assets/icon-arrow.svg"
              />
            </button>
            <div className="absolute right-0 left-0 border-b-2 border-lightGray border-solid"></div>
          </div>
        </form>
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
