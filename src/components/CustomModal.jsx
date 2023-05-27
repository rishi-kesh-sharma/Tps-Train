import React from "react";
import { Button, Modal } from "antd";

const CustomModal = ({
  modalActiveFor,
  setModalActiveFor,
  children,
  title,
  showOk,
}) => {
  // Modal.confirm({
  //   cancelButtonProps: { disabled: true, className: "hidden" },
  // });
  const handleOk = () => {
    setModalActiveFor("");
  };

  const handleCancel = () => {
    setModalActiveFor("");
  };
  console.log(modalActiveFor);

  return (
    <>
      <Modal
        className="w-fit min-w-[300px]"
        width={"fit"}
        title={title}
        open={modalActiveFor}
        onOk={handleOk}
        okButtonProps={{ className: `bg-primary ${!showOk && "hidden"} ` }}
        cancelButtonProps={{ className: `hidden` }}
        onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
