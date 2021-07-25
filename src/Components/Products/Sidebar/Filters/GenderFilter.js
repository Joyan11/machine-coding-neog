/** @format */

import { useMainContext } from "../../../../context/context";

export const GenderFilters = () => {
  const { dispatch, gender } = useMainContext();

  const genderFilter = (e) => {
    if (e.target.id === "men") {
      dispatch({ type: "GENDER_FILTER", payload: e.target.id });
    } else if (e.target.id === "women") {
      dispatch({ type: "GENDER_FILTER", payload: e.target.id });
    } else {
      dispatch({ type: "GENDER_FILTER", payload: e.target.id });
    }
  };
  return (
    <div>
      <div id="gender" name="gender" onChange={genderFilter}>
        <fieldset>
          <legend>Ideal For:</legend>
          <div className="checkboxes">
            <div>
              <input
                checked={gender === "all"}
                id="all"
                name="gender"
                type="radio"
              />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input
                checked={gender === "men"}
                id="men"
                name="gender"
                type="radio"
              />
              <label htmlFor="men">Men</label>
            </div>
            <div>
              <input
                checked={gender === "women"}
                id="women"
                name="gender"
                type="radio"
              />
              <label htmlFor="women">Women</label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};
