import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ name, children, handleChange, selected }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="max-w-sm">
      <label className="block text-slate-700  mb-2 text-xs" htmlFor={name}>
        {children} <span className="text-red-500 italic">*</span>
      </label>
      <DatePicker
        required={true}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        selected={selected || startDate}
        onChange={(e) => handleChange(name, e)}
        className="min-w-full px-3 text-subHeading placeholder:text-secondary py-2 border rounded outline-none text-gray-700 cursor-pointer"
      />
    </div>
  );
};

export default CustomDatePicker;
