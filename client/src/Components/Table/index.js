import React from "react";
import { useFlexLayout, usePagination, useSortBy, useTable } from "react-table";
import Pagination from "./Pagination";
import "./Table.scss";

const Table = (props) => {
  const { columns, data, onClick } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useSortBy,
    usePagination,
    useFlexLayout
  );

  return (
    <div className={`table-pagination ${props.className}`}>
      <div className="tableContainer">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}

                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span className="rw-i rw-i-caret-down" />
                      ) : (
                        <span className="rw-i rw-i-caret-up" />
                      )
                    ) : (
                      ""
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              const id = row.original.id;
              return (
                <tr {...row.getRowProps()} onClick={() => onClick(id)}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        setPageSize={setPageSize}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Table;
