import { Item } from "./Item";

export function ItemsList({ items }) {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
          <Item item={item} index={index} />
        ))}
      </ol>
    </div>
  );
}
