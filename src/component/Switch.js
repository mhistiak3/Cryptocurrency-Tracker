import React, { useContext } from "react";
import { MainContext } from "../context";

const Switch = () => {
  let {theme, ThemeChange } = useContext(MainContext);
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              onChange={ThemeChange}
            />
            <div className="block bg bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>

          <div className={`${theme==='Light'?'text-gray-600':'text-white'} ml-3 font-medium text-xl`}>{theme}</div>
        </label>
      </div>
    </>
  );
};

export default Switch;
