import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const data = await getData();
  console.log(data)
  return (
    <div>
      {data.map((item) => (
        <Link className="flex gap-5 items-center" href="/blog/">
          <div>
            <Image src="/websites.jpg" width={400} height={100} />
          </div>
          <div>
            <h1 className="font-bold text-xl">{item.title}</h1>
            <p className="">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
