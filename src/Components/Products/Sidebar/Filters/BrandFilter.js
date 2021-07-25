/** @format */

import { useMainContext } from "../../../../context/context";

export const BrandFilter = () => {
  const { dispatch } = useMainContext();
  const brandFilter = (e) => {
    const value = e.target.value;
    switch (value) {
      case "adidas":
        dispatch({ type: "BRAND_FILTER", payload: value });
        break;
      case "puma":
        dispatch({ type: "BRAND_FILTER", payload: value });
        break;
      case "all":
        dispatch({ type: "BRAND_FILTER", payload: value });
        break;
      default:
        console.log("invalid");
    }
  };
  return (
    <div>
      <span>Brand: </span>
      <select id="price" onChange={brandFilter}>
        <option value="all">All</option>
        <option value="adidas">Adidas</option>
        <option value="puma">Puma</option>
      </select>
    </div>
  );
};
