import { useEffect } from "react";
export default function TextField({
  placeholder,
  handleChange,
  field,
  widget,
  type,
  value,
}) {
  return (
    <input
      type={type ? type : "text"}
      readonly
      className="
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder={placeholder}
      onChange={(e) => handleChange && handleChange(e, field, widget)}
      value={value && value}
    />
  );
}
