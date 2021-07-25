/** @format */

import React from "react";
export const ProductCard = ({ item }) => {
  return (
    <div class="card card--verticle card--m border" style={{ margin: "2rem" }}>
      <figure class="card--image">
        {" "}
        <img src={item.image} alt="" />{" "}
      </figure>
      <div class="card--body">
        {" "}
        <span class="card--title">{item.name}</span>
        <p class="card--text">Brand: {item.brand}</p>
        <p class="card--text">Ideal For: {item.gender}</p>
        <p class="card--text">Size: {item.size}</p>
        <p class="card--text">Price: {item.price}</p>
      </div>
    </div>
  );
};
