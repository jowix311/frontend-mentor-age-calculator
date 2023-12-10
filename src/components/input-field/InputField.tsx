import { FieldErrors } from "react-hook-form";
import { Inputs } from "../../App.tsx";

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  maxLength?: number;
  register: object; //@todo add proper typing
  errors?: FieldErrors<Inputs>; //@todo add proper typing - reason Inputs is not so dynamic
  options?: object;
}

/**
 *  basis-full or flex-basis: 100% prevents input from increases its width when it has an error message
 *
 * */

const InputField = ({
  label,
  register,
  errors,
  ...otherProps
}: InputFieldProps) => {
  const targetKey = otherProps.id as keyof FieldErrors<Inputs>; //created this variable address TS error

  console.log("targetKey", targetKey);
  console.log("targetKey value", errors![targetKey]);
  console.log("!!!");

  return (
    <div className="basis-full">
      <label
        htmlFor={otherProps.id}
        className={`mb-2 block font-poppins text-xs uppercase tracking-wider  ${
          errors![targetKey] ? "text-lightRed" : "text-smokeyGray"
        }`}
      >
        {label}
      </label>
      <input
        {...register}
        {...otherProps}
        className={` h-12 w-full rounded-lg
        border border-solid  pl-3
        font-poppins text-offBlack focus:outline-none ${
          errors![targetKey]
            ? "border-lightRed caret-lightRed hover:border-lightRed focus:border-lightRed active:border-lightRed"
            : "border-lightGray caret-purple hover:border-purple focus:border-purple active:border-purple"
        }`}
      />
      {errors![targetKey] && (
        <span className="font-poppins text-xs italic text-lightRed">
          {errors![targetKey]!.message}
        </span>
      )}
    </div>
  );
};

export default InputField;
