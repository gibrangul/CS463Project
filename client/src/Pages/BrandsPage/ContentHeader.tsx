import React, { useState, useEffect } from "react";
import { Field, renderIconInput } from "../../Components/Fields";
import AddBrandModal from "../../Components/Modals/AddBrandModal/AddBrandModal";

const ContentHeader = (props: any) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.search(search);
  }, [search]);

  return (
    <div className="content__header">
      <div className="flex-row">
        <p className="p2 primary-text medium-font">All Brands</p>
        <div className="content__header__vertical-divider" />
        <p className="p2 link-text  medium-font">{props.count} Brands</p>
      </div>
      <div className="flex-row">
        <Field
          component={renderIconInput}
          value={search}
          onChange={({ target }: any) => setSearch(target.value)}
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
