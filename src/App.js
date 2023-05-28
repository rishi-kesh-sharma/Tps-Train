import "./App.css";
import Train from "./components/Train";
import Bottom from "./components/Bottom";
import CustomModal from "./components/CustomModal";
import { useEffect, useState } from "react";
import { DONATION, LEADERBOARD } from "./constants";
import LeaderBoardTable from "./components/LeaderBoardTable";
import DonationForm from "./components/DonationForm";
import { FaMedal } from "react-icons/fa";
import Logo from "./images/logo.png";
import Loading from "./components/Loading";
import Congratulations from "./components/Congratulations";

function App() {
  const [modalActiveFor, setModalActiveFor] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [showOk, setShowOk] = useState("");
  const [hasDonated, setHasDonated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [donatedAmount, setDonatedAmount] = useState(null);

  console.log("modal active for", modalActiveFor);

  // title

  useEffect(() => {
    // set show ok
    setShowOk(hasDonated);

    // set title for leader board modal if it is active
    if (modalActiveFor == LEADERBOARD) {
      setTitle(
        <div className="flex gap-[0.4rem] text-3xl items-center">
          <FaMedal className="text-[#E8E254]" />
          Leaderboard
        </div>
      );
    }

    // set title for donation if it is active
    if (modalActiveFor == DONATION) {
      setTitle(<h3>Choose amount to donate</h3>);
    }

    // set title of congratulation if donated
    if (hasDonated) {
      setTitle(<h2 className="text-center">Congratulations!!</h2>);
    }

    // set title to be empty if loading
    if (isLoading) setTitle("");
  }, [hasDonated, modalActiveFor, isLoading]);

  return (
    <div className="App grid grid-cols-1 items-center justify-items-center w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%] pt-[1rem]  mx-auto max-h-[100vh] overflow-hidden">
      <img
        src={Logo}
        alt="logo"
        className="object-contain h-[30px] lg:h-[40px]"
      />
      <Train />
      <Bottom
        setIsModalOpen={setIsModalOpen}
        modalActiveFor={modalActiveFor}
        setModalActiveFor={setModalActiveFor}
      />
      <CustomModal
        showOk={showOk}
        modalActiveFor={modalActiveFor}
        isModalOpen={isModalOpen}
        setHasDonated={setHasDonated}
        hasDonated={hasDonated}
        setModalActiveFor={setModalActiveFor}
        isLoading={isLoading}
        setIsModalOpen={setIsModalOpen}
        title={title}>
        {modalActiveFor == DONATION && !hasDonated && !isLoading && (
          <DonationForm
            hasDonated={hasDonated}
            isLoading={isLoading}
            donatedAmount={donatedAmount}
            setHasDonated={setHasDonated}
            setModalActiveFor={setModalActiveFor}
            setTitle={setTitle}
            showOk={showOk}
            setShowOk={setShowOk}
            setDonatedAmount={setDonatedAmount}
            setIsLoading={setIsLoading}
          />
        )}
        {modalActiveFor == LEADERBOARD && !hasDonated && !isLoading && (
          <LeaderBoardTable />
        )}

        {isLoading && <Loading />}
        {hasDonated && <Congratulations donatedAmount={donatedAmount} />}
      </CustomModal>
    </div>
  );
}

export default App;
