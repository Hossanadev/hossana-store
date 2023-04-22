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
            className="rounded shadow object-cover h-64 w-full"
          />
        </Link>
        <div className="flex flex-col items-center justify-center p-5">
          <Link href={`/${product.id}`}>
            <h2 className="text-lg">{product.name}</h2>
          </Link>
          <p className="mb-2">{product.brand}</p>
          <p>${product.price}</p>
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
