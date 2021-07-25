/** @format */

export const reducer = (state, action) => {
  switch (action.type) {
    case "HIGH_TO_LOW":
      console.log("running");
      return {
        ...state,
        price: "high-to-low",
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        price: "low-to-high",
      };
    case "SIZE_FILTER":
      return {
        ...state,
        size: action.payload,
      };

    case "BRAND_FILTER":
      return {
        ...state,
        brand: action.payload,
      };
    case "GENDER_FILTER":
      return {
        ...state,
        gender: action.payload,
      };
    case "CLEAR_FILTERS": {
      return {
        ...state,
        size: "all",
        price: "low-to-high",
        brand: "all",
      };
    }
    default: {
      return state;
    }
  }
};
