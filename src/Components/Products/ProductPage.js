/** @format */

import React from "react";

import { useMainContext } from "../../context/context";
import { ProductListing } from "./ProductListing";
import { Sidebar } from "./Sidebar/Sidebar";
import "./products-page.css";
export const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="product-list">
        <ProductListing />
      </div>
    </div>
  );
};
