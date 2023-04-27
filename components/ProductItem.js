import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { CircularProgress } from "@mui/material";

export const ProductItem = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      let rawData = await fetch("https://dummyjson.com/products/");
      let processedData = await rawData.json();
      {
        processedData ? setLoading(false) : setLoading(true);
      }
      setData(processedData.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        className={`${
          !loading
            ? "grid grid-cols-1 md:gap-4 lg:gap-16 md:grid-cols-3 lg:grid-cols-4"
            : "text-3xl font-semibold flex justify-center items-center"
        }`}
      >
        {!loading ? (
          data.map((items) => (
            <ProductCard product={items} key={items.id}></ProductCard>
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </>
  );
};
