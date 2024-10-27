import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="container relative mx-auto mb-56 px-3" id="about">
      <SectionTitle title="Who" />
      <div className="pe-2 ps-6 pt-16 md:mx-auto md:w-10/12 md:pt-44 xl:mx-0 xl:ps-60">
        <h1 className="montserrat-700 mb-2 text-6xl md:mb-6 md:text-7xl">
          Full-Stack Web Developer
        </h1>
        <div className="text-[#777777] md:text-xl">
          <p className="mb-6 text-[#777777]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            tenetur incidunt tempora natus optio animi consectetur quas
            provident, recusandae mollitia, tempore cum nobis explicabo quae
            quaerat necessitatibus odit, commodi nulla? Maxime voluptas ipsa ad
            esse qui fugiat. Magnam dolor blanditiis corporis consectetur! Esse
            itaque possimus architecto. Libero, assumenda. Repellendus omnis
            asperiores magni pariatur. Dolores expedita nesciunt vel et
            praesentium modi, tempora suscipit, labore porro nulla, magni
            exercitationem impedit aspernatur repellat ab architecto.
          </p>
          <p className="mb-6 text-[#777777]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            ipsam!
          </p>
          <p className="text-[#777777]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit ducimus molestias optio?
          </p>
          <div className="mx-auto mt-24 w-full text-center">
            <a
              href="https://drive.google.com/file/d/1j3W0P5qPe6cvVcdETU9MzpttJR-Oa9wH/view?usp=sharing" target="_blank"
              className="delay-50 mx-auto rounded-full bg-white p-4 px-10 font-semibold text-black transition-all ease-out hover:bg-[#aaeec3]"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
