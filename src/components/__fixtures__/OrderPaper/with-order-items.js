export default {
  props: {
    books: [
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
          {paperId: 100, quantity: 5},
          {paperId: 101, quantity: 5}
        ]
      },
    ],
    order: {
      customer: 'Customer Name',
      dueDate: '2017-02-22',
      items: [
        {bookId: 200, quantity: 5},
        {bookId: 201, quantity: 5},
      ],
      sources: []
    },
    paperTypes: [
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
    ],
  }
};
