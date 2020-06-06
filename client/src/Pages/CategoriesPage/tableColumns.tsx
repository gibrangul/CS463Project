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
    accessor: (d: any) => ({ name: d.type, desc: d.yid}),
    Cell: TwoLineCell
  },
  {
    Header: "NUMBER OF PRODUCTS",
    accessor: "products.length",
    maxWidth: 80
  },
];
