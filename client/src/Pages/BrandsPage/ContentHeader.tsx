import React, { useState } from "react";
import { Field, renderIconInput } from "../../Components/Fields";
import AddBrandModal from "../../Components/Modals/AddBrandModal/AddBrandModal";

const ContentHeader = () => {
  const [brandSearch, setBrandSearch] = useState("");
  return (
    <div className="content__header">
      <div className="flex-row">
        <p className="p2 primary-text medium-font">All Brands</p>
        <div className="content__header__vertical-divider" />
        <p className="p2 link-text  medium-font">6 Brands</p>
      </div>
      <div className="flex-row">
        <Field
          component={renderIconInput}
          value={brandSearch}
          onChange={({ target }: any) => setBrandSearch(target.value)}
          autoComplete="no"
          placeholder="Search Brands"
          className="icon-input"
          type="text"
          iconName="search-icon"
          label=""
        />
        <AddBrandModal />
      </div>
    </div>
  );
};

export default ContentHeader;
