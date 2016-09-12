export function selectBook(book) {
  // selectBook is an actionCreator, it needs to return an action
  // Which is an Object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
