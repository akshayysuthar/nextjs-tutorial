import React from "react";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="text-white bg-gradient-to-r from-green-600  to-green-700 py-2 px-4 rounded-lg mt-4 ">{text}</button>
    </Link>
  );
};

export default Button;
