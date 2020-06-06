import TwoLineCell from "../../Components/Table/TwoLineCell";
import IndexCell from "../../Components/Table/IndexCell";

export const brandsColumns = [
  {
    Header: "#",
    accessor: "id",
    maxWidth: 66,
    Cell: IndexCell,
  },
  {
    Header: "NAME/UPC",
    accessor: (d: any) => ({ name: d.name, desc: d.id }),
    Cell: TwoLineCell,
  },
  {
    Header: "ADDED ON",
    accessor: "addedOn",
    maxWidth: 80,
  },
  {
    Header: "NUMBER OF PRODUCTS",
    accessor: "products.length",
    maxWidth: 80,
  },
];
