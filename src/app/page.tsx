import LoginForm from "@/components/custom/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full ">
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
