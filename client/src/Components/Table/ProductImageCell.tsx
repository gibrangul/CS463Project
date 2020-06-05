import React from "react";

interface CategoryCell {
  cell: {
    value: [
      {
        thumbnail: string;
      }
    ];
  };
}

const CategoryCell = ({ cell: { value } }: CategoryCell) =>
  value.length > 0 ? (
    <img
      src={value[0].thumbnail}
      alt="product"
      className="table-cell__image_small"
    />
  ) : (
    <p>No Image</p>
  );

export default CategoryCell;
