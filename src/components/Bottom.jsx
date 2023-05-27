import { Button } from "antd";
import React from "react";
import { FaMedal } from "react-icons/fa";

const Bottom = () => {
  return (
    <div className="">
      <h3>"Donate APt to make the train move faster"</h3>
      <h2 className="font-bold ">5500</h2>
      <Button type="ghost" className="bg-primary text-white mt-[0.3rem]">
        DONATE NOW
      </Button>
      <p className="text-sm">Aptos is super fast. Don’t believe it? Donate APT to stress test.</p>
      <p className="mt-[0.3rem]">TPS Train V1.6</p>
      <Button icon={<FaMedal />} type="ghost">
        Leaderboard
      </Button>
      <p className="text-sm">&copy; TPS Train</p>
    </div>
  );
};

export default Bottom;
