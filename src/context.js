import { createContext, useEffect, useState } from "react";

export let MainContext = createContext();
const Context = ({ children }) => {
  let [theme, setTheme] = useState("Light");
  let [data, setData] = useState([]);
  let [curency, setCurency] = useState("BDT");
  let [page, setPage] = useState(1);
  let [load, setLoad] = useState(true);
  useEffect(() => {
    // Fetch The data
  async function getData() {
    try {
      let response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curency}&order=market_cap_desc&per_page=8&page=${page}&sparkline=false`
      );
      if (response.status === 200) {
        let data = await response.json();
        setData(data);
        setLoad(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
    getData();
  }, [page, setPage,curency,setCurency]);

  // Change The Theme
  let ThemeChange = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else if (theme === "Dark") {
      setTheme("Light");
    }
  };

  

  // Pagination
  const GoPrevius = () => {
    setPage(page-1);
  };
  const GoNext = () => {
    setPage(page+1);
  };

  // Chose Curency 
  let curencySelecter = (e)=>{
    setCurency(e.target.value)
  }
  return (
    <MainContext.Provider
      value={{
        ThemeChange,
        theme,
        data,
        curency,
        page,
        GoPrevius,
        GoNext,
        load,
        curencySelecter
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default Context;
