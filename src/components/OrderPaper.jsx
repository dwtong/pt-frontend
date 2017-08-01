import React from 'react';
import OrderPaperItem from './OrderPaperItem';
import OrderPaperSummary from './OrderPaperSummary';
import AddNewItem from './AddNewItem';
import { borderStyle } from '../styles';

const OrderPaper = ({ books, order, paperTypes, addPaperSource }) => {
  const calcPaperRequired = (paperType) => {
    if (order.items && order.items.length > 0) {
      return order.items.reduce((sum, item) => {
        // match order item with book
        const book = books.find(b => b.id === item.bookId);
        // match page of book with paper type
        const page = book && book.pages.find(p => p.paperId === paperType.id);
        // multiply number of pages required per book by quantity of books in order
        return page && sum + page.quantity * item.quantity;
      }, 0);

    } else {
      return 0;
    }
  };

  const calcPaperAllocated = (paperType) => {
    // Find paper type
    // Reduce quantities of sources
  };

  const paperTypesForOrder = paperTypes.filter(pt => calcPaperRequired(pt) > 0);

  return (
    <div style={borderStyle}>
      <h3>Paper Allocation</h3>

      {paperTypesForOrder.length > 0 ? paperTypesForOrder.map(pt =>
        <div style={borderStyle}>
          <OrderPaperItem
            key={pt.id}
            label={pt.name}>

            <AddNewItem
              label="Paper Source"
              options={pt.sources.map(p => {return {name: `${p.name} (${p.quantity})`, id: p.id}})}
              addItem={(source) => addPaperSource(source, pt.id)}
            />
          </OrderPaperItem>

          <OrderPaperSummary
            required={calcPaperRequired(pt)}
            allocated={calcPaperAllocated(pt)}
          />

        </div>)
        : 'Please add items to order.'}
    </div>
  );
};

export default OrderPaper;
