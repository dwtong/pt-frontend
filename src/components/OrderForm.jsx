import React, { Component } from 'react';
import AddNewItem from './AddNewItem';
import OrderItems from './OrderItems';
import OrderDetails from './OrderDetails';
import OrderPaper from './OrderPaper';
import OrderPaperItem from './OrderPaperItem';
import OrderPaperSummary from './OrderPaperSummary';

import { CUSTOMERS, BOOKS, PAPERS } from '../config/mock-data';

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 'data' is curated from GET calls on form load
      data: {
        customers: CUSTOMERS,
        books: BOOKS,
        papers: PAPERS,
      },

      // 'order' contains details to be POSTed on order submission
      order: {
        customer: null,
        dueDate: null,
        items: [],
        papers: [],
      },
    }

    this.onCustomerChange = this.onCustomerChange.bind(this);
    this.onDueDateChange = this.onDueDateChange.bind(this);
    this.onNewItem = this.onNewItem.bind(this);
    this.addPaperSource = this.addPaperSource.bind(this);
    // this.calculatePaperQuantity = this.calculatePaperQuantity.bind(this);
  }

  onCustomerChange(event) {
    this.setState({ order: { ...this.state.order, customer: event.target.value } });
  }

  onDueDateChange(event) {
    this.setState({ order: { ...this.state.order, dueDate: event.target.value } });
  }

  onNewItem(item) {
    const { data, order } = this.state;
    const bookId = parseInt(item.selection, 10);
    const quantity = parseInt(item.quantity, 10);
    const items = [...order.items];
    const index = items.findIndex(i => i.bookId === bookId);

    if (index >= 0) {
      items[index].quantity += quantity;
      this.setState({order: { ...this.state.order, items } });

    } else {
      items.push({bookId, quantity});
      const book = data.books.find((nb) => nb.id === bookId);
      const papers = [...order.papers];

      book.pages.forEach((page, index) => {
        if (!order.papers.find((p) => p.paperId === page.paperId)) {
          papers.push({paperId: page.paperId, sources: []});
          console.log(papers);
        }

        if (index >= book.pages.length - 1) {
          this.setState({order: { ...this.state.order, items, papers } });
        }
      });
    }
  }

  addPaperSource(source, paper) {
    const sourceId = source.selection;
    const papers = this.state.order.paper;
    const sources = [...papers.sources];
    if (sources && sources[sourceId]) {

    }
    // const updatedSource = { id: source.id, quantity: source.quantity }
    // source.option, source.quantity, paper.id
    // find paper in order using paper.id
    // update order.sources with {id: source.option, quantity: source.quantity}
    const index = papers.findIndex(p => p.id === paper.id);
    sources[index] = { ...sources[index],  };
  }

  render () {
    const { data, order } = this.state;
    const paperOptions = data.papers.map(paper => {return {name: paper.name, id: paper.id}});

    return (
      <div>
        <OrderDetails
          customer={order.customer}
          customers={data.customers}
          dueDate={order.dueDate}
          onDateChange={this.onDueDateChange}
          onCustomerChange={this.onCustomerChange}
        />

        <OrderItems
          books={data.books}
          items={order.items}
          newItem={this.onNewItem}
        />

        <OrderPaper>
          {order.papers && order.papers.length > 0 ? order.papers.map(paper =>
            <div>
              <OrderPaperItem
                key={paper.type}
                label={paper.type}>

                <AddNewItem
                  label="Paper Source"
                  options={paperOptions}
                  addItem={source => this.addPaperSource(source, paper)} />
              </OrderPaperItem>

              <OrderPaperSummary
                required={paper.required}
                allocated={paper.allocated} />

            </div>
          ) : 'Please add items to order.'}
        </OrderPaper>

        <button>Confirm Order!</button>
      </div>
    );
  }
};

export default OrderForm;
