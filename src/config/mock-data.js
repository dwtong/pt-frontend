export const CUSTOMERS = [
  {id: 10, name: 'Metservice'},
  {id: 11, name: 'Flick'},
  {id: 12, name: 'Yoobee'}
];

export const ITEM_TEMPLATES = [
  {
    size: 'A5',
    binding: 'Stapled',
    pageRatios: [
      {size: 'A4', type: 'semi_blank', quantity: 5},
      {size: 'A4', type: 'blank_on_one_side', quantity: 8}
    ]
  }, {
    size: 'A5',
    binding: 'Wire',
    pageRatios: [
      {size: 'A4', type: 'blank_on_one_side', quantity: 30}
    ]
  },
];

export const ITEM_BINDINGS = [
  {id: 0, name: 'Wire'},
  {id: 1, name: 'Stapled'},
];

export const ITEM_SIZES = [
  {id: 0, name: 'A4'},
  {id: 1, name: 'A3'},
];
