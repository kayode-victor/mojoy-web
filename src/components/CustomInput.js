import React from "react";

const CustomInput = (props) => {
  const {
    type,
    name,
    placeholder,
    className,
    value,
    onBlur,
    onChange,
    disabled,
  } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
    </div>
  );
};

export default CustomInput;
