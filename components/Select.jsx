const Select = ({ options, placeholder, name, label }) => {
  return (
    <div className="relative">
      <label className="block text-slate-700  mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="block max-w-sm w-full text-sm  transition duration-75 border rounded h-10 outline-none text-grayy-700 pl-2 "
      >
        <option value="" className="">
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
