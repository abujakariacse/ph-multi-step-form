import { dateConverter } from "@/utils/dateConverter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({
  handleChange,
  selected,
  name,
  value,
  children,
}) => {
  return (
    <div className="max-w-sm">
      <label className="block text-slate-700  mb-2 text-xs" htmlFor={name}>
        {children} <span className="text-red-500 italic">*</span>
      </label>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        placeholderText={value ? dateConverter(value) : "Select a date"}
        selected={selected}
        onChange={handleChange}
        className={`min-w-full px-3 text-subHeading ${
          value ? "placeholder:text-black" : "placeholder:text-secondary"
        } py-2 border rounded outline-none text-gray-700 cursor-pointer`}
      />
    </div>
  );
};

export default CustomDatePicker;
