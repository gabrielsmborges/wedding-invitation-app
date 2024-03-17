import { Link } from "@remix-run/react";
import Logo from "./icons/logo";

const Navbar = () => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
};

const MobileNavbar = () => {
  return (
    <>
      <nav className="p-6 justify-between items-center flex md:hidden z-51 fixed top-0 left-0 w-full bg-lupurple1 z-50">
        <Link to={"https://gabriel-luanne.com"}>
          <Logo />
        </Link>
      </nav>
    </>
  );
};

const DesktopNavbar = () => {
  return (
    // position fixed
    <nav className="p-6 justify-between items-center hidden md:flex fixed top-0 left-0 w-full z-50 bg-lupurple1">
      <Link to="https://gabriel-luanne.com">
        <Logo />
      </Link>

    </nav>
  );
};

export default Navbar;
