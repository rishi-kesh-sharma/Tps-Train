import React from "react";
import TrainImage from "../images/trainnnn.gif";
const Train = () => {
  return (
    <div>
      <img
        src={TrainImage}
        alt="image"
        className="md:h-[250px]  lg:w-[630px] lg:h-[260px]  object-cover"
      />
    </div>
  );
};

export default Train;
