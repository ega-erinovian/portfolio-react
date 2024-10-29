import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navbar = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Experiences",
      href: "#experiences",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="top-0 z-50 bg-black lg:sticky">
      <div className="container mx-auto flex items-center justify-between px-10 py-6 relative w-full">
        <h1 className="road-rage-regular delay-50 text-center text-4xl font-bold transition-all ease-out hover:scale-110 md:text-6xl">
          EMP!
        </h1>
        {/* Desktop Version */}
        <div className="hidden lg:block">
          <ul className="w-full justify-between flex">
            {navbar.map((item, idx) => (
              <a href={item.href} key={idx}>
                <li className="delay-50 rounded-full p-2 px-6 transition-all ease-out hover:bg-[#aaeec3] hover:font-semibold hover:text-black">
                  {item.title}
                </li>
              </a>
            ))}
          </ul>
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <GiHamburgerMenu className="text-2xl md:text-4xl" onClick={() => setIsClicked(!isClicked)}/>
        </div>
      </div>
      <div className={`w-full ${isClicked ? "" : "hidden"} absolute z-10 bg-black ps-4 h-screen`}>
        <ul className="flex flex-col gap-5 md:gap-10 items-end pt-20 md:pt-32">
          {navbar.map((item, idx) => (
            <a href={item.href} onClick={() => setIsClicked(!isClicked)} key={idx}>
              <li className={`delay-50 rounded-full p-2 px-6 transition-all text-5xl md:text-8xl ease-out hover:-translate-x-4 hover:font-semibold hover:text-[#aaeec3]`}>
                {item.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
