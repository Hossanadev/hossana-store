import Head from "next/head";
import Link from "next/link";
import React from "react";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "store" : "null"}</title>
        <meta name="description" content="ecommerce store"></meta>
        <link rel="icon" href=""></link>
      </Head>

      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <nav className="border-b shadow-lg border-green-800 flex justify-between items-center h-12 px-4">
            <Link className="text-xl" href={"/"}>
              Hossanastore
            </Link>
            <div className="flex gap-4">
              <Link href={"/cart"}>Cart</Link>
              <Link href={"/login"}>Login</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4">{children}</main>
        <footer className="flex justify-center items-center h-12 shadow-inner border-t border-green-800">
          Copyright Hossanastore Worldwide 2023
        </footer>
      </div>
    </>
  );
};

export default Layout;
