const InputField = ({ children, name, placeholder, value, register }) => {
  return (
    <div className="max-w-sm">
      <label className="block text-slate-700  mb-2 text-xs" htmlFor={name}>
        {children} <span className="text-red-500 italic">*</span>
      </label>
      <input
        onChange={(e) => handleChange(e)}
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 no-arrows placeholder:text-sm placeholder:text-secondary placeholder:font-normal text-sm`}
        id={name}
        defaultValue={value || ""}
        name={name}
        type="text"
        placeholder={placeholder}
        {...register(name, { required: true })}
      />
    </div>
  );
};

export default InputField;
