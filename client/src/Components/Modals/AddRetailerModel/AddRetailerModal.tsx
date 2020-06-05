import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeader";
import { RenderInput, ImageInput } from "../../Fields/index";

import "./AddRetailerModal.scss";
import { SubmitButton } from "../../Fields/index";

Modal.setAppElement("#root");

const AddRetailerModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="btn btn-primary-border">
        Add Retailer
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="modal_container"
      >
        <ModalHeader title="Add Retailer" />
        <form className="modal_elements">
            <RenderInput type="email" name="Email"  />
            <RenderInput type="password" name="Password" />
            <RenderInput type="text" name="Name" />
            <RenderInput type="text" name="City" />
            <RenderInput type="text" name="Location" />
            <RenderInput type="text" name="Category" />
            <RenderInput type="text" name="Number" />
            <RenderInput type="text" name="Coordinates" />
            <ImageInput />
            <SubmitButton />
        </form>
      </Modal>
    </div>
  );
};

export default AddRetailerModal;
