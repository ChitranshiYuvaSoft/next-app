import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-between flex-col py-8 bg-slate-300">
      <div>
        {" "}
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
      Setting Data
    </div>
  );
};

export default page;
