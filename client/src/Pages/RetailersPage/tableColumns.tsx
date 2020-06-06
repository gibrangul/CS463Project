import TwoLineCell from '../../Components/Table/TwoLineCell';
import IndexCell from '../../Components/Table/IndexCell';

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
  // {
  //   Header: "ORDERS",
  //   accessor: "orders",
  //   width: 30
  // },
  // {
  //   Header: "REVENUE(Rs)",
  //   accessor: "revenue",
  //   width: 45
  // }
];

// id: "0",
//       name: "Freshlee",
//       address: "E-11/3, Islamabad",
//       number: "number",
//       addedOn: "04 Apr 2020",
//       products: "1,200",
//       orders: "20",
//       revenue: "1,000",