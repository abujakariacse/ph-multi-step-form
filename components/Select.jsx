const Select = ({ options, placeholder, name, label, register, value }) => {
  return (
    <div className="relative">
      <label className="block text-slate-700  mb-2 text-xs" htmlFor={name}>
        {label}
        <span className="text-red-500 italic"> *</span>
      </label>
      <select
        defaultValue={value || ""}
        {...register(name, { required: true })}
        id={name}
        name={name}
        className="block max-w-sm w-full text-sm  transition duration-75 border rounded h-9 outline-none text-grayy-700 pl-2 cursor-pointer"
      >
        <option value="">{placeholder}</option>
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
