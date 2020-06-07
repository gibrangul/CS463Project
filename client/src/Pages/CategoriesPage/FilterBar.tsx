import React, { useState } from "react";
import { Field, renderDropdownList } from "../../Components/Fields";

const FilterBar = () => {
  const [brand, setBrand] = useState({ id: "", name: "All Retailers" });
  const [duration, setDuration] = useState({ id: "", name: "All Time" });
  const brands = [
    {
      id: "jhgfdjs3",
      name: "Freshlee",
    },
  ];

  const durations = [
    {
      id: "kasjdk",
      name: "Past Week",
    },
  ];
  return (
    <div className="filter-bar">
      <Field
        component={renderDropdownList}
        data={[{ id: "", name: "All Retailers" }, ...brands]}
        valueField="id"
        textField="name"
        value={brand}
        onChange={(value: any) => setBrand(value)}
        placeholder="Pick A Brand"
      />
      <Field
        component={renderDropdownList}
        data={[{ id: "", name: "All Time" }, ...durations]}
        valueField="id"
        textField="name"
        value={duration}
        onChange={(value: any) => setDuration(value)}
        placeholder="Pick A Duration"
        type="simple"
      />
    </div>
  );
};

export default FilterBar;
