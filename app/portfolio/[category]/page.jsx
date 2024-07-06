import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className="">
      <h1 className="text-green-400 font-bold text-3xl">{params.category}</h1>

      <div className="flex items-center justify-center gap-5 mt-10 mb-10">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">test</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            odio rerum accusamus libero doloribus architecto, veniam a
            cupiditate quos.
          </p>
          <Button url={"#"} text={"See More"} />
        </div>
        <div className="flex-1 relative">
          <Image
            className="bg-cover"
            src="/illustration.png"
            width={500}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
