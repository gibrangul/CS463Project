import React from "react";

interface TwoLineCell {
  cell: {
    value: {
      name: string;
      desc: string;
    };
  };
}

const TwoLineCell = ({
  cell: {
    value: { name, desc },
  },
}: TwoLineCell) => (
  <div className="table-cell__two-line-cell">
    <p className="table-cell__two-line-cell__name">{name}</p>
    <p className="table-cell__two-line-cell__desc">{desc}</p>
  </div>
);

export default TwoLineCell;
