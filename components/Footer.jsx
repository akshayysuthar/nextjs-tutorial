import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex  justify-between" >
      <div>©2024 Akshay Suthar. All rights reserved.</div>
      <div className="flex items-center gap-5">
        <Image src="/1.png" width={15} height={15} alt="Lama Dev Facebook Account" />
        <Image src="/2.png" width={15} height={15} alt="Lama Dev" />
        <Image src="/3.png" width={15} height={15} alt="Lama Dev" />
        <Image src="/4.png" width={15} height={15} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;