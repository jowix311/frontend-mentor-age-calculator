interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  maxLength?: number;
  onChange?: () => void;
}

const InputField = ({ label, ...otherProps }: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor="day"
        className="block font-poppins uppercase text-smokeyGray text-xs mb-2 tracking-wider"
      >
        {label}
      </label>
      <input
        {...otherProps}
        className="h-12 border-solid border border-lightGray rounded-lg pl-3 font-poppins text-offBlack focus:outline-none focus:border-purple active:border-purple hover:border-purple w-full caret-purple"
      />
    </div>
  );
};

export default InputField;
