import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[3.75rem] bg-bodyColor bottom_shadow">
      <div className="custom_container h-full">
        <div className="flex_center h-full w-full">
          <nav className="flex_between w-full">
            <h3 className="title_normal_bold spaced">pGitonga</h3>
            <span className="text-h3">
              <RiMenu3Fill />
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
