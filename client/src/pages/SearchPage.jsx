import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ItemsList from "../components/ItemsList";

const searchItems = async (query, page = 1) => {
  return await fetch(`/search?query=${query}`).then((res) => res.json());
};
    
const SearchResultPage = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const page = queryParams.get("page");
  useEffect(() => {
    (page > 1 ? searchItems(query) : searchItems(query, page)).then((data) =>
      setItems(data.data)
    );
  }, []);

  return (
    <div className="w-full flex justify-center bg-slate-200">
      <div className="w-2/3 bg-white flex flex-col mt-10 items-center">
        <ItemsList items={items} />
      </div>
    </div>
  );
};

export default SearchResultPage;
