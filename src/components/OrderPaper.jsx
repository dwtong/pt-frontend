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

  const calcPaperAllocated = () => {
    return 50;
  };

  return (
    <div style={borderStyle}>
      <h3>Paper Allocation</h3>

      {paperTypes && paperTypes.length > 0 ? paperTypes.map(pt =>
        <div>
          <OrderPaperItem
            key={pt.id}
            label={pt.name}>

            <AddNewItem
              label="Paper Source"
              options={paperTypes.map(p => {return {name: p.name, id: p.id}})}
              addItem={addPaperSource}
            />
          </OrderPaperItem>

          <OrderPaperSummary
            required={calcPaperRequired(pt)}
            allocated={calcPaperAllocated(pt)}
          />

        </div>
      ) : 'Please add items to order.'}
    </div>
  );
};

export default OrderPaper;
