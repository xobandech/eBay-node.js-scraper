import { useEffect, useState } from "react";
const searchItems = async (query) => {
    return await fetch(`/search?query=${query}`)
      .then((res) => res.json())
  };

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);



  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");
    if (query) {
        setQuery(query)
        searchItems(query).then(response => setItems(response.data))
    }
    console.log(query);
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        style={{
          outline: "solid",
        }}
      />
      <button onClick={() => searchItems()}>Click me</button>
      {items &&
        items.length > 1 &&
        items.map((item) => {
          return (
            <div>
              <a href={item.ebayLink}>
                <img src={item.image} alt="" />
                <div style={{ display: "flex" }}>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default SearchComponent;
