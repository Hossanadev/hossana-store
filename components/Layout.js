import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { IoAppsSharp } from "react-icons/io5";
import Sidebar from "./Sidebar";

const Layout = ({ title, children }) => {
  const [openSideBar, setOpenSiseBar] = useState(false);
  const handleSideBar = () => {
    setOpenSiseBar(!openSideBar);
  };
  return (
    <>
      {/* head */}
      <Head>
        <title>{title ? title + "store" : "title"}</title>
        <meta name="description" content="ecommerce store"></meta>
        <link rel="icon" href=""></link>
      </Head>

      {/* header */}
      <div className="overflow-x-hidden flex flex-col justify-between min-h-screen">
        <header className="fixed w-full z-30 top-0">
          <nav className="shadow-md w-screen border-primary_color z-30 bg-white flex justify-between items-center h-12 md:h-16 md:px-8 px-2">
            <Link
              className="hover:translate-x-4 transition-all duration-700"
              href={"/"}
            >
              <span className="text-xl text-black_color border font-medium md:font-semibold px-1 border-secondary_color rounded-r-full border-r-0">
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
                onClick={handleSideBar}
                size={30}
                className="cursor-pointer text-primary_color hover:text-secondary_color duration-700 transition-all"
              />
            </div>
          </nav>
        </header>

        {/* side nav */}
        <aside
          className={`ease-in-out duration-1000 sidebar z-10 ${
            openSideBar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar className="bg-[#000000]" />
        </aside>

        {/* main */}
        <main className="container m-auto mt-16 py-1 mb-4 px-2 md:py-16">
          {children}
        </main>

        {/* footer */}
        <footer className="flex justify-center z-30 bg-white items-center h-28 shadow-inner border-green-800">
          Copyright Hossana-stores 2023
        </footer>
      </div>
    </>
  );
};

export default Layout;
