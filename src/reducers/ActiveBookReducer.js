export default function(prevState: ?Book = null, action: ReduxAction<Book>) {
  if (action.type === "BOOKLIST_SELECTED") return action.payload;

  return prevState;
}
