const Select = ({ options, placeholder, name, label, handleChange, value }) => {
  return (
    <div className="relative">
      <label className="block text-slate-700  mb-2" htmlFor={name}>
        {label}
        <span className="text-red-500 italic">*</span>
      </label>
      <select
        required={true}
        onChange={handleChange}
        id={name}
        name={name}
        value={value || ""}
        className="block max-w-sm w-full text-sm  transition duration-75 border rounded h-10 outline-none text-grayy-700 pl-2 "
      >
        <option value="" className="">
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option?.value} value={option?.label}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
