import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div
      className="flex items-center 
      justify-center h-screen w-full"
    >
      {" "}
      <Image src="/taylor.gif" alt="Next.js logo" width={500} height={500} />
    </div>
  );
};

export default page;
