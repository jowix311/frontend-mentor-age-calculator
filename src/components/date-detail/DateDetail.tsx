interface DateDetailProp {
  day: number;
  label: string;
}

const DateDetail = ({ day, label }: DateDetailProp) => {
  return (
    <p className="font-poppins font-bold italic text-5xl">
      <span className="text-purple">{day}</span> {label}
    </p>
  );
};

export default DateDetail;
