import React from "react";
import Image from "next/image";

const page = ({ params }) => {
  return (
    <div>
      {params.id}
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-3xl mb-2">Blog title</h1>
            <div className="flex items-center gap-5 mb-2">
              <Image
                className="rounded-xl"
                src="/profile.jpg"
                width={50}
                height={100}
              />
              <span>Oggy Bhai</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, et!
            </p>
          </div>
          <Image src="/websites.jpg" width={400} height={100} />
        </div>
      </div>
      <div className="mt-5 mx-5">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora eum,
          rem id veniam impedit saepe placeat sed, eligendi hic aliquam
          voluptate. Voluptatem commodi iusto eveniet in, porro eos unde
          praesentium numquam culpa ipsam harum. Eos libero, sit tempore nisi
          veritatis totam unde fuga doloremque, repellendus blanditiis aliquid
          delectus asperiores molestiae. Explicabo saepe modi praesentium ab.
          Harum quibusdam voluptatibus repudiandae, libero ea adipisci
          recusandae possimus ducimus perspiciatis commodi debitis provident
          voluptas alias amet totam laudantium laborum porro accusamus? Maiores,
          id aperiam? Excepturi, sed molestiae ex nulla accusantium ab eligendi
          suscipit deserunt doloremque velit hic, facere iste quae nesciunt,
          tenetur sint? Quibusdam.
        </p>
      </div>
    </div>
  );
};

export default page;
