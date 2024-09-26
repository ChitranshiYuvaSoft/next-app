import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-between flex-col py-8 bg-slate-300">
      Home
      <nav className="w-full h-[5rem] bg-slate-900 flex items-center justify-around">
        {" "}
        <p>
          <Link href={"/dashboard"} className="text-white">Dashboard</Link>
        </p>
        <p>
          <Link href={"/contact"} className="text-white">Contact</Link>
        </p>
        <p>
          <Link href={"/about"} className="text-white">About</Link>
        </p>
        <p>
          <Link href={"/products"} className="text-white">Products</Link>
        </p>
      </nav>
    </div>
  );
};

export default page;
