import SearchResultPage from "./pages/SearchPage";
import SearchComponent from "./components/SearchComponent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<SearchComponent />}>
          <Route path="search" element={<SearchResultPage />} />
        </Route>
      </Routes>
  );
}

export default App;
