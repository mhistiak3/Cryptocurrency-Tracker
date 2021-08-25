import { useContext } from "react";
import { MainContext } from "../context";

const TableBody = () => {
  let { data, curency } = useContext(MainContext);
  function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }
 
  return (
    <>
      <tbody className="text-sm">
        {data.map((singleData, index) => (
          <tr className="border-b border-gray-200" key={index}>
            <td className="py-3 px-6 text-left whitespace-nowrap">
              <div className="flex items-center">
                <span className="font-medium">
                  {singleData.market_cap_rank}
                </span>
              </div>
            </td>
            <td className="py-3 px-6 text-left">
              <div className="flex items-center">
                <div className="mr-2">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={singleData.image}
                    alt='Symbol'
                  />
                </div>
                <span>{singleData.name}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-center">
              <div className="flex items-center justify-center">
                <span>{formatMoney(singleData.current_price) + " " + curency}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-center">
              <span className="bg-purple-100 text-purple-600 py-1 px-3 rounded-full text-sm">
                {singleData.price_change_percentage_24h.toFixed(2) + "%"}
              </span>
            </td>
            <td className="py-3 px-6 text-center">
              <div className="flex item-center justify-center">
                <span> {formatMoney(singleData.total_volume) + " " + curency} </span>
              </div>
            </td>
            <td className="py-3 px-6 text-center">
              <div className="flex item-center justify-center">
                <span> {formatMoney(singleData.market_cap) + " " + curency} </span>
              </div>
            </td>
            <td className="py-3 px-6 text-center">
              <div className="flex item-center justify-center">
                <span>{singleData.last_updated}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
