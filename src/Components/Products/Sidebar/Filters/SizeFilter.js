/** @format */

import { useMainContext } from "../../../../context/context";

export const SizeFilter = () => {
  const { size, dispatch } = useMainContext();

  const sizeFilter = (e) => {
    const value = e.target.id;
    switch (value) {
      case "S":
        dispatch({ type: "SIZE_FILTER", payload: value });
        break;
      case "M":
        dispatch({ type: "SIZE_FILTER", payload: value });
        break;
      case "L":
        dispatch({ type: "SIZE_FILTER", payload: value });
        break;
      case "XL":
        dispatch({ type: "SIZE_FILTER", payload: value });
        break;
      default:
        console.log("invalid");
    }
  };

  return (
    <div id="size-filter">
      <fieldset>
        <legend>Select Size:</legend>
        <div className="checkboxes" onChange={sizeFilter}>
          <div>
            <input
              checked={size === "S"}
              type="radio"
              name="size-filter"
              id="S"
            />
            <label htmlFor="S">Small</label>
          </div>
          <div>
            <input
              checked={size === "M"}
              type="radio"
              name="size-filter"
              id="M"
            />
            <label htmlFor="M">Medium</label>
          </div>
          <div>
            <input
              checked={size === "L"}
              type="radio"
              name="size-filter"
              id="L"
            />
            <label htmlFor="L">Large</label>
          </div>
          <div>
            <input
              checked={size === "XL"}
              type="radio"
              name="size-filter"
              id="XL"
            />
            <label htmlFor="XL"> ExtraLarge</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
