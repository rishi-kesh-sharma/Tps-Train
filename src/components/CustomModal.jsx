import React, { useEffect } from "react";
import { Modal } from "antd";

const CustomModal = ({
  setModalActiveFor,
  hasDonated,
  children,
  title,
  showOk,
  setHasDonated,
  isLoading,
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
    setModalActiveFor("");
    setHasDonated(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModalActiveFor("");
    setHasDonated(false);
  };

  return (
    <>
      <Modal
        centered
        confirmLoading={isLoading}
        closable={!isLoading && !hasDonated}
        className={`w-fit min-w-[300px]`}
        width={"fit"}
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{
          className: `bg-primary ${!showOk && "hidden"}`,
        }}
        cancelButtonProps={{ className: `hidden` }}
        onCancel={handleCancel}>
        <div className="transition-all">{children}</div>
      </Modal>
    </>
  );
};

export default CustomModal;
