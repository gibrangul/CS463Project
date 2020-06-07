import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteBrand,
  deleteProduct,
  deleteCategory,
  deleteRetailer,
} from "../../Actions";

const DeleteCell = ({ value }: any) => {
  const { id, type } = value;
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        switch (type) {
          case "brand":
            return dispatch(deleteBrand(id));
          case "product":
            return dispatch(deleteProduct(id));
          case "category":
            return dispatch(deleteCategory(id));
          case "retailer":
            return dispatch(deleteRetailer(id));
        }
        console.log(id);
      }}
      className="btn btn-danger-border"
    >
      Remove
    </button>
  );
};

export default DeleteCell;
