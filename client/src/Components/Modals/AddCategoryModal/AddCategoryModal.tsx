import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeader";
import { RenderInput, ImageInput } from "../../Fields/index";
import axios from 'axios';

import "./AddCategoryModal.scss";
import { SubmitButton } from "../../Fields/index";

Modal.setAppElement("#root");

const AddCategoryModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName ] = useState("");

  const handleSubmit = async () => {
    const category = await axios.post("http://localhost:3001/categories/add", {type: categoryName})
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
        Add Category
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="category_modal_container"
      >
        <ModalHeader title="Add Category" />
        <form className="category_modal_elements" onSubmit={handleSubmit}>
            <RenderInput type="text" name="Category" onChange={(name: any) => setCategoryName(name.target.value)} />
            <SubmitButton />
        </form>
      </Modal>
    </div>
  );
};

export default AddCategoryModal;
