import React, { useContext } from "react";
import { MainContext } from "../context";
import data from "./CurencyCode";

const Curency = () => {
  let { curencySelecter } = useContext(MainContext);
  return (
    <div
      className="flex items-center justify-center"
      onChange={curencySelecter}
    >
      <label className="mt-4 bg-gray-300 p-2 rounded">
        <span className="text-gray-700 mx-3">Select Curency</span>
        <select className="form-select text-gray-700 mt-1 p-2 rounded">
          {data.map((value, index) => (
            <option key={index} value={value.code}>
              {value.code}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Curency;
