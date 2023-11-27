interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  name: string;
  value: string;
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
        className="h-12 border-solid border border-lightGray rounded-lg pl-3 font-poppins text-offBlack w-full"
      />
    </div>
  );
};

export default InputField;
