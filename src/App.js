import "./App.css";
import Train from "./components/Train";
import Bottom from "./components/Bottom";
import CustomModal from "./components/CustomModal";
import { useState } from "react";
import { DONATION, LEADERBOARD } from "./constants";
import LeaderBoardTable from "./components/LeaderBoardTable";
import DonationForm from "./components/DonationForm";
import { FaMedal } from "react-icons/fa";
import Logo from "./images/logo.png";

function App() {
  const [modalActiveFor, setModalActiveFor] = useState("");
  console.log(modalActiveFor);

  // title
  const title =
    modalActiveFor == DONATION ? (
      "Choose amount to donate"
    ) : (
      <div className="flex gap-[0.3rem] items-center">
        <FaMedal className="text-[#E8E254]" /> Leaderboard
      </div>
    );

  // showok
  const showOk = modalActiveFor == LEADERBOARD && true;
  // current modal component
  const currentModalComponent =
    modalActiveFor == DONATION ? (
      <DonationForm setModalActiveFor={setModalActiveFor} />
    ) : (
      <LeaderBoardTable />
    );
  return (
    <div className="App grid grid-cols-1 items-center justify-items-center w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] py-[2rem] md:py-[3rem] mx-auto">
      <img src={Logo} alt="logo" className="object-contain  w-[150px]" />
      <Train />
      <Bottom
        modalActiveFor={modalActiveFor}
        setModalActiveFor={setModalActiveFor}
      />
      <CustomModal
        showOk={showOk}
        modalActiveFor={modalActiveFor}
        setModalActiveFor={setModalActiveFor}
        title={title}>
        {currentModalComponent}
      </CustomModal>
    </div>
  );
}

export default App;
