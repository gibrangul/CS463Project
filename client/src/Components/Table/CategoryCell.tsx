interface CategoryCell {
  cell: {
    value: [
      {
        name: string[];
      }
    ];
  };
}

const CategoryCell = ({ cell }: CategoryCell) =>
  cell.value.slice(0, 2).map((category) => category.name);

export default CategoryCell;
