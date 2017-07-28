export const CUSTOMERS = [
  {
    id: 300,
    name: 'Metservice'
  }, {
    id: 301,
    name: 'Flick'
  }, {
    id: 302,
    name: 'Strategy'
  }
];

export const BOOKS = [
  {
    id: 200,
    name: 'A5 Stapled',
    pages: [
      {paperId: 100, quantity: 5},
      {paperId: 101, quantity: 8}
    ]
  }, {
    id: 201,
    name: 'A5 Wire Bound',
    pages: [
      {paperId: 100, quantity: 10},
      {paperId: 101, quantity: 5}
    ]
  },
];

export const PAPERS = [
  {
    id: 100,
    name: 'Semi Blank A4',
    sources: [
      {name: 'Flick', id: 1000, quantity: 500},
      {name: 'Metservice', id: 1001, quantity: 1000}
    ],
  },
  {
    id: 101,
    name: 'Blank On One Side A4',
    sources: [
      {name: 'Flick', id: 1010, quantity: 500},
      {name: 'Metservice', id: 1011, quantity: 1000}
    ],
  },
];

const exampleState = {
  // 'data' is curated from GET calls on form load
  data: {
    customers: CUSTOMERS,
    books: BOOKS,
    papers: PAPERS,
  },

  // 'order' contains details to be POSTed on order submission
  order: {
    customer: 'Customer Name',
    dueDate: '2017-02-22',
    items: [
      {bookId: 200, quantity: 100},
      {bookId: 201, quantity: 50},
    ],
    papers: [
      {
        paperId: 100, sources: [
          {sourceId: 1001, quantity: 300},
          {sourceId: 1000, quantity: 200},
        ]
      }
    ]
  },
}
