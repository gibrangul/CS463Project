import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "../ModalHeader";
import {
  RenderInput,
  ImageInput,
  renderDropdownList,
  Field,
} from "../../Fields/index";

import "./AddProductModal.scss";
import { SubmitButton } from "../../Fields/index";
import { useSelector } from "react-redux";
import axios from 'axios';

Modal.setAppElement("#root");

const AddRetailerModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState({ _id: "", name: "All Categories" });
  const [brand, setBrand] = useState({ _id: "", name: "All Brands" });
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [upc, setUpc] = useState("");
  const [description, setDescription] = useState("");

  const categories = useSelector((state: { categories: any }) =>
    Object.values(state.categories)
  );
  const brands = useSelector((state: { brands: any }) =>
    Object.values(state.brands)
  );

  console.log("category: ", category._id);
  console.log(brand._id);


  const handleSubmit = async () => {
    const products = await axios.post("http://localhost:3001/products/add", {
      name: name,
      price: price,
      size: size,
      upc: upc,
      description: description,
      category: {
        _id: category._id,
        name: category.name
      },
      brand: {
        _id: brand._id,
        name: brand.name
      }
    });
    console.log(products)
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
        Add Product
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
        <ModalHeader title="Add Product" />
        <form className="modal_elements" onSubmit={handleSubmit}>
          <RenderInput
            type="text"
            name="Name"
            onChange={(name: any) => setName(name.target.value)}
          />
          <RenderInput
            type="text"
            name="price"
            onChange={(price: any) => setPrice(price.target.value)}
          />
          <RenderInput
            type="text"
            name="size"
            onChange={(size: any) => setSize(size.target.value)}
          />
          <RenderInput
            type="text"
            name="upc"
            onChange={(upc: any) => setUpc(upc.target.value)}
          />
          <RenderInput
            type="text"
            name="description"
            onChange={(description: any) =>
              setDescription(description.target.value)
            }
          />
          <Field
            component={renderDropdownList}
            data={[{ id: "", name: "All Categories" }, ...categories]}
            valueField="id"
            textField="name"
            type="products"
            value={category}
            onChange={(value: any) => setCategory(value)}
          />
          <Field
            component={renderDropdownList}
            data={[{ id: "", name: "All Brands" }, ...brands]}
            valueField="id"
            textField="name"
            type="products"
            value={brand}
            onChange={(value: any) => setBrand(value)}
          />
          <SubmitButton />
        </form>
      </Modal>
    </div>
  );
};

export default AddRetailerModal;
