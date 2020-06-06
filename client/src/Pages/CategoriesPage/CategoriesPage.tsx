import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setLoader, fetchCategories } from "../../Actions";
import { CATEGORIES } from "../../Constants/pages";
import ContentHeader from "./ContentHeader";

import Table from "../../Components/Table";
import { categoriesColumns } from './tableColumns';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );
  const categories = useSelector((state: any) => state.categories);
  const loadData = useCallback(() => {
    dispatch(selectPage(CATEGORIES));
    dispatch(fetchCategories());
    setTimeout(() => dispatch(setLoader(false)) , 500)
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const columns = useMemo(() => categoriesColumns, []);

  return ( !loading &&
    <div className="content">
      <div className="wrapped-content">
        <ContentHeader />
        <Table
          columns={columns}
          data={Object.values(categories)}
          onClick={() => console.log("clicked")}
          className="retailersPageTable"
        />
      </div>
    </div>
  );
};

export default CategoriesPage;
