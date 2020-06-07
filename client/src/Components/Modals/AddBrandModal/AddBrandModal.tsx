import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeader";
import { RenderInput, ImageInput } from "../../Fields/index";
import axios from 'axios';

import "./AddBrandModal.scss";
import { SubmitButton } from "../../Fields/index";

Modal.setAppElement("#root");

const AddBrandModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [brandName, setBrandName ] = useState("");

  const handleSubmit = async () => {
    const brand = await axios.post("http://localhost:3001/brands/add", {name: brandName})
  }

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
        Add Brand
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="brand_modal_container"
      >
        <ModalHeader title="Add Brand" />
        <form className="brand_modal_elements" onSubmit={handleSubmit}>
            <RenderInput type="text" name="Brand Name" onChange={(name: any) => setBrandName(name.target.value)}/>
            <SubmitButton />
        </form>
      </Modal>
    </div>
  );
};

export default AddBrandModal;
