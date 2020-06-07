import React, { useEffect, useState } from "react";
import { Field, renderIconInput } from "../../Components/Fields";
import AddProductModal from "../../Components/Modals/AddProductModel/AddProductModal";

const ContentHeader = (props: any) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.search(search);
  }, [search]);
  return (
    <div className="content__header">
      <div className="flex-row">
        <p className="p2 primary-text medium-font">All Products</p>
        <div className="content__header__vertical-divider" />
        <p className="p2 link-text  medium-font">{props.count} Products</p>
      </div>
      <div className="flex-row">
        <Field
          component={renderIconInput}
          value={search}
          onChange={({ target }: any) => setSearch(target.value)}
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
