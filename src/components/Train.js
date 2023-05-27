import React from "react";
import TrainImage from "../images/trainnnn.gif";
const Train = () => {
  return (
    <div>
      <img
        src={TrainImage}
        alt="image"
        className="max-h-[200px]  object-contain w-[100%]"
      />
    </div>
  );
};

export default Train;
