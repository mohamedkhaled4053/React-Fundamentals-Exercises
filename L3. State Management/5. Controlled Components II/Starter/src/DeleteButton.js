export function DeleteButton({ deleteLastItem, noItemsFound }) {
  return (
    <button onClick={deleteLastItem} disabled={noItemsFound()}>
      Delete Last Item
    </button>
  );
}
