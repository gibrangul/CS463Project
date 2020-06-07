import React, { useState, useEffect } from "react";
import { Field, renderIconInput } from "../../Components/Fields";
import AddRetailerModal from "../../Components/Modals/AddRetailerModel/AddRetailerModal";

const ContentHeader = (props: any) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.search(search);
  }, [search]);

  return (
    <div className="content__header">
      <div className="flex-row">
        <p className="p2 primary-text medium-font">All Retailers</p>
        <div className="content__header__vertical-divider" />
        <p className="p2 link-text  medium-font">{props.count} Retailers</p>
      </div>
      <div className="flex-row">
        <Field
          component={renderIconInput}
          value={search}
          onChange={({ target }: any) => setSearch(target.value)}
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
