export const CUSTOMERS = ['Metservice', 'Flick', 'Strategy'];
export const NOTEBOOKS = [
  {
    id: 0,
    name: 'A5 Stapled',
    paper: [
      {paperTypeId: 0, type: 'Blank On One Side A4', quantity: 5},
      {paperTypeId: 1, type: 'Semi Blank A4', quantity: 8}
    ]
  }, {
    id: 1,
    name: 'A5 Wire Bound',
    paper: [
      {paperTypeId: 0, type: 'Blank On One Side A4', quantity: 10},
      {paperTypeId: 1, type: 'Semi Blank A4', quantity: 5}
    ]
  },
];
export const PAPER_SOURCES = [
  {
    supplierId: 0,
    supplierName: 'Metservice',
    paper: [
      {paperTypeId: 0, type: 'Blank On One Side A4', quantity: 500},
      {paperTypeId: 1, type: 'Semi Blank A4', quantity: 1000}
    ],
  },
    {
    supplierId: 1,
    supplierName: 'Flick',
    paper: [
      {paperTypeId: 0, type: 'Blank On One Side A4', quantity: 250},
      {paperTypeId: 1, type: 'Semi Blank A4', quantity: 750}
    ],
  },
];
