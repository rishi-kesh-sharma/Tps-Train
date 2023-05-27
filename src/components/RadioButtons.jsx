import React, { useRef } from "react";

const RadioButtons = ({ radioData }) => {
  const handleClick = (e) => {
    console.log(e.target.value);
    console.log("clicked");
  };
  return (
    <ul class="donate-now grid grid-cols-3 gap-[1rem]">
      {radioData.items.map((item, index) => {
        return (
          <li
            key={index}
            className=" border border-secondary group  rounded-lg cursor-pointer relative h-[4rem]">
            <input
              onClick={handleClick}
              type="radio"
              id={item.id}
              name={radioData.name}
              value={item.value}
              className="cursor-pointer peer  rounded-lg invisible  checked:bg-primary  checked:text-white hover:bg-primary hover:text-white w-full h-full  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] right-0 bottom-0 block z-50"
            />
            <label
              for={item.label}
              className=" peer-hover:text-white group-hover:bg-primary peer-hover:cursor-pointer rounded-lg  text-center  flex items-center w-full h-full justify-center">
              {item.label}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default RadioButtons;
