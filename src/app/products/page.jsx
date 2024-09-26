import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-between flex-col py-8 bg-slate-300">
      <div>
        {" "}
        <Link href={"/"}>Home</Link>
      </div>
      Products Data Here
      <ul>
        <Link href={"/products/1"}>
          <li>Product - 1</li>
        </Link>
        <Link href={"/products/2"}>
          <li>Product - 2</li>
        </Link>
        <Link href={"/products/3"}>
          <li>Product - 3</li>
        </Link>
        <Link href={"/products/4"}>
          <li>Product - 4</li>
        </Link>
        <Link href={"/products/5"}>
          <li>Product - 5</li>
        </Link>
      </ul>
    </div>
  );
};

export default page;
