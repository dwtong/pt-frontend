export const CUSTOMERS = ['Metservice', 'Flick', 'Yoobee'];

export const INVENTORY = [
  {
    id: 10,
    type: 'Blank on one side',
    sizes: [
      {
        name: 'A5',
        sources: [
          {id: 100, name: 'metservice', quantity: 55},
          {id: 101, name: 'flick', quantity: 90},
        ]
      }, {
        name: 'A4',
        sources: [
          {id: 200, name: 'metservice', quantity: 55},
          {id: 201, name: 'flick', quantity: 90},
        ]
      }
    ]
  },
  {
    id: 11,
    type: 'Semi blank',
    sizes: [
      {
        name: 'A5',
        sources: [
          {id: 100, name: 'metservice', quantity: 55},
          {id: 101, name: 'flick', quantity: 90},
        ]
      }, {
        name: 'A4',
        sources: [
          {id: 200, name: 'metservice', quantity: 55},
          {id: 201, name: 'flick', quantity: 90},
        ]
      }
    ]
  }
];


const exampleState = {
  // 'data' is curated from GET calls on form load
  data: {
    customers: CUSTOMERS,
    inventory: INVENTORY
  },

  // 'order' contains details to be POSTed on order submission
  order: {
    customerId: 'metservice',
    dueDate: '2017-02-22',
    items: [
      {
        binding: 'wire',
        size: 'a5',
        quantity: 100,
        pages: [
          {
            paperId: 10,
            quantity: 5,
            sources: [
              {id: 100, quantity: 55},
              {id: 101, quantity: 20}
            ]
          },
          {
            paperId: 11,
            quantity: 8,
            sources: [
              {sourceId: 200, quantity: 55},
              {sourceId: 201, quantity: 20}
            ]
          },
        ]
      },
    ]
  },
}
