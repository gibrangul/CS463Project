import React, { useMemo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setLoader } from "../../Actions";
import "./RetailersPage.scss";
import ContentHeader from "./ContentHeader";
import Table from "../../Components/Table";
import { retailerColumns } from "./tableColumns";
import { retailers } from "./dummyData";
import FilterBar from "./FilterBar";
import { RETAILERS } from "../../Constants/pages";

const RetailersPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
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
            <ContentHeader />
            <Table
              columns={columns}
              data={retailers}
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
