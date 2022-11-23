import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import Select from "react-select";

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "AquaMarine", label: "AquaMarine", color: "AquaMarine" },
    { value: "DeepSkyBlue", label: "DeepSkyBlue", color: "DeepSkyBlue" },
    { value: "Coral", label: "Coral", color: "lightCoral" },
    { value: "Sea Green", label: "Sea Green", color: "LightSeaGreen" },
    { value: "Pink", label: "Pink", color: "pink" },
    { value: "purple", label: "Purple", color: "purple" },
    { value: "Khaki", label: "Khaki", color: "Khaki" },
    { value: "Maroon", label: "Maroon", color: "Maroon" },
  ];
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisables, isSelected, isFocused }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: data.color,
          backgroundColor: "#fff",
        },
      };
    },
  };
  return (
    <div className="w-9/12 mx-auto">
      <Select
        className="border border-teal-200"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        styles={colorStyles}
        options={options}
        isMulti
      />
    </div>
  );
};

export default DropDown;
