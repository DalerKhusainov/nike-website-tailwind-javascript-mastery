// NEXTJS HOOKS
import Link from "next/link";
import Image from "next/image";
// FROM CONSTANTS
import { navLinks } from "@/constants";

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image
            src="/images/header-logo.svg"
            alt="App logo"
            width={130}
            height={29}
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <>
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            </>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image
            width={25}
            height={25}
            src="/icons/hamburger.svg"
            alt="Hamburger logo"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
