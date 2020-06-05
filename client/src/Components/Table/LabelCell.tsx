import React from "react";

interface LabelCell {
  cell: {
    value: string;
  };
}

const LabelCell = ({ cell: { value } }: LabelCell) => (
  <p className="table-cell__label">{value}</p>
);

export default LabelCell;
