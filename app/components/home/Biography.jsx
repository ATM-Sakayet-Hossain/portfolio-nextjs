import Image from "next/image";
import React from "react";

const Biography = () => {
  return (
    <section className="pt-10" href="/about">
      <div className="container">
        <div>
          <div className="flex items-center justify-center">
            <Image
              src="/F-15075.jpg"
              width={300}
              height={300}
              alt="PP picture"
              className="w-50 text-center rounded-full flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
