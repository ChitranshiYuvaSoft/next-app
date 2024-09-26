import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-between flex-col py-8 bg-slate-300">
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      About Data Here
    </div>
  );
};

export default page;
