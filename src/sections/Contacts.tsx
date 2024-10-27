import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  const socials = [
    {
      link: "https://www.instagram.com/egaerinovian",
      component: <FaInstagram className="fill-black" />,
    },
    {
      link: "https://github.com/ega-erinovian",
      component: <FaGithub className="fill-black" />,
    },
    {
      link: "https://wa.me/6285155114016",
      component: <FaWhatsapp className="fill-black" />,
    },
    {
      link: "https://www.linkedin.com/in/ega-erinovian/",
      component: <FaLinkedin className="fill-black" />,
    },
  ];
  return (
    <>
      <div className="relative h-[116px] w-full overflow-hidden md:h-[144px] xl:h-[300px]" id="contact">
        <div className="absolute">
          <h1 className="montserrat-700 outlined-letter whitespace-nowrap text-4xl transition-all md:text-7xl xl:text-[154px]">
            Get In Touch — Get In Touch
          </h1>
        </div>
        <div className="absolute right-0 top-10 md:top-16 xl:top-36">
          <h1 className="montserrat-700 outlined-letter whitespace-nowrap text-4xl transition-all md:text-7xl xl:text-[154px]">
            Get In Touch — Get In Touch
          </h1>
        </div>
      </div>
      <div className="container mx-auto flex h-[520px] w-full flex-col items-center justify-center gap-20 px-4 md:h-[1000px] xl:gap-36">
        <h1 className="playfair-display-700 text-center text-6xl font-bold md:text-9xl">
          Interested to work with me?
        </h1>
        <ul className="flex w-full justify-around xl:w-1/3">
          {socials.map((social) => (
            <a href={social.link} target="_blank">
              <li className="rounded-full bg-white p-2 text-3xl transition-all hover:bg-[#aaeec3]">
                {social.component}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contacts;
