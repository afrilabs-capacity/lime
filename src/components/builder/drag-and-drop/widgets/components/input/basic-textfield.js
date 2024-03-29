import { useEffect } from "react";
export default function BasicTextField({
  placeholder,
  handleChange,
  classes,
  disabled,
  value,
}) {
  return (
    <input
      type="text"
      readonly
      className={`
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
          classes && classes
        } ${disabled ? "opacity-70" : ""}`}
      id="exampleFormControlInput1"
      placeholder={placeholder}
      onChange={(e) => handleChange && handleChange(e.target.value)}
      value={value && value}
    />
  );
}
