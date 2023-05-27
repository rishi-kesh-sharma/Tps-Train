import React from "react";
import RadioButtons from "./RadioButtons";
import { Button } from "antd";

const DonationForm = ({ setModalActiveFor, modalActiveFor }) => {
  const radioData = {
    name: "amount",
    items: [
      { id: 0.1, value: 0.1, label: 0.1 },
      { id: 0.5, value: 0.5, label: 0.5 },
      { id: 1, value: 1, label: 1 },
      { id: 2, value: 2, label: 2 },
      { id: 5, value: 5, label: 5 },
      { id: 5, value: 5, label: 5 },
    ],
  };

  const handleDonate = (e) => {
    setModalActiveFor("");
  };

  return (
    <div className="mt-[2rem] flex flex-col ">
      <RadioButtons radioData={radioData} />
      <Button
        handleDonate={handleDonate}
        type="primary"
        size="large"
        className="mx-auto bg-primary mt-[2.5rem] w-[100px]">
        Donate
      </Button>
    </div>
  );
};

export default DonationForm;
