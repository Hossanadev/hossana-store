import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { IoAppsSharp, IoCartOutline, IoCartSharp } from "react-icons/io5";
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
              <span className="text-lg md:text-xl text-primary_color border font-medium px-1 border-secondary_color rounded-r-full border-r-0">
                Hossana
              </span>
              <span className="px-2 font-medium py-0.5 text-lg md:text-xl rounded-tr-2xl rounded-bl-md border text-primary_color border-secondary_color border-r-0 border-l-0">
                Store
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
              <span className="block relative">
                <IoCartOutline className="text-secondary_color md:text-4xl text-3xl" />
                <span className="block absolute top-0 right-0 md:-mt-3 -mt-1 max-sm:text-xs rounded-full bg-primary_color -mr-2 md:px-2 px-1.5 text-center py-0 text-white">
                  2
                </span>
              </span>
              <IoAppsSharp
                onClick={handleSideBar}
                className="cursor-pointer md:text-4xl text-3xl text-primary_color hover:text-secondary_color duration-700 transition-all"
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
          <Sidebar className="bg-[#000000]" onClick={handleSideBar} />
        </aside>

        {/* main */}
        <main className="container m-auto mt-16 py-1 mb-4 px-2 md:py-16">
          {children}
        </main>

        {/* footer */}
        <footer className="flex justify-center z-30 bg-white items-center h-24 shadow-inner">
          Copyright © Hossanastores 2023
        </footer>
      </div>
    </>
  );
};

export default Layout;
