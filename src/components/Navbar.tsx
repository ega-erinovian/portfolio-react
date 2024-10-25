const Navbar = () => {
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
      <div className="container mx-auto items-center justify-between py-6 lg:flex">
        <h1 className="road-rage-regular delay-50 text-center text-4xl font-bold transition-all ease-out hover:scale-110 md:text-6xl">
          EMP!
        </h1>
        <div className="w-1/3">
          <ul className="hidden w-full justify-between lg:flex">
            {navbar.map((item) => (
              <a href={item.href}>
                <li className="delay-50 rounded-full p-2 px-6 transition-all ease-out hover:bg-[#aaeec3] hover:font-semibold hover:text-black">
                  {item.title}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
