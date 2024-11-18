import { useMediaQuery } from "@/src/hooks/use-media-query";
import { Logo } from "@/src/icons/Logo";
import { Menu } from "@/src/icons/Menu";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isPhone = useMediaQuery("(max-width: 640px)");

  const handleOpenMenu = () => {
    setIsDropdownOpen((previous) => !previous);
  };

  return isPhone ? (
    <>
      <div className="flex flex-row justify-between shadow-lg px-4 py-2 bg-[#F3FAFF]">
        <Logo className="w-[180px]" />
        <button type="button" onClick={handleOpenMenu}>
          <Menu />
        </button>
      </div>
      {isDropdownOpen ? (
        <div className="flex flex-col bg-[#F3FAFF] gap-3 p-2 items-center transition-transform transform duration-300 ease-in-out">
          <Link
            className="text-[18px] hover:text-[#054166] transition-colors duration-300"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-[18px] hover:text-[#054166] transition-colors duration-300"
            href={"/"}
          >
            About Us
          </Link>
          <Link
            className="text-[18px] hover:text-[#054166] transition-colors duration-300"
            href={"/"}
          >
            Contact
          </Link>
        </div>
      ) : null}
    </>
  ) : (
    <div className="flex flex-row py-8 px-20 justify-between shadow-lg bg-[#F3FAFF] w-full sticky top-0 z-50">
      <Logo />
      <div className="flex flex-row gap-10 self-center">
        <Link className="text-[24px] hover:text-[#054166]" href={"/"}>
          Home
        </Link>
        <Link className="text-[24px] hover:text-[#054166]" href={"/"}>
          About Us
        </Link>
        <Link className="text-[24px] hover:text-[#054166]" href={"/"}>
          Contact
        </Link>
      </div>
      <button className="text-[26px] px-12 py-1 border-2 border-[#054166] transition-all duration-300 hover:px-16 hover:py-2">
        Sign in
      </button>
    </div>
  );
};
