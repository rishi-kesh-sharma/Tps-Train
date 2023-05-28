import React from "react";
import { BsCheckAll } from "react-icons/bs";

const Congratulations = ({ donatedAmount }) => {
  return (
    <div className=" my-[2rem] h-[100px] flex items-center flex-col justify-center transition-all">
      <div className="flex items-center justify-center  gap-[1rem] w-full text-2xl">
        <BsCheckAll className="text-green-400 text-center text-2xl " />
        <p className="text-xl text-gray-600 text-center ">
          {donatedAmount} Apt donated Successfully
        </p>
      </div>
      <p className="font-semibold text-2xl">
        Thank you for contributing to Aptos
      </p>
    </div>
  );
};
export default Congratulations;
