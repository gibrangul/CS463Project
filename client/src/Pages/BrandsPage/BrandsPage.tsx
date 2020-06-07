import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setLoader } from "../../Actions";
import Table from "../../Components/Table";
import { BRANDS } from "../../Constants/pages";
import ContentHeader from "./ContentHeader";
import { brandsColumns } from "./tableColumns";

const BrandsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );

  const [search, setSearch] = useState("");

  const brands = useSelector((state: any) =>
    Object.values(state.brands).filter((brand: any) =>
      brand.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  const loadData = useCallback(() => {
    dispatch(selectPage(BRANDS));
    setTimeout(() => dispatch(setLoader(false)), 500);
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    !loading && (
      <div className="content">
        <div className="wrapped-content">
          <ContentHeader
            count={brands.length}
            search={(term: string) => setSearch(term)}
          />
          <Table
            columns={brandsColumns}
            data={brands.map((data: any, index: number) => ({
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
