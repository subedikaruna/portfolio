import ViewMoreButton from "../button/ViewMoreButton";

const ProjectCard = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="rounded overflow-hidden shadow-lg pb-6">
          {" "}
          {/* Added pb-6 */}
          <img
            className="w-full"
            src="/bestwayhr.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Best Way HR Agency Website Development
            </div>
            <p className="text-gray-700 text-base">
              Description: Designed and developed the frontend for Best Way HR
              Agency, a leading manpower recruitment platform in Nepal, using
              HTML, CSS, and JavaScript. The website focuses on connecting
              skilled professionals with global opportunities, featuring a
              clean, responsive layout that highlights their services, vision,
              mission, and success stories. The user-centric interface was
              crafted to provide seamless navigation and effectively showcase
              the agency’s commitment to excellence in talent recruitment and
              development. Key Features: Responsive Design: Ensured
              compatibility across various
            </p>
          </div>
          <ViewMoreButton />
        </div>
        <div className="rounded overflow-hidden shadow-lg pb-6">
          {" "}
          {/* Added pb-6 */}
          <img
            className="w-full"
            src="/ray.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Raystronic Homepage Redesign
            </div>
            <p className="text-gray-700 text-base">
              I redesigned the homepage of Raystronic, a leading tech company
              specializing in electronics, using HTML, CSS, and JavaScript. The
              goal of this project was to enhance the visual appeal and user
              experience while maintaining the company’s brand identity. Key
              features of the redesign include: Modern, visually engaging
              design: Created a clean and contemporary layout with a focus on
              typography, color schemes, and high-quality imagery to reflect the
              company’s innovative products and services. Mobile-first approach:
              Ensured the design is fully responsive, optimizing it for smooth
              navigation across devices, including desktops, tablets, and
              smartphones. Improved navigation: Simplified the site’s structure
              for easy access to important information, improving overall
              usability and enhancing user engagement. Interactive elements:
              Integrated JavaScript to add dynamic features such as smooth
              scrolling and interactive buttons, making the homepage more
              engaging. This project demonstrates my skills in front-end
              development and UI design, showcasing my ability to craft
              functional, responsive websites that align with user needs and
              business objectives.
            </p>
          </div>
          <ViewMoreButton />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
