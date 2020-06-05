import React from "react";

interface OrderStatusCell {
  cell: {
    value: string
  }
}

const OrderStatusCell = ({ cell: { value } }: OrderStatusCell) => (
  <div
    className={`list_column__order-status list_column__order-status_${value}`}
  >
    <div className="status-dot" />
    <p>{value}</p>
  </div>
);

export default OrderStatusCell;
