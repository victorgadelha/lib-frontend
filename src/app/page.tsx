import UserForm from "@/components/custom/UserForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full ">
      <div className="border-2 p-16 border-black rounded-lg ">
        {" "}
        <UserForm />
      </div>
    </div>
  );
};

export default page;
