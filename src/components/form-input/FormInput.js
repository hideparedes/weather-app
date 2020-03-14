import React from "react";

const FormInput = props => {
  return (
    <div>
      <input
        type="text"
        value={props.city}
        onChange={props.handleChange}
        placeholder="Enter city name..."
      />
    </div>
  );
};

export default FormInput;
