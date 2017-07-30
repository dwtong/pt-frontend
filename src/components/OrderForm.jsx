import React, { Component } from 'react';
import AddNewItem from './AddNewItem';
import OrderItem from './OrderItem';
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
    this.addOrderItem = this.addOrderItem.bind(this);
    // this.addOrUpdateItem = this.addOrUpdateItem.bind(this);
    this.addPaperSource = this.addPaperSource.bind(this);
    // this.calculatePaperQuantity = this.calculatePaperQuantity.bind(this);
  }
  //
  // componentWillMount() {
  //   console.log('====== STATE ======');
  //   console.log(this.state);
  // }
  //
  componentDidUpdate() {
    console.log('====== STATE ======');
    console.log(this.state);
  }

  onCustomerChange(event) {
    this.setState({ order: { ...this.state.order, customer: event.target.value } });
  }

  onDueDateChange(event) {
    this.setState({ order: { ...this.state.order, dueDate: event.target.value } });
  }

  addOrderItem(item) {
    const bookId = parseInt(item.selection, 10);
    const quantity = parseInt(item.quantity, 10);
    const items = [...this.state.order.items];
    const index = items.findIndex(i => i.bookId === bookId);

    if (index >= 0) {
      items[index].quantity += quantity;
    } else {
      items.push({bookId: bookId, quantity: quantity});
      // add to order.papers if required
    }
    this.setState({order: { items: items } });
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

  // calculatePaperQuantities() {
  //   const book = this.findBook(item.bookId);
  //   let requiredPaper = [];
  //
  //   book.pages.forEach((page, index) => {
  //     requiredPaper.push({paperId: page.paperId, quantity: page.quantity * item.quantity});
  //
  //     if (index >= book.pages.length - 1) {
  //       return requiredPaper;
  //     }
  //   });
  // }

  findBook(id) {
    console.log(`book id: ${id}`);
    console.log(this.state.data.books);
    return this.state.data.books.find(nb => nb.id === id);
  }

  render () {
    const { data, order } = this.state;
    // const notebooks = notebookTypes.map(nb => {return { name: nb.name, id: nb.id } });
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

        <OrderItems>
          {order.items && order.items.map(item =>
            <OrderItem
              key={item.bookId}
              item={this.findBook(item.bookId)}
              quantity={item.quantity} />)}

          <AddNewItem
            label="Notebook Type"
            options={data.books}
            addItem={this.handleNewItem} />
        </OrderItems>

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
