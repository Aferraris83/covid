export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const headCells = [
  {
    id: 'country',
    numeric: false,
    disablePadding: true,
    label: 'Country',
  },
  {
    id: 'confirmed',
    numeric: true,
    disablePadding: false,
    label: 'Confirmed',
  },
  {
    id: 'deaths',
    numeric: true,
    disablePadding: false,
    label: 'Deaths',
  },
  {
    id: 'continent',
    numeric: false,
    disablePadding: false,
    label: 'Continent',
  },
];

export const continents = [
  {
    label: "none",
    value: ""
  },
  {
    label: "Asia",
    value: "Asia"
  },
  {
    label: "Africa",
    value: "Africa"
  },
  {
    label: "Europe",
    value: "Europe",
  },
  {
    label: "North America",
    value: "North America"
  },
  {
    label: "South America",
    value: "South America"
  },
  {
    label: "Oceania",
    value: "Oceania"
  },
];
