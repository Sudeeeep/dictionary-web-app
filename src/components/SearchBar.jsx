import search from "../assets/search_FILL0_wght400_GRAD0_opsz48.svg";

export const SearchBar = () => {
  return (
    <div className="mt-6">
      <form className="relative">
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
