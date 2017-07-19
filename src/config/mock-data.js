export const CUSTOMERS = ['Metservice', 'Flick', 'Strategy'];
export const PAPER_TYPES = [
  {
    id: 0,
    type: 'Blank On One Side A4'
  },
  {
    id: 1,
    type: 'Semi Blank A4',
  }];
export const NOTEBOOKS = [
  {
    id: 0,
    name: 'A5 Stapled',
    paper: [
      {paperTypeId: 0, quantity: 5},
      {paperTypeId: 1, quantity: 8}
    ]
  }, {
    id: 1,
    name: 'A5 Wire Bound',
    paper: [
      {paperTypeId: 0, quantity: 10},
      {paperTypeId: 1, quantity: 5}
    ]
  },
];
export const PAPER_SOURCES = [
  {
    id: 0,
    name: 'Metservice',
    paper: [
      {paperTypeId: 0, quantity: 500},
      {paperTypeId: 1, quantity: 1000}
    ],
  },
    {
    id: 1,
    name: 'Flick',
    paper: [
      {paperTypeId: 0, quantity: 250},
      {paperTypeId: 1, quantity: 750}
    ],
  },
];
