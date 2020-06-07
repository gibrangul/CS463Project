import React, { useMemo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setLoader, fetchRetailers } from "../../Actions";
import "./RetailersPage.scss";
import ContentHeader from "./ContentHeader";
import Table from "../../Components/Table";
import { retailerColumns } from "./tableColumns";
import FilterBar from "./FilterBar";
import { RETAILERS } from "../../Constants/pages";

const RetailersPage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const loading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );
  const retailers = useSelector((state: any) =>
    Object.values(state.retailers).filter(
      (retailer: any) =>
        retailer.name.toLowerCase().includes(search.toLowerCase()) ||
        retailer.city.toLowerCase().includes(search.toLowerCase()) ||
        retailer.location.toLowerCase().includes(search.toLowerCase())
    )
  );

  const loadData = useCallback(() => {
    dispatch(selectPage(RETAILERS));
    setTimeout(() => dispatch(setLoader(false)), 500);
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const columns = useMemo(() => retailerColumns, []);
  return (
    !loading && (
      <div className="content-container">
        <FilterBar />
        <div className="content">
          <div className="wrapped-content">
            <ContentHeader
              count={retailers.length}
              search={(term: string) => setSearch(term)}
            />
            <Table
              columns={columns}
              data={retailers.map((data: any, index: number) => ({
                ...data,
                index: index + 1,
              }))}
              onClick={() => console.log("clicked")}
              className="retailersPageTable"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default RetailersPage;
