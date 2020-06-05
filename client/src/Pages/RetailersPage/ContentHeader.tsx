import React, { useState } from "react";
import { Field, renderIconInput } from "../../Components/Fields";
import AddRetailerModal from "../../Components/Modals/AddRetailerModel/AddRetailerModal";

const ContentHeader = () => {
  const [retailerSearch, setRetailerSearch] = useState("");
  return (
    <div className="content__header">
      <div className="flex-row">
        <p className="p2 primary-text medium-font">All Retailers</p>
        <div className="content__header__vertical-divider" />
        <p className="p2 link-text  medium-font">48 Retailers</p>
      </div>
      <div className="flex-row">
        <Field
          component={renderIconInput}
          value={retailerSearch}
          onChange={({ target }: any) => setRetailerSearch(target.value)}
          autoComplete="no"
          placeholder="Search Retailers"
          className="icon-input"
          type="text"
          iconName="search-icon"
          label=""
        />
        {/* <button className="btn btn-primary-border">
          Add Retailer
        </button> */}
        <AddRetailerModal/>
      </div>
    </div>
  );
};

export default ContentHeader;
