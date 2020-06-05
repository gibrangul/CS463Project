import React, { useState } from "react";
import { Field, renderIconInput } from "../../Components/Fields";
import AddProductModal from "../../Components/Modals/AddProductModel/AddProductModal";

const ContentHeader = () => {
  const [productSearch, setProductSearch] = useState("");
  return (
    <div className="content__header">
      <div className="flex-row">
        <p className="p2 primary-text medium-font">All Products</p>
        <div className="content__header__vertical-divider" />
        <p className="p2 link-text  medium-font">6 Products</p>
      </div>
      <div className="flex-row">
        <Field
          component={renderIconInput}
          value={productSearch}
          onChange={({ target }: any) => setProductSearch(target.value)}
          autoComplete="no"
          placeholder="Search Products"
          className="icon-input"
          type="text"
          iconName="search-icon"
          label=""
        />
        <AddProductModal />
      </div>
    </div>
  );
};

export default ContentHeader;
