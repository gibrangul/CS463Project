import TwoLineCell from '../../Components/Table/TwoLineCell';
import IndexCell from '../../Components/Table/IndexCell';
import DeleteCell from '../../Components/Table/DeleteCell';

export const categoriesColumns = [
  {
    Header: "#",
    accessor: (d:any) => d.index,
    maxWidth: 66,
    Cell: IndexCell
  },
  {
    Header: "NAME/UPC",
    accessor: (d: any) => ({ name: d.name, desc: d.yid}),
    Cell: TwoLineCell
  },

  {
    Header: "ADDED ON",
    accessor: "addedOn",
    maxWidth: 80
  },
  {
    Header: "NUMBER OF PRODUCTS",
    accessor: "products.length",
    maxWidth: 80
  },
  {
    Header: "Delete",
    accessor: (d: any) => ({ id: d._id, type: "category" }),
    maxWidth: 50,
    Cell: DeleteCell,
  },
];
