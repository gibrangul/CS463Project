import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  setLoader,
  fetchProducts,
  fetchCategories,
  fetchBrands,
} from "../../Actions";
import { PRODUCTS } from "../../Constants/pages";
import ContentHeader from "./ContentHeader";

import Table from "../../Components/Table";
import { productsColumns } from "./tableColumns";

const ProductsPage = () => {
  const loading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  const loadData = useCallback(() => {
    dispatch(selectPage(PRODUCTS));
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    setTimeout(() => dispatch(setLoader(false)), 500);
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const columns = useMemo(() => productsColumns, []);

  const productsArray = Object.values(products).map(
    (data: any, index: number) => ({
      ...data,
      index: index + 1,
    })
  );

  return (
    !loading && (
      <div className="content">
        <div className="wrapped-content">
          <ContentHeader />
          <Table
            columns={columns}
            data={productsArray}
            onClick={() => console.log("clicked")}
            className="retailersPageTable"
          />
        </div>
      </div>
    )
  );
};

export default ProductsPage;
