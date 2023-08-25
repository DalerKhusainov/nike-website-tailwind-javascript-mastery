import Link from "next/link";
import Image from "next/image";

interface ILinks {
  name: string;
  path: string;
}
[];

const links: ILinks = [
  {
    name: "home",
    path: "/",
    title: 'title',
  },
];

const NavLinks = () => {};

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
      </nav>
    </header>
  );
};

export default NavBar;
