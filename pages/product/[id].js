import Layout from "@/components/Layout";
import processedData from "@/components/ProductItem";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const ProductScreen = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let rawData = await fetch("https://dummyjson.com/products/");
      let processedData = await rawData.json();
      setData(processedData.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const { query } = useRouter();
  const { id } = query;
  const product = data.find((x) => x.id == id);
  if (!product) {
    return <>Product not found</>;
  }
  return (
    <>
      <Layout title={product.title}>
        <div className="flex lg:justify-around justify-between items-center">
          <Link href={"/"}>
            <span className="flex items-center duration-700 transition-all hover:bg-primary_color/80 gap-1 bg-black_color text-white pr-6 px-4 max-sm:px-2 sm:py-0.5 md:py-1 rounded max-sm:text-sm">
              <IoArrowBack className="block text-xl" />
            </span>
          </Link>
          <span className="block text-[16px] md:text-xl md:px-7 px-1 text-black_color font-medium">
            {product.title}
          </span>
          <span className="block text-white">Nil</span>
        </div>

        <div className="mt-[2rem]">
          <img
            src={`${product.thumbnail}`}
            alt={`${product.title}`}
            className="rounded object-scale-down mx-auto shadow"
          />
        </div>

        <div className="mx-auto lg:w-[50%] max-sm:text-sm mt-[2rem]">
          {product.description}
        </div>

        <div className="lg:w-[50%] mx-auto flex justify-between mt-[2rem] md:gap-4 gap-2 items-center">
          <span className="block max-sm:text-sm text-black_color shadow text-center hover:bg-secondary_color hover:text-white py-0.5 md:px-3 px-1 rounded lg:w-1/4">
            Rating: {product.rating}/5.00
          </span>
          <button className="block px-[1rem] hover:bg-secondary_color transition-all duration-700 max-sm:text-sm bg-primary_color text-white py-0.5 md:py-1 rounded">
            Add to Cart
          </button>
          <span className="block max-sm:text-sm text-black_color text-center shadow hover:bg-secondary_color hover:text-white py-0.5 md:px-3 px-1 rounded lg:w-1/4">
            Price: ${product.price}.00
          </span>
        </div>
        <div></div>
      </Layout>
    </>
  );
};

export default ProductScreen;
