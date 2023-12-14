interface DateDetailProp {
  breakdown: number | null;
  label: string;
}

const DateDetail = ({ breakdown, label }: DateDetailProp) => {
  return (
    <p className="font-poppins text-5xl font-bold italic">
      <span className="text-purple">{breakdown || "--"}</span> {label}
    </p>
  );
};

export default DateDetail;
