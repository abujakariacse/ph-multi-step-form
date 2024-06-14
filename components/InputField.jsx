const InputField = ({ children, type, name, placeholder, handleChange }) => {
  return (
    <div className="max-w-sm">
      <label className="block text-slate-700  mb-2" htmlFor={name}>
        {children}
      </label>
      <input
        onChange={(e) => handleChange(e)}
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 no-arrows placeholder:text-sm`}
        id={name}
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        required={true}
      />
      {/* <p className="text-red-500 text-xs mt-1">Invalid email</p> */}
    </div>
  );
};

export default InputField;
