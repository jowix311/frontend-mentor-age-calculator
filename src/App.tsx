import "./App.css";
import InputField from "./components/input-field/InputField.tsx";
import DateDetail from "./components/date-detail/DateDetail.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { parse, isValid, isBefore, intervalToDuration } from "date-fns";
import { useState } from "react";

export type Inputs = {
  day: string;
  month: string;
  year: string;
};

type ageBreakdown = {
  days: number | null;
  months: number | null;
  years: number | null;
};

const DEFAULT_AGE_BREAKDOWN = {
  days: null,
  months: null,
  years: null,
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  const [isDateFuture, setIsDateFuture] = useState(false);
  const [ageBreakdown, setAgeBreakdown] = useState<ageBreakdown>(
    DEFAULT_AGE_BREAKDOWN,
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { day, month, year } = data;
    const inputDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    const isDateFuture = !isBefore(inputDate, currentDate);

    setIsDateFuture(isDateFuture);

    if (!isDateFuture) {
      const {
        years: breakdownYears,
        months: breakdownMonths,
        days: breakdownDays,
      } = intervalToDuration({ start: currentDate, end: inputDate });

      setAgeBreakdown({
        days: breakdownDays || null,
        months: breakdownMonths || null,
        years: breakdownYears || null,
      });
    } else {
      setAgeBreakdown(DEFAULT_AGE_BREAKDOWN);
    }
  };

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
                  validate: (value: string) => {
                    const day = Number(value);
                    const month = Number(getValues("month"));
                    const year = Number(getValues("year"));

                    if (isNaN(day)) {
                      return "Invalid day";
                    }

                    //check if day is valid on given date (handles leap year or exceeding day in a month)
                    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                      const parsedDate = parse(
                        `${day}/${month}/${year}`,
                        "dd/MM/yyyy",
                        new Date(),
                      );

                      if (!isValid(parsedDate)) {
                        return "Invalid day";
                      }
                    }

                    return true;
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
              maxLength={2}
              register={{
                ...register("month", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  validate: (value: string) => {
                    const month = Number(value);

                    if (isNaN(month) || month <= 0 || month > 12) {
                      return "Invalid month";
                    }

                    return true;
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
                  validate: (value: string) => {
                    const year = Number(value);
                    const yearPattern = /^[1-9]\d{3}$/; //must be 4 digits and must not start with 0

                    if (isNaN(year) || !yearPattern.test(year.toString())) {
                      return "Invalid year";
                    }

                    if (year > new Date().getFullYear()) {
                      return "Year must not be in the future";
                    }

                    return true;
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

        {isDateFuture && (
          <p className="mb-6 font-poppins text-xs italic text-lightRed">
            Invalid Date! It is set on the future!
          </p>
        )}

        <div className="direction flex flex-col gap-2">
          <DateDetail breakdown={ageBreakdown.years} label="years" />
          <DateDetail breakdown={ageBreakdown.months} label="months" />
          <DateDetail breakdown={ageBreakdown.days} label="days" />
        </div>
      </div>
    </div>
  );
}

export default App;
