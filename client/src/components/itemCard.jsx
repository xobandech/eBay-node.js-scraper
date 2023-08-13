const ItemCard = ({ item }) => {
  return (
    <li className="list-none mb-4">
      <a href={item.ebayLink} className="flex ">
        <div className="w-[300px] max-w-[300px] flex justify-center bg-gray-200">
          <img src={item.image} alt="" />
        </div>
        <div>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      </a>
    </li>
  );
};

export default ItemCard;
