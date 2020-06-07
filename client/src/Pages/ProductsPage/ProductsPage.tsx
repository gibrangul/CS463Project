import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setLoader } from "../../Actions";
import Table from "../../Components/Table";
import { PRODUCTS } from "../../Constants/pages";
import ContentHeader from "./ContentHeader";
import { productsColumns } from "./tableColumns";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const loading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );
  const products = useSelector((state: any) =>
    Object.values(state.products).filter(
      (product: any) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.upc.toLowerCase().includes(search.toLowerCase())
    )
  );

  const dispatch = useDispatch();
  const loadData = useCallback(() => {
    dispatch(selectPage(PRODUCTS));
    setTimeout(() => dispatch(setLoader(false)), 500);
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const columns = useMemo(() => productsColumns, []);

  const productsArray = products.map((data: any, index: number) => ({
    ...data,
    index: index + 1,
  }));

  return (
    !loading && (
      <div className="content">
        <div className="wrapped-content">
          <ContentHeader
            count={products.length}
            search={(term: string) => setSearch(term)}
          />
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
