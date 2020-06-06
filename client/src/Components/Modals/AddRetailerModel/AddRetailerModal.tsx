import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeader";
import { RenderInput, ImageInput } from "../../Fields/index";

import "./AddRetailerModal.scss";
import { SubmitButton } from "../../Fields/index";
import axios from 'axios';

Modal.setAppElement("#root");

const AddRetailerModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async () => {
    const retailers = await axios.post("http://localhost:3001/retailers", {
      name: name,
      email: email,
      location: location,
      city: city,
      number: number
    });
    console.log(retailers)
  };

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
        className="retailer_modal_container"
      >
        <ModalHeader title="Add Retailer" />
        <form className="retailer_modal_elements" onSubmit={handleSubmit}>
          <RenderInput
            type="text"
            name="Name"
            onChange={(name: any) => setName(name.target.value)}
          />
          <RenderInput
            type="email"
            name="Email"
            onChange={(email: any) => setEmail(email.target.value)}
          />
          <RenderInput
            type="text"
            name="Location"
            onChange={(location: any) => setLocation(location.target.value)}
          />
          <RenderInput
            type="text"
            name="City"
            onChange={(city: any) => setCity(city.target.value)}
          />
          <RenderInput
            type="text"
            name="Number"
            onChange={(number: any) => setNumber(number.target.value)}
          />
          <SubmitButton />
        </form>
      </Modal>
    </div>
  );
};

export default AddRetailerModal;
