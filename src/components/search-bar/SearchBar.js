import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const handleChange = e => {
    setCity(e.target.value);
    console.log(city);
  };
  return (
    <form>
      <FormInput city={city} handleChange={handleChange} />
      <Button />
    </form>
  );
};

export default SearchBar;
