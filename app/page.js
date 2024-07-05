import Image from "next/image";
import Button from "@/components/Button";
import hero from "@/public/hero.png";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-5 ">
        <div className="text-left">
          <div class="text-7xl  w-1/2 font-extrabold">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Better design for your digital products.
            </span>
          </div>
          <p className="w-1/2">
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button  url="/portfolio" text="See Our Works" />
        </div>
        <div>
          <Image
            src={hero}
            className="object-cover animate-pulse"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
}
