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

const InputField = ({
  label,
  register,
  errors,
  ...otherProps
}: InputFieldProps) => {
  const targetKey = otherProps.id as keyof FieldErrors<Inputs>;

  return (
    <div>
      <label
        htmlFor={otherProps.id}
        className={`block font-poppins uppercase text-smokeyGray text-xs mb-2 tracking-wider ${
          errors![targetKey] && "text-lightRed"
        }`}
      >
        {label}
      </label>
      <input
        {...register}
        {...otherProps}
        className={`h-12 border-solid border border-lightGray
        rounded-lg pl-3 font-poppins text-offBlack
        focus:outline-none focus:border-purple active:border-purple
        hover:border-purple w-full caret-purple invalid ${
          errors![targetKey] &&
          "border-lightRed focus:border-lightRed active:border-lightRed hover:border-lightRed caret-lightRed"
        }`}
      />
      {errors!.day && (
        <span className="text-lightRed text-xs font-poppins italic">
          {errors![targetKey]!.message}
        </span>
      )}
    </div>
  );
};

export default InputField;
