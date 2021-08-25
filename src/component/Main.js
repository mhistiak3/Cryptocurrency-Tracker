import { useContext } from "react";
import { MainContext } from "../context";
import Curency from "./Curency";
import Switch from "./Switch";
import Table from "./Table";
const Main = () => {
  let { theme, page,GoPrevius,GoNext } = useContext(MainContext);
  return (
    <div
      className={`${
        theme === "Light" ? "bg-white text-gray-700" : "bg-gray-700 text-white"
      } pt-5`}
    >
      <Switch />
      <Curency/>
      <h2 className={"text-4xl text-center my-5"}>Cryptocurrency Tracker</h2>
      <Table />
        <h2 className='text-center text-3xl my-4'>Page - {page}</h2>
      <div className="flex items-center justify-center">

        {page ===1 ? (
          <button onClick={GoNext} className="py-2 px-5 mx-5 bg-purple-500 text-white rounded">
            Next
          </button>
        ) : (
          <>
            <button className="py-2 px-5 mx-5 bg-purple-500 text-white rounded" onClick={GoPrevius}>
              Previus
            </button>

            <button className="py-2 px-5 mx-5 bg-purple-500 text-white rounded" onClick={GoNext}>
              Next
            </button>
          </>
        )}
      </div>
      <div className='bg-gray-300 py-3 text-xl text-black text-center mt-5'>
       Get API From <a className='text-red-400' href="https://coingecko.com/">coingecko.com</a>
     </div>
    </div>
  );
};

export default Main;
