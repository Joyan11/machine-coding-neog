/** @format */
import React from "react";
import { useMainContext } from "../../context/context";
import * as data from "../../data/data.json";
import { ProductCard } from "./ProductCard";

export const ProductListing = () => {
  const { price, size, brand, gender } = useMainContext();

  const priceFilter = (filter, products) => {
    if (filter === "high-to-low") {
      return products.sort((a, b) => b.price - a.price);
    } else {
      return products.sort((a, b) => a.price - b.price);
    }
  };

  const sizeFilter = (filter, products) => {
    if (filter !== "all") {
      return products.filter((item) => item.size === filter);
    } else {
      return products;
    }
  };

  const brandFilter = (filter, products) => {
    if (filter !== "all") {
      return products.filter((item) => item.brand === filter);
    } else {
      return products;
    }
  };

  const genderFilter = (filter, products) => {
    if (filter === "men" || filter === "women") {
      return products.filter((item) => item.gender === filter);
    } else {
      return products;
    }
  };

  const dataAfterFilters = genderFilter(
    gender,
    brandFilter(brand, sizeFilter(size, priceFilter(price, data.productData)))
  );

  const renderProductList = React.Children.toArray(
    dataAfterFilters.map((item) => <ProductCard item={item} />)
  );
  return <div className="product-listing">{renderProductList}</div>;
};
