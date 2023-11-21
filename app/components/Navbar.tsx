import Link from "next/link";
import Logo from "./icons/logo";
import { useState } from "react";

const Navbar = () => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-6 my-[3px] rounded-full bg-ludarkpurple transition ease transform duration-300`;
  return (
    <>
      <nav className="p-6 justify-between items-center flex md:hidden z-51 fixed top-0 left-0 w-full bg-lupurple1">
        <Link href="/welcome-page">
          <Logo />
        </Link>
        <button
          className="flex flex-col h-12 w-12 justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`${genericHamburgerLine} group-hover:opacity-100`} />
          <div className={`${genericHamburgerLine} group-hover:opacity-100`} />
          <div className={`${genericHamburgerLine} group-hover:opacity-100`} />
        </button>
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-full h-full bg-lupurple1 z-50 transition ease transform duration-300`}
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-2 right-2 p-6 cursor-pointer"
          >
            <div
              className={`${genericHamburgerLine}
                    rotate-[135deg] translate-y-3 group-hover:opacity-100
                    `}
            ></div>
            <div
              className={`${genericHamburgerLine}
                    rotate-45 translate-y-2 group-hover:opacity-100
                    `}
            ></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 h-full">
            <Link href="/confirmation-page">
              <button className=" bg-ludarkpurple p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] w-[209px] h-[50px]">
                Confirm presence
              </button>
            </Link>
            <Link
              href="/welcome-page#where"
              onClick={() => setIsOpen(false)}
              className="uppercase"
            >
              Where
            </Link>
            <Link
              href="/welcome-page#when"
              onClick={() => setIsOpen(false)}
              className="uppercase"
            >
              When
            </Link>
            <Link
              href="/welcome-page#donations"
              onClick={() => setIsOpen(false)}
              className="uppercase"
            >
              Donations
            </Link>
            <Link
              href="/welcome-page#countdown"
              onClick={() => setIsOpen(false)}
              className="uppercase"
            >
              Countdown
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

const DesktopNavbar = () => {
  return (
    // position fixed
    <nav className="p-6 flex justify-between items-center hidden md:flex fixed top-0 left-0 w-full z-50 bg-lupurple1">
      <Link href="/welcome-page">
        <Logo />
      </Link>

      <div className="flex gap-4 items-center justify-center">
        <Link href="/welcome-page#where" className="uppercase">
          Where
        </Link>
        <Link href="/welcome-page#when" className="uppercase">
          When
        </Link>
        <Link href="/welcome-page#donations" className="uppercase">
          Donations
        </Link>
        <Link href="/welcome-page#countdown" className="uppercase">
          Countdown
        </Link>
      </div>

      <Link href="/confirmation-page">
        <button className=" bg-ludarkpurple p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] w-[209px] h-[50px]">
          Confirm presence
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
