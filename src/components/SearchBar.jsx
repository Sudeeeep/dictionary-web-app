import search from "../assets/search_FILL0_wght400_GRAD0_opsz48.svg";
import propTypes from "prop-types";

export const SearchBar = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    let searchWord = e.target[0].value;
    e.preventDefault();
    if (searchWord !== "" && searchWord.length > 1) handleSearch(searchWord);
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#F4F4F4] px-6 py-4 rounded-2xl"
        />
        <button type="submit" className="absolute right-5 top-4">
          <img src={search} className="h-6 font-bold" />
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: propTypes.func,
};
