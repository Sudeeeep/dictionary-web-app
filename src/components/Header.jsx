import logo from "../assets/library_books_FILL0_wght400_GRAD0_opsz48.svg";
import dark from "../assets/dark_mode_FILL0_wght400_GRAD0_opsz48.svg";
import light from "../assets/light_mode_FILL0_wght400_GRAD0_opsz48.svg";

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <img src={logo} alt="" />
        <div className="flex items-center">
          <label
            htmlFor="check"
            className="block bg-[#757575] relative w-14 h-6 rounded-full cursor-pointer"
          >
            <input
              type="checkbox"
              name="check"
              id="check"
              className="appearance-none peer"
            />
            <span className="w-4 h-4 absolute bg-white rounded-full left-1 top-1 peer-checked:left-9 transition-all duration-500"></span>
          </label>
          <img src={dark} alt="dark mode" className="h-8" />
          <img src={light} alt="light mode" className="h-8" />
        </div>
      </div>
    </>
  );
};
