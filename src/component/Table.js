import { useContext } from "react";
import { MainContext } from "../context";

import TableBody from "./TableBody";
import Load from "./Load";
const Table = () => {
  let { theme, load } = useContext(MainContext);

  return (
    <>
      {load ? (
        <Load />
      ) : (
        <div className="min-w-screen flex items-center justify-center font-sans overflow-auto">
          <div className="w-full lg:w-5/6">
            <div
              className={`${
                theme === "Light"
                  ? "bg-white text-gray-700"
                  : "bg-gray-700 text-white"
              } shadow-md rounded my-6`}
            >
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Rank</th>
                    <th className="py-3 px-6 text-center">Coin</th>
                    <th className="py-3 px-6 text-left">Price</th>
                    <th className="py-3 px-6 text-center">Price Change 24H</th>
                    <th className="py-3 px-6 text-center">Total Volume</th>
                    <th className="py-3 px-6 text-center">Mkt Cap</th>
                    <th className="py-3 px-6 text-center">Last Update</th>
                  </tr>
                </thead>
                <TableBody />
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
