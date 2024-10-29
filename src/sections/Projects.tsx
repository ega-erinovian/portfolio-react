import SectionTitle from "../components/SectionTitle";
import project1 from "../assets/projects.png";
import project2 from "../assets/project2.png";

const Projects = () => {
  const projects = [
    {
      title: "portfolio.com",
      date: "October 2024",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore dolorem explicabo qui numquam expedita, sit repellendus aliquid sunt eius facere vero, nam ab maxime.",
      img: project1,
    },
    {
      title: "Bounce",
      date: "March 2025",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus inventore repellendus, ipsum labore necessitatibus odit dolorem reprehenderit consectetur incidunt voluptatibus minus doloremque molestiae sint!",
      img: project2,
    },
  ];
  
  return (
    <div className="container relative mx-auto mb-24 xl:mb-60 max-w-screen-xl overflow-hidden px-3" id="projects">
      <SectionTitle title="Projects" />
      <div className="px-2 pt-36 md:pt-96">
        {projects.map((project, index) => (
          <>
            <hr />
            <div className="mt-20 md:mt-32 container">
              <h1 className="playfair-display-700 mb-6 text-5xl">
                {index + 1}/{projects.length}
              </h1>
              <h1 className="montserrat-700 mb-2 text-5xl text-[#aaeec3] transition-all md:mb-6 md:text-7xl">
                {project.title}
              </h1>
              <p className="text-md mb-6 text-[#777777] md:text-xl">
                {project.date}
              </p>
              <p className="text-md mb-10 md:text-xl">{project.description}</p>
              <img className="w-full" src={project.img} alt="project1" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
