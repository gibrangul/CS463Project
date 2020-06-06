import TwoLineCell from "../../Components/Table/TwoLineCell";
import IndexCell from "../../Components/Table/IndexCell";

export const productsColumns = [
  {
    Header: "#",
    accessor: (d:any) => d.index,
    maxWidth: 66,
    Cell: IndexCell,
  },
  {
    Header: "NAME/UPC",
    accessor: (d: any) => ({ name: d.title, desc: d.upc }),
    Cell: TwoLineCell,
  },
  {
    Header: "PRICE",
    accessor: "price",
    width: 45,
  },
  {
    Header: "BRAND",
    accessor: "brand.name",
    width: 55,
  },
  {
    Header: "SIZE",
    accessor: "size",
    width: 50,
  },
  {
    Header: "CATEGORIES",
    accessor: "category.name",
    width: 50,
  },
  {
    Header: "COUNT",
    accessor: "count",
    width: 50,
  },
];
