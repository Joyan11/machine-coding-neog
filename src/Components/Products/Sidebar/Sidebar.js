/** @format */

import { useMainContext } from "../../../context/context";
import { BrandFilter } from "./Filters/BrandFilter";
import { GenderFilters } from "./Filters/GenderFilter";
import { PriceFilters } from "./Filters/PriceFilters";
import { SizeFilter } from "./Filters/SizeFilter";

export const Sidebar = () => {
  const { dispatch } = useMainContext();

  return (
    <div className="filters">
      <div style={{ padding: "1rem" }}>
        <PriceFilters />
      </div>
      <div style={{ padding: "1rem" }}>
        <BrandFilter />
      </div>
      <div style={{ padding: "1rem" }}>
        <GenderFilters />
      </div>
      <div style={{ padding: "1rem" }}>
        <SizeFilter />
      </div>

      <div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};
