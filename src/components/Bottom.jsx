import { Button } from "antd";
import React from "react";
import { FaMedal } from "react-icons/fa";
import { DONATION, LEADERBOARD } from "../constants";
import NumberAnimation from "./NumberAnimation";

const Bottom = ({ setModalActiveFor, setIsModalOpen }) => {
  const handleDonate = () => {
    setModalActiveFor(DONATION);
    setIsModalOpen(true);
  };
  const handleLeaderBoard = () => {
    setIsModalOpen(true);
    setModalActiveFor(LEADERBOARD);
  };
  return (
    <div className="">
      <h3 className="text-2xl md:mt-[1rem]">
        "Donate APt to make the train move faster"
      </h3>
      <h2 className="font-bold text-4xl mt-[3rem]">
        <NumberAnimation />
      </h2>
      <Button
        onClick={handleDonate}
        type="ghost"
        className="bg-primary text-white my-[2.6rem] md:my-[1.9rem]  flex mx-auto justify-center items-center w-[160px] h-[52px] md:w-[200px] lg:w-[270px]  md:h-[50px] lg:h-[60px]">
        DONATE NOW
      </Button>
      <p className="text-xl mt-[1rem]">
        Aptos is super fast. Don’t believe it? Donate APT to stress test.
      </p>
      <Button
        className="mx-auto w-full flex items-center justify-center"
        icon={<FaMedal className="text-[#E8E254] font-extrabold text-3xl " />}
        size="middle"
        type="ghost"
        onClick={handleLeaderBoard}>
        <span className="text-2xl font-semibold"> Leaderboard</span>
      </Button>
      <p className="mt-[0.5rem] text-gray-600">TPS Train V1.6</p>
      <p className="mt-[0.1rem] text-gray-500">&copy; TPS Train</p>
    </div>
  );
};

export default Bottom;
