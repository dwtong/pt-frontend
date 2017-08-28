export const CUSTOMERS = [
  {id: 10, name: 'Metservice'},
  {id: 11, name: 'Flick'},
  {id: 12, name: 'Yoobee'}
];

export const BOOK_TEMPLATES = [
  {
    size: 'A5',
    binding: 'Stapled',
    pageRatios: [
      {size: 'A4', type: 'semi_blank', quantity: 5},
      {size: 'A4', type: 'blank_on_one_side', quantity: 8}
    ]
  }, {
    size: 'A5',
    binding: 'Wire Bound',
    pageRatios: [
      {size: 'A4', type: 'blank_on_one_side', quantity: 30}
    ]
  },
];
