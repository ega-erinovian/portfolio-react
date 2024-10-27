import SectionTitle from "../components/SectionTitle";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Web Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt sit nisi? Aperiam minima corrupti fuga eum, inventore neque nesciunt.",
      place: "Purwadhika",
      date: "August 2024 - January 2025",
    },
    {
      title: "Front-end Web Developer Intern",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt sit nisi? Aperiam minima corrupti fuga eum, inventore neque nesciunt.",
      place: "Google",
      date: "February - September 2025",
    },
    {
      title: "Front-end Web Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt sit nisi? Aperiam minima corrupti fuga eum, inventore neque nesciunt.",
      place: "Meta",
      date: "October 2025 - Now",
    },
  ];

  return (
    <div className="container relative mx-auto mb-56 w-full overflow-hidden px-3" id="experiences">
      <SectionTitle title="Experiences" />
      <div className="pe-2 ps-6 pt-16 md:mx-auto md:w-10/12 md:pt-44 xl:mx-0 xl:ps-60">
        {experiences.map((experience) => (
          <div className="mb-20">
            <h1 className="montserrat-700 mb-2 text-4xl transition-all hover:text-[#aaeec3] md:mb-6 md:text-7xl">
              {experience.title}
            </h1>
            <div className="text-[#777777] md:text-xl">
              <p className="mb-6 text-[#777777]">{experience.description}</p>
              <p className="mb-6">
                <span className="font-bold text-[#aaeec3]">{experience.place}</span> •{" "}
                {experience.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
