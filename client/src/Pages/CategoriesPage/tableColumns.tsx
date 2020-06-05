import TwoLineCell from '../../Components/Table/TwoLineCell';
import IndexCell from '../../Components/Table/IndexCell';

export const categoriesColumns = [
  {
    Header: "#",
    accessor: "id",
    maxWidth: 66,
    Cell: IndexCell
  },
  {
    Header: "NAME/UPC",
    accessor: (d: any) => ({ name: d.name, desc: d.upc}),
    Cell: TwoLineCell
  },
  {
    Header: "PRICE",
    accessor: "price",
    width: 45
  },
  {
    Header: "BRAND",
    accessor: "brand",
    width: 55
  },
  {
    Header: "SIZE",
    accessor: "size",
    width: 50
  },
  {
    Header: "CATEGORIES",
    accessor: "categories",
    width: 50
  },

];
