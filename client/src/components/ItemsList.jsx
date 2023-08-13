import ItemCard from "./itemCard";
const ItemsList = ({ items }) => {
  return (
    <ul >
      {items &&
        items.length > 1 &&
        items.map((item, idx) => {
          return <ItemCard key={idx} item={item} />;
        })}
    </ul>
  );
};

export default ItemsList