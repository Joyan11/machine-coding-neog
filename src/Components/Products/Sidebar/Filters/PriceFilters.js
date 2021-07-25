/** @format */

import { useMainContext } from "../../../../context/context";

export const PriceFilters = () => {
  const { dispatch } = useMainContext();

  const priceFilter = (e) => {
    if (e.target.value === "low-to-high") {
      dispatch({ type: "LOW_TO_HIGH" });
    } else {
      dispatch({ type: "HIGH_TO_LOW" });
    }
  };
  return (
    <div>
      <span>Sort By : </span>
      <select id="price" onChange={priceFilter}>
        <option value="low-to-high">Low To High</option>
        <option value="high-to-low">High To Low</option>
      </select>
    </div>
  );
};
