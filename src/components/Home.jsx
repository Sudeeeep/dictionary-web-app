import bookLogo from "../assets/book.png";

export const Home = () => {
  return (
    <div className="text-center mt-28">
      <img src={bookLogo} alt="" className="w-20 m-auto" />
      <p className="dark:text-white">
        Enter the word you want to search in the search bar
      </p>
    </div>
  );
};
