export function Form({ addItem, value, handleChange, inputIsEmpty }) {
  return (
    <form onSubmit={addItem}>
      <input
        type="text"
        placeholder="Enter New Item"
        value={value}
        onChange={handleChange} />
      <button disabled={inputIsEmpty()}>Add</button>
    </form>
  );
}
