import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setLoader } from "../../Actions";
import Table from "../../Components/Table";
import { CATEGORIES } from "../../Constants/pages";
import ContentHeader from "./ContentHeader";
import { categoriesColumns } from "./tableColumns";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );
  const [search, setSearch] = useState("");

  const categories = useSelector((state: any) =>
    Object.values(state.categories).filter((category: any) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    )
  );
  const loadData = useCallback(() => {
    dispatch(selectPage(CATEGORIES));
    setTimeout(() => dispatch(setLoader(false)), 500);
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const columns = useMemo(() => categoriesColumns, []);

  return (
    !loading && (
      <div className="content">
        <div className="wrapped-content">
          <ContentHeader
            count={categories.length}
            search={(term: string) => setSearch(term)}
          />
          <Table
            columns={columns}
            data={categories.map((data: any, index: number) => ({
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

export default CategoriesPage;
