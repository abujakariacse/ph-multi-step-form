import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ name, children }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="max-w-sm">
      <label className="block text-slate-700  mb-2" htmlFor={name}>
        {children}
      </label>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="min-w-full px-3 py-2 border rounded outline-none text-gray-700 cursor-pointer"
      />
    </div>
  );
};

export default CustomDatePicker;
