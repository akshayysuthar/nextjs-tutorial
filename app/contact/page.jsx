import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function contact() {
  return (
    <div className="">
      <h1 className="text-center font-extrabold text-4xl">
        Let&apos;s Keep in Touch
      </h1>
      <div className="flex items-center justify-between gap-5 ">
        <div className="flex-1">
          <Image className="animate-pulse" src="/contact.png" width={500} height={500} />
        </div>
        <div className="flex flex-1 gap-4">
          <form action="">
            <div className=" flex flex-col">
              <input
                className="bg-transparent p-2 my-2 border rounded-lg"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="bg-transparent p-2 my-2 border rounded-lg"
                type="text"
                placeholder="Your Email"
              />
              <textarea
                rows={3}
                className="bg-transparent p-2 my-2 border rounded-lg"
                placeholder="Message"
                name=""
                id=""
              ></textarea>
              <Button url="#" text="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
