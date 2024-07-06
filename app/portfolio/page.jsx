import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className="text-xl font-bold py-2 ">Choose a gallery</h1>
      <div className="flex gap-5">
        <Link
          style={{
            background: "url('/illustration.png')",
            backgroundSize: "cover",
          }}
          className="border-2 rounded-lg w-64 h-64 relative hover:text-green-400"
          href="/portfolio/page-1"
        >
          <span className="absolute right-3 bottom-3 text-2xl font-bold hover:bg-gradient-to-t from-black">
            Card 1
          </span>
        </Link>
      </div>
    </div>
  );
};

export default page;
