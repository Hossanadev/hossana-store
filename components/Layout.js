import Head from "next/head";
import Link from "next/link";
import React from "react";
import { IoAppsSharp } from "react-icons/io5";

const Layout = ({ title, children }) => {
  return (
    <>
      {/* head */}
      <Head>
        <title>{title ? title + "store" : "title"}</title>
        <meta name="description" content="ecommerce store"></meta>
        <link rel="icon" href=""></link>
      </Head>

      {/* header */}
      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <nav className="shadow-md border-primary_color flex justify-between items-center h-16 md:px-4 px-2">
            <Link
              className="hover:translate-x-4 transition-all duration-700"
              href={"/"}
            >
              <span className="text-xl px-1 text-black_color border font-medium md:font-semibold border-secondary_color  ml-1 rounded-r-full border-r-0">
                Hossana
              </span>
              <span className="px-2 md:font-medium font-medium py-0.5 text-lg rounded-tr-2xl rounded-bl-md border bg-primary_color/90 text-white border-yellow-600 border-r-0 border-l-0">
                Stores
              </span>
            </Link>
            <div className="flex gap-4 items-center">
              <Link className="nav-link" href={"/about"}>
                About
              </Link>
              <Link className="nav-link" href={"/contact"}>
                Contact
              </Link>
              <Link className="nav-link" href={"/login"}>
                Login
              </Link>
              <Link className="cart" href={"/cart"}>
                Cart
              </Link>
              <IoAppsSharp
                size={30}
                className="cursor-pointer text-primary_color hover:text-secondary_color duration-700 transition-all"
              />
            </div>
          </nav>
        </header>

        {/* main */}
        <main className="container m-auto mt-4 py-1 mb-4 px-2 md:py-16">
          {children}
        </main>

        {/* footer */}
        <footer className="flex justify-center items-center h-28 shadow-inner border-green-800">
          Copyright Hossana-stores 2023
        </footer>
      </div>
    </>
  );
};

export default Layout;
