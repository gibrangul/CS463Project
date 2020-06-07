import TwoLineCell from '../../Components/Table/TwoLineCell';
import IndexCell from '../../Components/Table/IndexCell';
import DeleteCell from '../../Components/Table/DeleteCell';

export const retailerColumns = [
  {
    Header: "#",
    accessor: (d:any) => d.index,
    maxWidth: 66,
    Cell: IndexCell
  },
  {
    Header: "NAME",
    accessor: (d: any) => ({ name: d.name, desc: d.location + ", " + d.city }),
    Cell: TwoLineCell
  },
  {
    Header: "NUMBER",
    accessor: "number",
    width: 55
  },
  {
    Header: "EMAIL",
    accessor: "email",
    width: 65
  },
  {
    Header: "ADDED ON",
    accessor: "addedOn",
    width: 50
  },
  {
    Header: "PRODUCTS",
    accessor: "products.length",
    width: 40
  },
  {
    Header: "Delete",
    accessor: (d: any) => ({ id: d._id, type: "retailer" }),
    maxWidth: 50,
    Cell: DeleteCell,
  },
];