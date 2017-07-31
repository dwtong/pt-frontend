const addOrUpdateQuantity = ({array, identifierName, identifier, quantity}) => {
  const id = parseInt(identifier, 10);
  const qty = parseInt(quantity, 10);
  const newArray = [...array];
  const index = newArray.findIndex(i => i[identifierName] === id);

  if (index >= 0) {
    newArray[index].quantity += qty;
  } else {
    newArray.push({ [identifierName]: id, quantity: qty });
  }

  return newArray;
};

export default addOrUpdateQuantity;
