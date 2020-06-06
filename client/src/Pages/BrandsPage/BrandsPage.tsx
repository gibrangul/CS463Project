import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setLoader, fetchBrands } from "../../Actions";
import { BRANDS } from "../../Constants/pages";
import ContentHeader from "./ContentHeader";
import Table from "../../Components/Table";
import { brandsColumns } from "./tableColumns";

const BrandsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );
  const brands = useSelector((state: any) => state.brands);
  const loadData = useCallback(() => {
    dispatch(selectPage(BRANDS));
    dispatch(fetchBrands());
    setTimeout(() => dispatch(setLoader(false)), 500);
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    !loading && (
      <div className="content">
        <div className="wrapped-content">
          <ContentHeader />
          <Table
            columns={brandsColumns}
            data={Object.values(brands).map((data: any, index: number) => ({
              ...data,
              index: index + 1,
            }))}
            onClick={() => console.log("clicked")}
            className="retailersPageTable"
          />
        </div>
      </div>
    )
  );
};

export default BrandsPage;
