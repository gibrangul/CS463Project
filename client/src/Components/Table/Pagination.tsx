import React from "react";
import "./Pagination.scss";
import { Field, renderDropdownList } from "../Fields";

interface PaginationProps {
  gotoPage: (page: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  setPageSize: (page: number) => void;
  canPreviousPage: () => void;
  canNextPage: () => void;
  pageOptions: number[];
  pageCount: number;
  pageIndex: number;
  pageSize: number;
}

const Pagination = ({
  gotoPage,
  previousPage,
  nextPage,
  setPageSize,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  pageIndex,
  pageSize,
}: PaginationProps) => {
  if (pageOptions.length === 0) return null;

  const renderPageOptions = () => {
    let options;
    if (pageOptions.length < 6) {
      options = pageOptions;
    } else {
      if (pageIndex <= 3) {
        options = pageOptions.slice(0, 7);
      } else if (pageOptions.length - pageIndex < 4) {
        options = pageOptions.slice(pageOptions.length - 7, pageOptions.length);
      } else {
        options = pageOptions.slice(pageIndex - 3, pageIndex + 4);
      }
    }
    return options.map((page) => (
      <p
        key={page}
        className={page === pageIndex ? "currentPageOption" : "pageOption"}
        onClick={() => gotoPage(page)}
      >
        {page + 1}
      </p>
    ));
  };

  return (
    <div className="pagination">
      <div className="pagination__controls">
        <button
          className="btn-icon-small small-icon left-chevron-icon"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        />
        <div className="pagination__controls__divider-vertical" />
        {renderPageOptions()}
        <div className="pagination__controls__divider-vertical" />
        <button
          className="btn-icon-small small-icon right-chevron-icon"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        />
      </div>
      <Field
        component={renderDropdownList}
        data={[10, 20, 30, 40, 50]}
        value={pageSize}
        onChange={(value: any) => setPageSize(value)}
        placeholder="Pick A Size"
        type="simple"
        dropUp={true}
      />
    </div>
  );
};

export default Pagination;
