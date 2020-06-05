import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setLoader, fetchProducts } from "../../Actions";
import { PRODUCTS } from "../../Constants/pages";
import ContentHeader from "./ContentHeader";

import Table from "../../Components/Table";
import { productsColumns } from "./tableColumns";

import { productsData } from './dummyData';

const ProductsPage = () => {
  const loading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  const loadData = useCallback(() => {
    dispatch(selectPage(PRODUCTS));
    dispatch(fetchProducts());
    console.log(products)
    setTimeout(() => dispatch(setLoader(false)) , 500)
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);
  
  const columns = useMemo(() => productsColumns, []);

  return ( !loading &&
    <div className="content">
      <div className="wrapped-content">
        <ContentHeader />
        <Table
          columns={columns}
          data={productsData}
          onClick={() => console.log("clicked")}
          className="retailersPageTable"
        />
      </div>
    </div>

  );
};

export default ProductsPage;