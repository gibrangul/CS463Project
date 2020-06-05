import React, { useState } from "react";
import { Field, renderIconInput } from "../../Components/Fields";
import AddCategoryModal from "../../Components/Modals/AddCategoryModal/AddCategoryModal";

const ContentHeader = () => {
  const [categorySearch, setCategorySearch] = useState("");
  return (
    <div className="content__header">
      <div className="flex-row">
        <p className="p2 primary-text medium-font">All Categories</p>
        <div className="content__header__vertical-divider" />
        <p className="p2 link-text  medium-font">6 Categories</p>
      </div>
      <div className="flex-row">
        <Field
          component={renderIconInput}
          value={categorySearch}
          onChange={({ target }: any) => setCategorySearch(target.value)}
          autoComplete="no"
          placeholder="Search Categories"
          className="icon-input"
          type="text"
          iconName="search-icon"
          label=""
        />
        <AddCategoryModal />
      </div>
    </div>
  );
};

export default ContentHeader;
