import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  const socialIcons = [
    <FaInstagram />,
    <FaGithub />,
    <CiMail />,
    <FaLinkedin />,
  ];
  return (
    <>
      <div className="relative h-[116px] w-full overflow-hidden md:h-[400px]">
        <div className="absolute">
          <h1 className="montserrat-700 outlined-letter whitespace-nowrap text-4xl transition-all md:text-7xl lg:text-[154px]">
            Get In Touch — Get In Touch
          </h1>
        </div>
        <div className="absolute right-0 top-10 md:top-16 lg:top-36">
          <h1 className="montserrat-700 outlined-letter whitespace-nowrap text-4xl transition-all md:text-7xl lg:text-[154px]">
            Get In Touch — Get In Touch
          </h1>
        </div>
      </div>
      <div className="container flex h-[600px] w-full flex-col items-center justify-center px-4 md:h-screen">
        <h1 className="playfair-display-700 text-center text-6xl font-bold md:text-9xl">
          Interested to work with me?
        </h1>
        <ul className="flex w-full justify-around">
          {socialIcons.map((social) => <li className="text-3xl">{social}</li>)}
        </ul>
      </div>
    </>
  );
};

export default Contacts;
