import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.name}
            className="shadow duration-700 transition-all object-cover rounded h-56 w-[95%] mx-auto mt-[2.5%]"
          />
        </Link>
        <div className="flex flex-col items-center justify-center p-5">
          <Link href={`/${product.id}`}>
            <h2 className="text-lg text-black_color">{product.name}</h2>
          </Link>
          <p className="mb-1 text-black_color">{product.brand}</p>
          <p className="text-black_color mb-1.5">${product.price}</p>
          <button
            className="primary-button"
            type="button"
            //   onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
