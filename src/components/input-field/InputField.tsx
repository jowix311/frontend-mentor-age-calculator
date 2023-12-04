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
        className={`mb-2 block font-poppins text-xs uppercase tracking-wider text-smokeyGray ${
          errors![targetKey] && "text-lightRed"
        }`}
      >
        {label}
      </label>
      <input
        {...register}
        {...otherProps}
        className={` h-12 w-full rounded-lg
        border border-solid border-lightGray pl-3
        font-poppins text-offBlack caret-purple
        hover:border-purple focus:border-purple focus:outline-none active:border-purple ${
          errors![targetKey] &&
          "border-lightRed  caret-lightRed hover:border-lightRed focus:border-lightRed active:border-lightRed"
        }`}
      />
      {errors!.day && (
        <span className="font-poppins text-xs italic text-lightRed">
          {errors![targetKey]!.message}
        </span>
      )}
    </div>
  );
};

export default InputField;
