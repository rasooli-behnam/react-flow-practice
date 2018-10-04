export function selectBook(book: Book) {
  return {
    type: "BOOKLIST_SELECTED",
    payload: book
  };
}
