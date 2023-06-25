import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="container w-11/12 sm:w-3/5 m-auto">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
